"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Kanuri.m@northeastern.edu",
    href: "mailto:Kanuri.m@northeastern.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (857) 452-6325",
    href: "tel:+18574526325",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Boston, MA 02130",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mbdpglwo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md leading-relaxed text-sm">
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out — I&apos;ll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-400/10 border border-cyan-400/20 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-cyan-500 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-2 pt-4 border-t border-slate-200 dark:border-[#1e293b]">
              <a
                href="https://github.com/ManishKanuri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kanuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-slate-50 dark:bg-[#111118] border border-slate-300 dark:border-[#1e293b] rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-slate-50 dark:bg-[#111118] border border-slate-300 dark:border-[#1e293b] rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-slate-50 dark:bg-[#111118] border border-slate-300 dark:border-[#1e293b] rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending || sent}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg shadow-cyan-500/20"
            >
              <Send size={15} />
              {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-500 text-sm text-center">
                ✓ Message received! I&apos;ll get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please email me directly at Kanuri.m@northeastern.edu
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
