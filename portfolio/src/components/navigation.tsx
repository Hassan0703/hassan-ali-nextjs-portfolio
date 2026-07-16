"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Logo } from "@/components/logo";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/open-source", label: "Open Source" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const { direction, isAtTop } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50"
      animate={{
        y: direction === "down" && !isAtTop ? -100 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 md:mt-4 rounded-2xl bg-[#0A0806]/70 backdrop-blur-2xl border border-[rgba(232,199,126,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500">
          <div className="flex items-center justify-between h-12 md:h-14 px-4 md:px-5">
            <Link href="/" className="relative group" aria-label="Home">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Logo size={28} />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className="relative px-3.5 py-1.5 cursor-pointer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span
                        className={`relative z-10 text-xs font-medium tracking-wide transition-colors duration-200 ${
                          isActive ? "text-gold" : "text-[#8A8272] hover:text-[#EDE7D8]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute inset-0 rounded-lg bg-gold/[0.06] border border-gold/15"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <motion.a
                href="mailto:hassan4185767@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:inline-flex items-center gap-2 px-4 h-8 rounded-full gold-gradient text-[#1a1a1a] text-[11px] font-bold tracking-wide hover:opacity-90 transition-opacity"
              >
                Hire Me
              </motion.a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg text-[#8A8272] hover:text-[#EDE7D8] hover:bg-white/[0.05] transition-all"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <div className="w-4.5 flex flex-col gap-1">
                  <motion.span
                    className="block h-[1.5px] w-full rounded-full bg-current"
                    animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="block h-[1.5px] w-full rounded-full bg-current"
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="block h-[1.5px] w-full rounded-full bg-current"
                    animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="rounded-2xl bg-[#0A0806]/90 backdrop-blur-2xl border border-[rgba(232,199,126,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="py-2 px-2 flex flex-col gap-0.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "text-gold bg-gold/[0.06] border border-gold/15"
                            : "text-[#8A8272] hover:text-[#EDE7D8] hover:bg-white/[0.03]"
                        }`}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                })}
                <a
                  href="mailto:hassan4185767@gmail.com"
                  onClick={() => setMobileOpen(false)}
                  className="mx-2 mt-2 mb-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gold-gradient text-[#1a1a1a] text-sm font-bold"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
