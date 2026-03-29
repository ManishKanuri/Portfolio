"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Asteroid Hazard Predictor & Space Intelligence Platform",
    period: "Jan 2026 – Mar 2026",
    description:
      "End-to-end ML pipeline with Gradient Boosting + SMOTE to classify near-Earth asteroids as hazardous or safe using live NASA JPL data. Integrated NASA NeoWs, JPL Sentry, and CAD APIs. Built an interactive 3D space tracker in Three.js with 1,500+ real asteroid positions, deployed on Streamlit Cloud.",
    tags: ["Gradient Boosting", "SMOTE", "Three.js", "NASA APIs", "Streamlit", "Python", "ML"],
    github: "https://github.com/ManishKanuri",
    demo: "https://streamlit.io",
    featured: true,
  },
  {
    title: "Semantic Resume Matching Using LLM, FAISS & RAG",
    period: "Feb 2025 – Mar 2025",
    description:
      "AI-driven career matching assistant using Sentence Transformers, FAISS, and Retrieval-Augmented Generation to improve job-seeker access to opportunities. Generated LLM-based explanations using LLaMA and Mistral for transparent and interpretable hiring recommendations.",
    tags: ["Sentence Transformers", "FAISS", "RAG", "LLaMA", "Mistral", "Python", "NLP"],
    github: "https://github.com/ManishKanuri",
    demo: null,
    featured: false,
  },
  {
    title: "NBA Player Performance Prediction",
    period: "Sep 2025 – Dec 2025",
    description:
      "End-to-end ML pipelines using regression and classification models with advanced feature engineering to predict NBA player performance metrics. Improved prediction accuracy by ~20% over baseline through hyperparameter tuning and cross-validation.",
    tags: ["Scikit-learn", "Pandas", "Matplotlib", "Regression", "Classification", "Python", "ML"],
    github: "https://github.com/ManishKanuri",
    demo: null,
    featured: false,
  },
  {
    title: "Toxic Behavior Detection in Online Games",
    period: "Oct 2024 – Dec 2024",
    description:
      "NLP model using HuggingFace Transformers, PyTorch, and T5Tokenizer with early stopping and hyperparameter tuning. Applied ethical-AI filters including PII masking and bias evaluation to support safer online environments, reducing false reports by 18%.",
    tags: ["HuggingFace", "PyTorch", "T5", "Transformers", "NLP", "Python"],
    github: "https://github.com/ManishKanuri",
    demo: null,
    featured: false,
  },
];

const filterButtons = ["All", "Python", "NLP", "ML", "RAG", "Three.js", "AWS"];

function projectMatchesFilter(project: typeof projects[0], filter: string): boolean {
  if (filter === "All") return true;
  return project.tags.some((tag) =>
    tag.toLowerCase().includes(filter.toLowerCase())
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => projectMatchesFilter(p, activeFilter));

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-md shadow-cyan-500/20"
                  : "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#1a1a2e] border-slate-200 dark:border-[#2a2a4a] hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`group bg-white dark:bg-[#111118] border rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  project.featured
                    ? "border-cyan-400/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-400/5"
                    : "border-slate-200 dark:border-[#1e293b] hover:border-slate-400 dark:hover:border-slate-600"
                }`}
              >
                {project.featured && (
                  <div className="text-xs text-cyan-500 dark:text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full w-fit mb-4 font-medium">
                    ✦ Featured Project
                  </div>
                )}

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-slate-900 dark:text-white font-semibold text-base leading-snug group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200 flex-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-2.5 shrink-0 mt-0.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs mb-3">
                  <Calendar size={12} />
                  {project.period}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#1a1a2e] border border-slate-200 dark:border-[#2a2a4a] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 dark:text-slate-400 py-12"
          >
            No projects match this filter.
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/ManishKanuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm border border-slate-200 dark:border-[#1e293b] hover:border-cyan-400/40 px-5 py-2.5 rounded-lg"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
