"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#E8C77E" strokeWidth="1.2">
        <rect x="6" y="10" width="36" height="28" rx="4" />
        <line x1="16" y1="10" x2="16" y2="38" />
        <line x1="32" y1="10" x2="32" y2="38" />
        <line x1="6" y1="20" x2="42" y2="20" />
        <line x1="6" y1="30" x2="42" y2="30" />
      </svg>
    ),
    title: "ERPNext Development",
    subtitle: "End-to-end ERP systems",
    color: "#E8C77E",
    items: [
      "Custom module development",
      "ERP implementation & migration",
      "System integration & APIs",
      "Performance optimization",
      "Multi-tenant architecture",
      "Data migration & cleanup",
    ],
    desc: "I take ERPNext from concept to production — custom modules that fit your existing workflows, data migrations that don&apos;t lose history, and integrations that connect your stack without fragile middleware.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#E8C77E" strokeWidth="1.2">
        <path d="M8 36V12a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H12a4 4 0 01-4-4z" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="30" cy="18" r="3" />
        <circle cx="18" cy="30" r="3" />
        <circle cx="30" cy="30" r="3" />
        <line x1="21" y1="18" x2="27" y2="18" />
        <line x1="18" y1="21" x2="18" y2="27" />
        <line x1="30" y1="21" x2="30" y2="27" />
        <line x1="21" y1="30" x2="27" y2="30" />
      </svg>
    ),
    title: "Frappe Development",
    subtitle: "Custom applications on Frappe",
    color: "#C9A44C",
    items: [
      "Custom DocTypes & forms",
      "Workflow automation",
      "Server scripts & hooks",
      "REST API development",
      "Background job processing",
      "Third-party integrations",
    ],
    desc: "I build on Frappe the way it was meant to be used — clean DocType design, sensible server-side logic, and UI that doesn&apos;t require a manual. Everything ships with tests and documentation.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#E8C77E" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6v12l8 8" />
        <line x1="12" y1="24" x2="36" y2="24" />
        <line x1="24" y1="12" x2="24" y2="36" />
      </svg>
    ),
    title: "Business Automation",
    subtitle: "Streamline your operations",
    color: "#F0D89A",
    items: [
      "Workflow automation design",
      "Email & notification systems",
      "Document generation",
      "Approval chain automation",
      "Scheduled task automation",
      "Reporting & analytics",
    ],
    desc: "I find the repetitive tasks that eat your team&apos;s time and automate them — not with fragile scripts, but with Frappe hooks, background jobs, and event-driven workflows that don&apos;t break when something changes.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#E8C77E" strokeWidth="1.2">
        <circle cx="16" cy="16" r="6" />
        <circle cx="32" cy="16" r="6" />
        <circle cx="24" cy="34" r="6" />
        <line x1="21" y1="19" x2="27" y2="19" />
        <line x1="20" y1="21" x2="22" y2="30" />
        <line x1="28" y1="21" x2="26" y2="30" />
      </svg>
    ),
    title: "Technical Consulting",
    subtitle: "Expert guidance & strategy",
    color: "#9C7A2E",
    items: [
      "ERP strategy & roadmap",
      "Architecture review & audit",
      "Technology selection",
      "Team training & mentorship",
      "Code review & best practices",
      "Scalability assessment",
    ],
    desc: "Not every problem needs custom code. Sometimes the right answer is a configuration change, a different tool, or a simpler process. I help teams make those calls with confidence — and when code is the answer, I help them build it right.",
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Using",
    color: "#4CAF50",
    items: ["Python", "ERPNext", "Frappe", "MariaDB"],
  },
  {
    title: "Learning",
    color: "#42A5F5",
    items: ["Docker", "Next.js", "AI Agents"],
  },
  {
    title: "Exploring",
    color: "#FFB74D",
    items: ["Rust", "Go", "Kubernetes"],
  },
  {
    title: "Future",
    color: "#C9A44C",
    items: ["Cloud Native", "LLMs", "Automation"],
  },
];

const PRINCIPLES = [
  { num: "01", title: "Business First", desc: "Understand the problem before writing a single line of code." },
  { num: "02", title: "Clean Architecture", desc: "Maintainable, scalable, and well-structured code always wins." },
  { num: "03", title: "Performance Matters", desc: "Optimize queries, reduce latency and deliver fast experiences." },
  { num: "04", title: "Automation Over Repetition", desc: "If you do it twice, script it. If thrice, automate it." },
  { num: "05", title: "Scalable Solutions", desc: "Design systems that grow with the business needs." },
  { num: "06", title: "Continuous Learning", desc: "Stay curious. Technology evolves and so should you." },
  { num: "07", title: "UX Matters", desc: "Build for humans, not just for machines." },
  { num: "08", title: "Quality Over Quantity", desc: "One great feature is better than ten mediocre ones." },
];

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  "01": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  "02": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  "03": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  "04": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  "05": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 22v-4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M22 12h-4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  "06": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  "07": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  "08": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
};

const PROCESS = [
  { step: "01", title: "Discovery", desc: "I sit with your team, map your workflows, identify pain points, and define what success looks like — in your terms, not mine." },
  { step: "02", title: "Architecture", desc: "Data model, module boundaries, integration points, permission matrix — designed before a single line of code is written." },
  { step: "03", title: "Development", desc: "Two-week sprints. Working software every iteration. You see progress in real time, not on a Gantt chart." },
  { step: "04", title: "Testing", desc: "Unit tests for business logic, integration tests for workflows, UAT with your team before anything reaches production." },
  { step: "05", title: "Deployment", desc: "Data migration with rollback capability, training sessions for your team, and runbook documentation they&apos;ll actually use." },
  { step: "06", title: "Support", desc: "After go-live, I stay on for stabilization, handover, and a clear maintenance plan. No ghosting after deployment." },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-mesh" />

        <PageTransition>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 h-7 rounded-full border border-[rgba(232,199,126,0.2)] bg-gold/5 text-[10px] font-mono tracking-[3px] text-gold/80 mb-6">
                WHAT I DO
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.02em] mb-4">
                <span className="gold-gradient-text">SERVICES</span>
              </h1>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-4" />
              <p className="text-sm text-[#8A8272] max-w-xl mx-auto">
                Enterprise-grade Frappe and ERPNext development, automation, and consulting services
                for businesses that need reliable, scalable software.
              </p>
            </motion.div>

            <div className="space-y-8 mb-20">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-gold/30 transition-all duration-500">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-[#EDE7D8] mb-1">
                          {service.title}
                        </h2>
                        <p className="text-sm gold-gradient-text font-semibold mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-sm text-[#8A8272] mb-4 leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.items.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-[#A09888]">
                              <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technology Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-20"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] text-center mb-3">
                TECHNOLOGY <span className="gold-gradient-text">RADAR</span>
              </h2>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-8" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {SKILL_CATEGORIES.map((cat) => (
                  <motion.div
                    key={cat.title}
                    whileHover={{ y: -2 }}
                    className="rounded-xl p-5 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 text-center"
                  >
                    <h3 className="font-bold text-sm mb-3" style={{ color: cat.color }}>{cat.title}</h3>
                    <div className="space-y-2">
                      {cat.items.map((item) => (
                        <div key={item} className="text-xs text-[#8A8272]">{item}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Engineering Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-20"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] text-center mb-3">
                ENGINEERING <span className="gold-gradient-text">PRINCIPLES</span>
              </h2>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {PRINCIPLES.map((p) => (
                  <motion.div
                    key={p.num}
                    whileHover={{ y: -2 }}
                    className="rounded-xl p-4 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0 gold-gradient-text">
                        {PRINCIPLE_ICONS[p.num]}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm text-[#EDE7D8] mb-1">{p.title}</h3>
                        <p className="text-xs text-[#8A8272] leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] text-center mb-3">
                HOW I <span className="gold-gradient-text">WORK</span>
              </h2>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PROCESS.map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl p-6 border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                  >
                    <span className="text-2xl font-black gold-gradient-text block mb-2">{p.step}</span>
                    <h3 className="font-bold text-sm text-[#EDE7D8] mb-1">{p.title}</h3>
                    <p className="text-xs text-[#8A8272] leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-black tracking-[2px] mb-4">
                  Ready to Build <span className="gold-gradient-text">Something Great?</span>
                </h2>
                <p className="text-sm text-[#8A8272] mb-6 max-w-md mx-auto">
                  Let&apos;s discuss your project requirements and find the right solution for your business.
                </p>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-8 h-12 rounded-full gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide"
                  >
                    Start a Conversation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </PageTransition>
      </section>

      <Footer />
    </main>
  );
}
