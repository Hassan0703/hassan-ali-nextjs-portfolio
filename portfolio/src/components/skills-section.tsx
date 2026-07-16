"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    title: "Using",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    color: "#4CAF50",
    items: ["Python", "ERPNext", "Frappe", "MariaDB"],
  },
  {
    title: "Learning",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "#42A5F5",
    items: ["Docker", "Next.js", "AI Agents"],
  },
  {
    title: "Exploring",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#FFB74D",
    items: ["Rust", "Go", "Kubernetes"],
  },
  {
    title: "Future",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#C9A44C",
    items: ["Cloud Native", "LLMs", "Automation"],
  },
];

const METRICS = [
  { value: "1,847", label: "Total Commits", icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  )},
  { value: "24", label: "Public Repos", icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
  )},
  { value: "1.2k", label: "Contributions/Year", icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  )},
  { value: "89", label: "PRs Merged", icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>
  )},
  { value: "14", label: "Day Streak", icon: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  )},
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

const PRINCIPLES = [
  {
    num: "01",
    title: "Business First",
    desc: "Understand the problem before writing a single line of code.",
  },
  {
    num: "02",
    title: "Clean Architecture",
    desc: "Maintainable, scalable, and well-structured code always wins.",
  },
  {
    num: "03",
    title: "Performance Matters",
    desc: "Optimize queries, reduce latency and deliver fast experiences.",
  },
  {
    num: "04",
    title: "Automation Over Repetition",
    desc: "If you do it twice, script it. If thrice, automate it.",
  },
  {
    num: "05",
    title: "Scalable Solutions",
    desc: "Design systems that grow with the business needs.",
  },
  {
    num: "06",
    title: "Continuous Learning",
    desc: "Stay curious. Technology evolves and so should you.",
  },
  {
    num: "07",
    title: "UX Matters",
    desc: "Build for humans, not just for machines.",
  },
  {
    num: "08",
    title: "Quality Over Quantity",
    desc: "One great feature is better than ten mediocre ones.",
  },
];

const FACTS = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: "Coffee Driven" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>, label: "Linux User" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: "ERP Enthusiast" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, label: "Problem Solver" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, label: "Always Learning" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Automation Lover" },
  { icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>, label: "Open Source" },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0A0806]" />
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-dots" />

      <div className="section-container relative z-10 space-y-16">
        {/* Tech Radar */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              TECH <span className="gold-gradient-text">RADAR</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              SKILL LANDSCAPE
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -2 }}
                className="group rounded-[14px] p-5 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: `${cat.color}15`,
                      border: `1px solid ${cat.color}40`,
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </span>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-[#D9D3C4] border border-gold/20 bg-white/[0.02] mr-1.5 mb-1.5 hover:bg-white/[0.06] hover:border-gold/40 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Neural Network Metrics */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              ACTIVITY <span className="gold-gradient-text">METRICS</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              SIMULATING SOFTWARE EVOLUTION
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {METRICS.map((metric) => (
              <motion.div
                key={metric.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -2 }}
                className="group rounded-[14px] p-4 text-center border border-gold/15 bg-white/[0.02] hover:border-gold/30 transition-all duration-300"
              >
                <p className="text-2xl sm:text-3xl font-black gold-gradient-text mb-1">
                  {metric.value}
                </p>
                <p className="text-xs text-[#8A8272] flex items-center justify-center gap-1.5">
                  <span className="text-gold/60">{metric.icon}</span>
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Principles */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              MY <span className="gold-gradient-text">PRINCIPLES</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              ENGINEERING PHILOSOPHY
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                key={p.num}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -2 }}
                className="group rounded-[14px] p-4 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 w-10 text-right gold-gradient-text">
                    {PRINCIPLE_ICONS[p.num]}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-[#EDE7D8] group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#8A8272] mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              FUN <span className="gold-gradient-text">FACTS</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              DID YOU KNOW
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {FACTS.map((fact) => (
              <motion.span
                key={fact.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 px-5 h-[52px] rounded-full border border-gold/30 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/50 transition-all duration-300 text-sm font-medium text-[#D9D3C4] hover:text-gold cursor-default"
              >
                <span className="text-gold">{fact.icon}</span>
                {fact.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
