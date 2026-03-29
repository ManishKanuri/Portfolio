"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Data Science",
    period: "Sep 2024 – Dec 2026",
    gpa: "4.0 / 4.0",
    gpaColor: "text-cyan-500 dark:text-cyan-400",
    courses: [
      "Supervised Machine Learning & Learning Theory",
      "Large Language Models",
      "Natural Language Processing",
      "Data Mining Tools",
    ],
    gradient: "from-cyan-400 to-blue-500",
    borderHover: "hover:border-cyan-400/30",
  },
  {
    institution: "Anurag University",
    location: "Hyderabad, India",
    degree: "B.Tech in CSE — Honors in Data Science",
    period: "Oct 2020 – Jun 2024",
    gpa: "8.14 / 10",
    gpaColor: "text-purple-500 dark:text-purple-400",
    courses: [
      "Design & Analysis of Algorithms",
      "Natural Language Processing",
      "Machine Learning",
      "Cloud Computing",
    ],
    gradient: "from-purple-400 to-pink-500",
    borderHover: "hover:border-purple-400/30",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-white dark:bg-[#0d0d15]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-6 transition-colors duration-300 ${edu.borderHover}`}
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center mb-5 shadow-lg`}
              >
                <GraduationCap size={22} className="text-white" />
              </div>

              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug mb-1">
                {edu.institution}
              </h3>
              <p className="text-slate-400 dark:text-slate-500 text-xs mb-3">{edu.location}</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-4">
                {edu.degree}
              </p>

              <div className="flex items-center gap-4 flex-wrap mb-5">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                  <Calendar size={13} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={13} className="text-yellow-400" />
                  <span className={`text-sm font-semibold ${edu.gpaColor}`}>
                    GPA {edu.gpa}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-slate-400 dark:text-slate-600 text-xs uppercase tracking-wider mb-2.5">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#1a1a2e] border border-slate-200 dark:border-[#2a2a4a] px-2.5 py-1 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
