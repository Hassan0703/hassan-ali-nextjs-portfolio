"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface InteractiveSVGProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  intensity?: number;
}

export function InteractiveSVG({
  children,
  className = "",
  perspective = 800,
  intensity = 10,
}: InteractiveSVGProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * intensity);
    y.set(py * intensity);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: springY,
          rotateY: springX,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function AnimatedSVGPath({
  path,
  duration = 2,
  delay = 0,
  stroke = "rgba(232,199,126,0.3)",
  strokeWidth = 1,
  className = "",
}: {
  path: string;
  duration?: number;
  delay?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <motion.path
      d={path}
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  );
}

interface GlowCircleProps {
  cx: number;
  cy: number;
  r: number;
  color?: string;
  pulse?: boolean;
}

export function GlowCircle({ cx, cy, r, color = "rgba(232,199,126,0.15)", pulse = false }: GlowCircleProps) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={color}
      animate={pulse ? { r: [r, r + 5, r], opacity: [0.3, 0.6, 0.3] } : undefined}
      transition={pulse ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
    />
  );
}

interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  animated?: boolean;
}

export function ConnectionLine({
  x1, y1, x2, y2,
  color = "rgba(232,199,126,0.15)",
  animated = true,
}: ConnectionLineProps) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth="0.8"
      initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
      whileInView={animated ? { pathLength: 1, opacity: 1 } : undefined}
      viewport={animated ? { once: true } : undefined}
      transition={animated ? { duration: 1.5, ease: "easeInOut" } : undefined}
    />
  );
}
