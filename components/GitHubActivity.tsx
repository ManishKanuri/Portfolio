"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubActivity() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center">
              <Github size={20} className="text-white dark:text-slate-900" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              GitHub Activity
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
          <a
            href="https://github.com/ManishKanuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            @ManishKanuri
          </a>
        </motion.div>

        <div className="flex flex-col gap-6 items-center">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-6 flex justify-center hover:border-cyan-400/30 transition-colors duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=ManishKanuri&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=06b6d4&icon_color=a855f7&text_color=94a3b8&card_width=400"
              alt="GitHub Stats"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Contribution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cyan-400/30 transition-colors duration-300"
          >
            <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
              Contribution Chart
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/06b6d4/ManishKanuri"
              alt="GitHub Contribution Chart"
              className="max-w-full h-auto rounded"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
