"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "One Community Inc",
    role: "Data Scientist",
    period: "Jan 2026 – May 2026",
    location: "Remote, USA",
    current: true,
    bullets: [
      "Led a cross-functional analytics team, coordinating data analysis, reporting, and delivery of insights to support product and operational decision-making.",
      "Built Python-based data visualizations and dashboards for the website, translating complex datasets into stakeholder-ready insights.",
      "Authored analytical reports and data-backed summaries to communicate trends, performance metrics, and impact of platform changes to technical and non-technical audiences.",
    ],
    tags: ["Python", "Data Visualization", "Analytics", "Dashboards", "Reporting"],
  },
  {
    company: "NoQs Digital Pvt. Ltd.",
    role: "Data Analyst",
    period: "Aug 2023 – Jan 2024",
    location: "Hyderabad, India",
    current: false,
    bullets: [
      "Implemented anomaly-detection models to flag customer-service delays, cutting issue-resolution time by 40%.",
      "Designed and implemented dashboards and backend services with SQL and Python to support real-time business intelligence.",
      "Developed LLM-based summarization tools (OpenAI API + Bedrock) for support tickets, improving manager review efficiency by 55%.",
    ],
    tags: ["Python", "SQL", "LLMs", "OpenAI", "AWS Bedrock", "Anomaly Detection"],
  },
  {
    company: "Citridot",
    role: "Junior Data Analyst",
    period: "Jan 2023 – Jun 2023",
    location: "Hyderabad, India",
    current: false,
    bullets: [
      "Automated end-to-end data processing pipelines in Python + SQL, cutting manual reporting time by 30 hours/month and improving delivery speed by 45%.",
      "Optimized algorithmic data pipelines in Python/SQL, focusing on execution speed and memory usage.",
    ],
    tags: ["Python", "SQL", "Data Pipelines", "Automation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-purple-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-6 hidden sm:block">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/40"
                        : "bg-slate-50 dark:bg-[#0a0a0f] border-slate-400 dark:border-slate-600"
                    }`}
                  />
                </div>

                <div className="bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="text-xs bg-cyan-400/10 text-cyan-500 dark:text-cyan-400 border border-cyan-400/20 px-2.5 py-0.5 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-500 dark:text-cyan-400 font-medium text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs justify-end">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs mt-1 justify-end">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-cyan-500 dark:text-cyan-400 mt-1 shrink-0 text-xs">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#1a1a2e] border border-slate-200 dark:border-[#2a2a4a] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
