"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const coreProficiencies = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "NLP / LLMs", level: 88 },
  { name: "Data Visualization", level: 85 },
  { name: "SQL", level: 85 },
  { name: "PyTorch / TensorFlow", level: 82 },
  { name: "AWS Cloud AI", level: 80 },
];

const skillCategories = [
  {
    name: "ML & AI",
    tagClass: "text-cyan-600 dark:text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    headerClass: "text-cyan-600 dark:text-cyan-400",
    skills: [
      "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Transformers",
      "LLMs", "RAG", "LSTM", "GRU", "HuggingFace", "OpenCV",
    ],
  },
  {
    name: "Natural Language Processing",
    tagClass: "text-purple-600 dark:text-purple-400 border-purple-400/20 bg-purple-400/5",
    headerClass: "text-purple-600 dark:text-purple-400",
    skills: [
      "BERT", "RoBERTa", "Word2Vec", "TF-IDF", "spaCy", "NLTK",
      "Sentiment Analysis", "Text Classification", "Tokenization",
    ],
  },
  {
    name: "Cloud AI (AWS)",
    tagClass: "text-blue-600 dark:text-blue-400 border-blue-400/20 bg-blue-400/5",
    headerClass: "text-blue-600 dark:text-blue-400",
    skills: ["AWS Bedrock", "SageMaker", "S3", "IAM", "Lambda"],
  },
  {
    name: "Data Science",
    tagClass: "text-green-600 dark:text-green-400 border-green-400/20 bg-green-400/5",
    headerClass: "text-green-600 dark:text-green-400",
    skills: [
      "Pandas", "NumPy", "Matplotlib", "PySpark", "Apache Spark",
      "MapReduce", "SciPy", "Statsmodels", "TFLite",
    ],
  },
  {
    name: "Software Development",
    tagClass: "text-yellow-600 dark:text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
    headerClass: "text-yellow-600 dark:text-yellow-400",
    skills: [
      "Python", "Java", "JavaScript", "C", "C++", "R", "MATLAB",
      "SQL", "Spring Boot", "RabbitMQ / MQTT",
    ],
  },
  {
    name: "Visualization & BI",
    tagClass: "text-orange-600 dark:text-orange-400 border-orange-400/20 bg-orange-400/5",
    headerClass: "text-orange-600 dark:text-orange-400",
    skills: ["Tableau", "Power BI", "Excel Dashboards", "Three.js", "Streamlit"],
  },
  {
    name: "DevOps & Project Management",
    tagClass: "text-pink-600 dark:text-pink-400 border-pink-400/20 bg-pink-400/5",
    headerClass: "text-pink-600 dark:text-pink-400",
    skills: [
      "Git", "GitHub", "GitLab", "Bitbucket",
      "Agile", "Sprint Planning", "Resource Allocation",
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-[#1e293b] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
        </motion.div>

        {/* Core Proficiencies — animated bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-6 mb-10 hover:border-cyan-400/30 transition-colors duration-300"
        >
          <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-6">
            Core Proficiencies
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-10">
            {coreProficiencies.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        {/* Skill tag categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300"
            >
              <h3 className={`font-semibold text-xs uppercase tracking-wider mb-4 ${cat.headerClass}`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-full border ${cat.tagClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
