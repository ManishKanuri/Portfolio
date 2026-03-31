"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download, FileText } from "lucide-react";
import Image from "next/image";
import ResumeModal from "./ResumeModal";
import NeuralBackground from "./NeuralBackground";

const titles = [
  "Data Scientist",
  "ML Engineer",
  "NLP Specialist",
  "AI Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 45 : 95
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, isPaused]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0a0a0f]">
        {/* Neural network animated background */}
        <NeuralBackground />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              {!imgError ? (
                <Image
                  src="https://github.com/ManishKanuri.png"
                  alt="Manish Kanuri"
                  fill
                  className="rounded-full object-cover border-2 border-cyan-400/40 shadow-lg shadow-cyan-400/20"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center border-2 border-cyan-400/40 shadow-lg shadow-cyan-400/20">
                  <span className="text-white font-bold text-3xl">MK</span>
                </div>
              )}
              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-50 dark:border-[#0a0a0f]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-6xl sm:text-8xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
              Manish{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Kanuri
              </span>
            </h1>

            <div className="h-14 flex items-center justify-center mb-5">
              <h2 className="text-2xl sm:text-4xl text-slate-600 dark:text-slate-300 font-light">
                <span className="text-cyan-500 dark:text-cyan-400 font-semibold">{displayText}</span>
                <span className="animate-pulse text-cyan-500 dark:text-cyan-400 font-thin">|</span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              MS Data Science student at{" "}
              <span className="text-slate-900 dark:text-white font-semibold">Northeastern University</span>
              , specializing in Data Science, Machine Learning, and AI. Experienced in developing
              data-driven applications and applying ML techniques to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-300 dark:border-[#2a3a4a] text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Contact Me
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="px-6 py-3 border border-slate-300 dark:border-[#2a3a4a] text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <FileText size={16} />
              View Resume
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-slate-300 dark:border-[#2a3a4a] text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-8"
          >
            <a
              href="https://github.com/ManishKanuri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manish-kanuri/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a
              href="mailto:Kanuri.m@northeastern.edu"
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
            >
              <Mail size={17} /> Email
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
