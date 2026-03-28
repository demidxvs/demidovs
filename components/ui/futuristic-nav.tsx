"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Bookmark, Home, Search, Settings, User } from "lucide-react";

interface DefaultNavItem {
  id: number;
  icon: React.ReactNode;
  label: string;
}

const defaultItems: DefaultNavItem[] = [
  { id: 0, icon: <Home size={18} />, label: "Home" },
  { id: 1, icon: <Search size={18} />, label: "Search" },
  { id: 2, icon: <Bell size={18} />, label: "Alerts" },
  { id: 3, icon: <User size={18} />, label: "Profile" },
  { id: 4, icon: <Bookmark size={18} />, label: "Saved" },
  { id: 5, icon: <Settings size={18} />, label: "Settings" },
];

export interface FuturisticNavItem {
  id: number;
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface FuturisticNavProps {
  items?: FuturisticNavItem[];
  className?: string;
}

export default function FuturisticNav({
  items,
  className = "",
}: FuturisticNavProps) {
  const resolvedItems = useMemo<FuturisticNavItem[]>(
    () =>
      items && items.length > 0
        ? items
        : defaultItems.map((item) => ({
            id: item.id,
            label: item.label,
            icon: item.icon,
          })),
    [items]
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const linkedItems = resolvedItems.filter((item) => item.href);
    if (linkedItems.length === 0) return;

    const sections = linkedItems
      .map((item) => {
        const id = item.href?.replace("#", "");
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const syncActive = () => {
      let currentIndex = 0;
      linkedItems.forEach((item) => {
        const section = document.getElementById(item.href!.replace("#", ""));
        if (section && window.scrollY >= section.offsetTop - 180) {
          currentIndex = resolvedItems.findIndex((entry) => entry.id === item.id);
        }
      });
      setActive(currentIndex);
    };

    syncActive();
    window.addEventListener("scroll", syncActive);
    return () => window.removeEventListener("scroll", syncActive);
  }, [resolvedItems]);

  return (
    <div className={`futuristic-nav ${className}`.trim()}>
      <div className="futuristic-nav__bar">
        {resolvedItems.map((item, index) => {
          const isActive = index === active;
          const commonClassName = `futuristic-nav__item${isActive ? " is-active" : ""}`;
          const content = (
            <>
              {item.icon ? <span className="futuristic-nav__icon">{item.icon}</span> : null}
              <span className="futuristic-nav__label">{item.label}</span>
            </>
          );

          if (item.href) {
            return (
              <motion.a
                key={item.id}
                href={item.href}
                className={commonClassName}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.02 }}
                animate={{ scale: 1 }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="futuristic-active-pill"
                    className="futuristic-nav__active-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                {content}
              </motion.a>
            );
          }

          return (
            <motion.button
              key={item.id}
              type="button"
              className={commonClassName}
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.02 }}
              animate={{ scale: 1 }}
            >
              {isActive ? (
                <motion.span
                  layoutId="futuristic-active-pill"
                  className="futuristic-nav__active-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              {content}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
