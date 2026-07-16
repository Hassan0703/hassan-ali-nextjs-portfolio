"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const CONTACT_METHODS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    label: "Email",
    value: "hassan4185767@gmail.com",
    href: "mailto:hassan4185767@gmail.com",
    action: "Send an email",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/hassan-ali-frappe-dev",
    href: "https://linkedin.com/in/hassan-ali-frappe-dev",
    action: "Connect with me",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Hassan0703",
    href: "https://github.com/Hassan0703",
    action: "Follow my work",
  },
];

const FAQ = [
  {
    q: "What is your typical project timeline?",
    a: "It depends on complexity. A custom Frappe app typically takes 4-8 weeks. Full ERP implementations range from 3-6 months. I&apos;ll provide a detailed timeline after understanding your requirements.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. I work with businesses of all sizes. For startups, I focus on building minimal viable systems that can scale as you grow.",
  },
  {
    q: "What industries do you specialize in?",
    a: "I&apos;ve built systems for logistics, real estate, ecommerce, fintech, and commodity trading. Frappe/ERPNext is flexible enough to adapt to any industry.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. I offer maintenance and support packages after deployment to ensure your system runs smoothly and evolves with your needs.",
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`mailto:hassan4185767@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#4CAF50]/15 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#F5F2EA] mb-2">Message Ready!</h3>
        <p className="text-sm text-[#8A8272] mb-4">Your email client should open shortly.</p>
        <button onClick={() => setSent(false)} className="text-sm text-gold hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">NAME</label>
          <input type="text" placeholder="Your name" value={form.name} onChange={update("name")} required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200" />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">EMAIL</label>
          <input type="email" placeholder="your@email.com" value={form.email} onChange={update("email")} required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">SUBJECT</label>
        <input type="text" placeholder="Project collaboration, job opportunity, etc." value={form.subject} onChange={update("subject")} required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200" />
      </div>
      <div>
        <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">MESSAGE</label>
        <textarea rows={4} placeholder="Tell me about your project..." value={form.message} onChange={update("message")} required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200 resize-none" />
      </div>
      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
        className="w-full py-3 rounded-xl gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide hover:opacity-90 transition-all duration-200">
        Send Message
      </motion.button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <PageTransition>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 h-7 rounded-full border border-[rgba(232,199,126,0.2)] bg-gold/5 text-[10px] font-mono tracking-[3px] text-gold/80 mb-6">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.02em] mb-4">
                LET&apos;S <span className="gold-gradient-text">TALK</span>
              </h1>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-4" />
              <p className="text-sm text-[#8A8272] max-w-xl mx-auto">
                Have a project in mind? Need an ERP architect? Let&apos;s discuss how I can help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-[#F5F2EA] mb-6">Send a Message</h3>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  {CONTACT_METHODS.map((method, i) => (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ y: -2 }}
                          className="group flex items-center gap-4 px-5 h-14 rounded-xl border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                        >
                          <span className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-300">
                            {method.icon}
                          </span>
                          <div className="flex-1">
                            <p className="text-xs text-[#8A8272] font-medium">{method.label}</p>
                            <p className="text-sm text-[#D9D3C4] group-hover:text-gold transition-colors duration-300">
                              {method.value}
                            </p>
                          </div>
                          <span className="text-xs text-gold/50 group-hover:text-gold transition-colors">
                            {method.action} →
                          </span>
                        </motion.div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-xl p-5 border border-[#4CAF50]/20 bg-[#4CAF50]/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#4CAF50] animate-pulse" />
                    <div>
                      <p className="text-sm font-bold text-[#4CAF50]">Available for Projects</p>
                      <p className="text-xs text-[#8A8272]">Typically responds within 24 hours</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl font-black tracking-[2px] text-center mb-8">
                FREQUENTLY <span className="gold-gradient-text">ASKED</span>
              </h2>
              <div className="space-y-3">
                {FAQ.map((item, i) => (
                  <motion.details
                    key={item.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.06 }}
                    className="group rounded-xl border border-[rgba(232,199,126,0.08)] bg-white/[0.01] hover:border-gold/20 transition-all duration-300 overflow-hidden"
                  >
                    <summary className="px-5 py-4 text-sm font-medium text-[#EDE7D8] cursor-pointer hover:text-gold transition-colors list-none flex items-center justify-between">
                      {item.q}
                      <svg
                        className="w-4 h-4 text-gold/50 group-open:rotate-180 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4">
                      <p className="text-sm text-[#8A8272] leading-relaxed">{item.a}</p>
                    </div>
                  </motion.details>
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
