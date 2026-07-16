"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { BackToTop } from "@/components/back-to-top";
import { useHydrated } from "@/hooks/use-hydrated";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Hassan0703",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassan-ali-frappe-dev",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hassan4185767@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

export function Footer() {
  const hydrated = useHydrated();
  return (
    <>
      <footer className="relative overflow-hidden border-t border-[rgba(232,199,126,0.05)]" role="contentinfo">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-section-alt" />
        <div className="absolute inset-0 bg-noise" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A44C' fill-opacity='0.4'%3E%3Cpath d='M20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/" className="inline-block" aria-label="Home">
                    <Logo size={40} />
                  </Link>
                  <p className="mt-4 text-sm text-[#8A8272] leading-relaxed max-w-xs">
                    ERP architect and full-stack engineer specializing in Frappe, ERPNext,
                    and enterprise automation solutions.
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xs font-mono tracking-[3px] text-[#6A6358] mb-5">
                    NAVIGATION
                  </h3>
                  <ul className="space-y-3" role="list">
                    {FOOTER_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#8A8272] hover:text-gold transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xs font-mono tracking-[3px] text-[#6A6358] mb-5">
                    SERVICES
                  </h3>
                  <ul className="space-y-3" role="list">
                    {[
                      { label: "ERPNext Development", href: "/services" },
                      { label: "Frappe Development", href: "/services" },
                      { label: "Business Automation", href: "/services" },
                      { label: "Technical Consulting", href: "/services" },
                    ].map((s) => (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          className="text-sm text-[#8A8272] hover:text-gold transition-colors duration-200"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xs font-mono tracking-[3px] text-[#6A6358] mb-5">
                      CONNECT
                    </h3>
                    <div className="flex gap-3">
                      {SOCIALS.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-xl border border-[rgba(232,199,126,0.12)] bg-white/[0.015] flex items-center justify-center text-[#8A8272] hover:text-gold hover:border-gold/25 hover:bg-gold/[0.04] transition-all duration-200"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <motion.a
                      href="mailto:hassan4185767@gmail.com"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 px-5 h-11 rounded-xl gold-gradient text-[#1a1a1a] text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Start a Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[rgba(232,199,126,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-xs text-[#5C5548] font-mono">
                &copy; {hydrated ? new Date().getFullYear() : "2025"} Hassan Ali. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#5C5548] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" aria-hidden="true" />
                  Available for projects
                </span>
                <span className="hidden sm:inline text-[#3A3528]">/</span>
                <span className="hidden sm:inline">
                  Built with <span className="text-gold/50" aria-hidden="true">&lt;/&gt;</span> in Lahore
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
