"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ManishKanuri",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-kanuri/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            Open to new opportunities in Data Science, Machine Learning, and AI.
            Feel free to reach out — I&apos;ll get back to you promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-2xl p-8 flex flex-col gap-6"
        >
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-cyan-500 dark:text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-medium"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 dark:border-[#1e293b] flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-[#1e293b] text-slate-600 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
