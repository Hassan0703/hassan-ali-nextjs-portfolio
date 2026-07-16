"use client";

import { motion } from "framer-motion";

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
  {
    title: "ERPNext Professional",
    issuer: "Frappe Technologies Pvt. Ltd.",
    date: "Completed 2024",
  },
  {
    title: "Python Development",
    issuer: "Python Institute",
    date: "Completed 2023",
  },
  {
    title: "SQL & Database Design",
    issuer: "LinkedIn Learning",
    date: "Completed 2023",
  },
];

const CONTRIBUTION_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const CONTRIBUTION_DAYS = ["Mon", "", "Wed", "", "Fri", ""];

// Deterministic contribution grid data
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

export function CommunitySection() {
  return (
    <section
      id="community"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0A0806]" />
      <div className="absolute inset-0 bg-section-alt" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-grid" />

      <div className="section-container relative z-10 space-y-16">
        {/* Contributions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              GITHUB <span className="gold-gradient-text">CONTRIBUTIONS</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              CONTRIBUTION ACTIVITY
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[800px] mx-auto glass-card rounded-[14px] p-6"
          >
            {/* Month labels */}
            <div className="flex gap-[3px] mb-1 ml-[30px]">
              {CONTRIBUTION_MONTHS.map((m) => (
                <div
                  key={m}
                  className="text-[9px] text-[#6A6358] font-mono flex-1 text-center"
                >
                  {m}
                </div>
              ))}
            </div>

            <div className="flex gap-[3px]">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] pt-0">
                {CONTRIBUTION_DAYS.map((d, i) => (
                  <div
                    key={i}
                    className="text-[9px] text-[#6A6358] font-mono h-[14px] flex items-center pr-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Contribution grid */}
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
                            transition={{
                              delay: idx * 0.002,
                              duration: 0.2,
                            }}
                            whileHover={{ scale: 1.5, zIndex: 10 }}
                            className="w-[14px] h-[14px] rounded-[3px] cursor-pointer transition-all duration-150"
                            style={{
                              backgroundColor: `rgba(201,164,76,${opacityMap[cell.level]})`,
                            }}
                            title={`${Math.round(cell.level * 10)} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <span className="text-[10px] text-[#6A6358] font-mono">Less</span>
              {opacityMap.map((op) => (
                <div
                  key={op}
                  className="w-[14px] h-[14px] rounded-[3px]"
                  style={{ backgroundColor: `rgba(201,164,76,${op})` }}
                />
              ))}
              <span className="text-[10px] text-[#6A6358] font-mono">More</span>
            </div>

            <p className="text-center mt-4 text-sm text-[#8A8272] font-mono">
              ~2,400 contributions in the last year
            </p>
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              <span className="gold-gradient-text">CERTIFICATIONS</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              CREDENTIALS &amp; ACHIEVEMENTS
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -2 }}
                className="rounded-[14px] p-6 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 text-center"
              >
                <span className="block mb-4 gold-gradient-text">
                  {CERT_ICONS[cert.title]}
                </span>
                <h3 className="font-bold text-base text-[#EDE7D8] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#8A8272] mb-1">{cert.issuer}</p>
                <p className="text-xs text-[#6A6358] mb-3">{cert.date}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold text-[#4CAF50] border border-[#4CAF50]/30 bg-[#4CAF50]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  VERIFIED
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
