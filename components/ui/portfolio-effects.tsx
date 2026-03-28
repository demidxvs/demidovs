"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const header = document.getElementById("hdr");

    let frameId = 0;
    let initialized = false;
    let cleanupResize: (() => void) | undefined;

    const syncHeader = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 40);
    };

    const startCanvas = () => {
      if (!(canvas instanceof HTMLCanvasElement)) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let W = 0;
      let H = 0;
      let pts: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        r: number;
        a: number;
      }> = [];

      const N = 72;
      const LINK = 145;

      const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      };

      const point = () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.45 + 0.12,
      });

      const init = () => {
        pts = [];
        for (let i = 0; i < N; i += 1) pts.push(point());
      };

      const tick = () => {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < pts.length; i += 1) {
          const p = pts[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,200,200,${p.a})`;
          ctx.fill();

          for (let j = i + 1; j < pts.length; j += 1) {
            const q = pts[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < LINK) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(190,190,190,${(1 - d / LINK) * 0.14})`;
              ctx.lineWidth = 0.65;
              ctx.stroke();
            }
          }
        }

        frameId = window.requestAnimationFrame(tick);
      };

      resize();
      init();
      window.cancelAnimationFrame(frameId);
      tick();

      const onResize = () => {
        resize();
        init();
      };

      window.addEventListener("resize", onResize);
      cleanupResize = () => window.removeEventListener("resize", onResize);
      initialized = true;
    };

    const rehydrate = () => {
      syncHeader();
      if (!initialized) {
        startCanvas();
      } else if (frameId === 0) {
        startCanvas();
      }
    };

    const onPageShow = () => {
      rehydrate();
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") rehydrate();
    };

    rehydrate();
    window.addEventListener("scroll", syncHeader, { passive: true });
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("scroll", syncHeader);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (cleanupResize) cleanupResize();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
