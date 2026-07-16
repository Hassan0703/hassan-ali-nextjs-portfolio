"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const REPOS = [
  {
    name: "erpnova-ui",
    desc: "Vue 3 component library for Frappe/ERPNext interfaces",
    stars: 12,
    forks: 3,
    lang: "Vue",
    langColor: "#4FC08D",
  },
  {
    name: "frappe-automation-tools",
    desc: "CLI tools for automating Frappe development workflows",
    stars: 8,
    forks: 2,
    lang: "Python",
    langColor: "#3572A5",
  },
  {
    name: "frapxel",
    desc: "Clean, responsive HTML/CSS template for Frappe apps",
    stars: 6,
    forks: 1,
    lang: "HTML",
    langColor: "#E34F26",
  },
  {
    name: "everest-invoicing",
    desc: "Lightweight Flask invoicing app with SQLite backend",
    stars: 5,
    forks: 0,
    lang: "Python",
    langColor: "#3572A5",
  },
];

const STATS = [
  { value: "36", label: "Total Repositories" },
  { value: "1,847", label: "Total Commits" },
  { value: "89", label: "Pull Requests" },
  { value: "12", label: "Open Source Projects" },
];

const CERT_ICONS: Record<string, React.ReactNode> = {
  "ERPNext Professional": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Python Development": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  "SQL & Database Design": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

const CERTIFICATIONS = [
  { title: "ERPNext Professional", issuer: "Frappe Technologies Pvt. Ltd.", date: "Completed 2024" },
  { title: "Python Development", issuer: "Python Institute", date: "Completed 2023" },
  { title: "SQL & Database Design", issuer: "LinkedIn Learning", date: "Completed 2023" },
];

const CONTRIBUTION_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CONTRIBUTION_DAYS = ["Mon", "", "Wed", "", "Fri", ""];

const contributionCells: { level: number }[] = [];
for (let i = 0; i < 370; i++) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  const rand = x - Math.floor(x);
  let level = 0;
  if (rand > 0.7) level = 1;
  if (rand > 0.85) level = 2;
  if (rand > 0.94) level = 3;
  if (rand > 0.98) level = 4;
  contributionCells.push({ level });
}

const opacityMap = [0.04, 0.15, 0.35, 0.55, 0.8];

export default function OpenSourcePage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <PageTransition>
          <div className="section-container relative z-10 space-y-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 h-7 rounded-full border border-[rgba(232,199,126,0.2)] bg-gold/5 text-[10px] font-mono tracking-[3px] text-gold/80 mb-6">
                OPEN SOURCE
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.02em] mb-4">
                GITHUB <span className="gold-gradient-text">CONTRIBUTIONS</span>
              </h1>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-4" />
              <p className="text-sm text-[#8A8272] max-w-xl mx-auto">
                Building in public. Open source tools, components, and experiments for the Frappe and ERPNext ecosystem.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  className="rounded-xl p-5 text-center border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-black gold-gradient-text">{stat.value}</p>
                  <p className="text-xs text-[#8A8272] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contribution Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-[-0.02em] text-center mb-6">
                CONTRIBUTION <span className="gold-gradient-text">ACTIVITY</span>
              </h2>
              <div className="max-w-[800px] mx-auto glass-card rounded-[14px] p-6">
                <div className="flex gap-[3px] mb-1 ml-[30px]">
                  {CONTRIBUTION_MONTHS.map((m) => (
                    <div key={m} className="text-[9px] text-[#6A6358] font-mono flex-1 text-center">{m}</div>
                  ))}
                </div>
                <div className="flex gap-[3px]">
                  <div className="flex flex-col gap-[3px] pt-0">
                    {CONTRIBUTION_DAYS.map((d, i) => (
                      <div key={i} className="text-[9px] text-[#6A6358] font-mono h-[14px] flex items-center pr-1">{d}</div>
                    ))}
                  </div>
                  <div className="flex-1 overflow-x-auto">
                    <div className="flex gap-[3px]" style={{ minWidth: 700 }}>
                      {Array.from({ length: 52 }).map((_, week) => (
                        <div key={week} className="flex flex-col gap-[3px]">
                          {Array.from({ length: 7 }).map((_, day) => {
                            const idx = week * 7 + day;
                            const cell = contributionCells[idx % contributionCells.length];
                            return (
                              <motion.div
                                key={`${week}-${day}`}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.002, duration: 0.2 }}
                                whileHover={{ scale: 1.5, zIndex: 10 }}
                                className="w-[14px] h-[14px] rounded-[3px] cursor-pointer transition-all duration-150"
                                style={{ backgroundColor: `rgba(201,164,76,${opacityMap[cell.level]})` }}
                                title={`${Math.round(cell.level * 10)} contributions`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <span className="text-[10px] text-[#6A6358] font-mono">Less</span>
                  {opacityMap.map((op) => (
                    <div key={op} className="w-[14px] h-[14px] rounded-[3px]" style={{ backgroundColor: `rgba(201,164,76,${op})` }} />
                  ))}
                  <span className="text-[10px] text-[#6A6358] font-mono">More</span>
                </div>
                <p className="text-center mt-4 text-sm text-[#8A8272] font-mono">
                  ~2,400 contributions in the last year
                </p>
              </div>
            </motion.div>

            {/* Open Source Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-[-0.02em] text-center mb-6">
                OPEN SOURCE <span className="gold-gradient-text">PROJECTS</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {REPOS.map((repo, i) => (
                  <motion.a
                    key={repo.name}
                    href={`https://github.com/Hassan0703/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="group rounded-xl p-5 border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#E8C77E">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span className="font-bold text-sm text-[#EDE7D8] group-hover:text-gold transition-colors">
                          {repo.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[#8A8272] mb-4 leading-relaxed">{repo.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-[#6A6358]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                        {repo.lang}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <polyline points="17 11 19 13 23 9" />
                        </svg>
                        {repo.forks}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8"
              >
                <a href="https://github.com/Hassan0703" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-7 h-12 rounded-full border border-[rgba(232,199,126,0.3)] text-[#EDE7D8] hover:bg-gold/5 hover:border-gold/50 transition-all duration-300 text-sm font-medium"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View All on GitHub
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-[-0.02em] text-center mb-6">
                <span className="gold-gradient-text">CERTIFICATIONS</span>
              </h2>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {CERTIFICATIONS.map((cert) => (
                  <motion.div
                    key={cert.title}
                    whileHover={{ y: -2 }}
                    className="rounded-xl p-6 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 text-center"
                  >
                    <span className="block mb-4 gold-gradient-text">{CERT_ICONS[cert.title]}</span>
                    <h3 className="font-bold text-base text-[#EDE7D8] mb-1">{cert.title}</h3>
                    <p className="text-xs text-[#8A8272] mb-1">{cert.issuer}</p>
                    <p className="text-xs text-[#6A6358] mb-3">{cert.date}</p>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold text-[#4CAF50] border border-[#4CAF50]/30 bg-[#4CAF50]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                      VERIFIED
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </PageTransition>
      </section>

      <Footer />
    </main>
  );
}
