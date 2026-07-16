"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      setIsAtTop(current < 10);
      if (current < lastScroll || current < 10) {
        setDirection("up");
      } else if (current > lastScroll && current > 80) {
        setDirection("down");
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, isAtTop };
}
