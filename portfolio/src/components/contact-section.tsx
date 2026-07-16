"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const CONTACT_LINKS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/Hassan0703",
    value: "github.com/Hassan0703",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassan-ali-frappe-dev",
    value: "linkedin.com/in/hassan-ali-frappe-dev",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    label: "Email",
    href: "mailto:hassan4185767@gmail.com",
    value: "hassan4185767@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    href: null,
    value: "Lahore, Pakistan",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      <section id="contact" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-dots" />
        <div className="section-container relative z-10 flex items-center justify-center min-h-[60vh]">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#4CAF50]/15 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#F5F2EA] mb-2">Message Ready!</h3>
            <p className="text-[#8A8272] text-sm mb-6">Your email client should open shortly.</p>
            <button onClick={() => setSent(false)} className="text-sm text-gold hover:underline">Send another message</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0A0806]" />
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-dots" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
            GET IN <span className="gold-gradient-text">TOUCH</span>
          </h2>
          <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
          <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
            LET'S BUILD SOMETHING GREAT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-[16px] p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-[#F5F2EA] mb-6">
              Send a Message
            </h3>
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Project collaboration, job opportunity, etc."
                  value={form.subject}
                  onChange={update("subject")}
                  required
                  className="w-full px-4 py-3 rounded-[10px] bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8A8272] mb-1.5 font-mono tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={update("message")}
                  required
                  className="w-full px-4 py-3 rounded-[10px] bg-white/[0.03] border border-gold/15 text-[#EDE7D8] text-sm placeholder-[#6A6358] focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-[10px] gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide hover:opacity-90 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {link.href ? (
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-4 px-5 h-[56px] rounded-full border border-gold/20 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/40 transition-all duration-300"
                  >
                    <span className="text-gold group-hover:text-gold-light transition-colors duration-300">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-xs text-[#8A8272] font-medium">
                        {link.label}
                      </p>
                      <p className="text-sm text-[#D9D3C4] group-hover:text-gold transition-colors duration-300">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 px-5 h-[56px] rounded-full border border-gold/20 bg-white/[0.02] cursor-default">
                    <span className="text-gold">{link.icon}</span>
                    <div>
                      <p className="text-xs text-[#8A8272] font-medium">
                        {link.label}
                      </p>
                      <p className="text-sm text-[#D9D3C4]">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Open to Work badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-4 rounded-full border border-[#4CAF50]/30 bg-[#4CAF50]/5 mt-2"
            >
              <span className="w-8 h-8 rounded-full bg-[#4CAF50]/15 flex items-center justify-center text-[#4CAF50]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-[#4CAF50]">Open to Work</p>
                <p className="text-xs text-[#8A8272]">Available for freelance &amp; full-time opportunities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent relative mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
          </div>
          <p className="text-base text-[#8A8272] max-w-lg mx-auto leading-relaxed">
            Every project starts with a conversation.
            <br />
            <span className="text-[#A09888]">Let&apos;s talk about yours.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
