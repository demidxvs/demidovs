"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const items: NavItem[] = [
  { id: "hero", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && items.some((item) => item.id === hash)) {
        setActiveId(hash);
        return true;
      }
      return false;
    };

    const getActiveSectionId = () => {
      if (sections.length === 0) return items[0].id;

      const bottomThreshold =
        document.documentElement.scrollHeight - window.innerHeight - 8;
      if (window.scrollY >= bottomThreshold) {
        return sections[sections.length - 1].id;
      }

      const marker = 160;
      const containingSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom >= marker;
      });
      if (containingSection) return containingSection.id;

      let closestId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - marker);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      });
      return closestId;
    };

    const syncFromScroll = () => {
      setActiveId(getActiveSectionId());
    };

    const sync = () => {
      if (!setFromHash()) syncFromScroll();
    };

    sync();
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", sync);
    window.addEventListener("resize", syncFromScroll);
    window.addEventListener("pageshow", sync);

    return () => {
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("resize", syncFromScroll);
      window.removeEventListener("pageshow", sync);
    };
  }, []);

  return (
    <div className="nav-pills">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={activeId === item.id ? "active" : undefined}
          onClick={() => {
            setActiveId(item.id);
            requestAnimationFrame(() => setActiveId(item.id));
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
