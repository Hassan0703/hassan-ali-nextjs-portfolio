"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

export function useMousePosition(stiffness = 150, damping = 15) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    },
    [mouseX, mouseY]
  );

  return { mouseX, mouseY, springX, springY, handleMouseMove };
}
