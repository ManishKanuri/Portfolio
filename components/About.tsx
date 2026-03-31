"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

function AnimatedStat({ value, label, sub }: { value: string; label: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const suffix = value.replace(/[\d.]/g, "");
  const num = parseFloat(value.replace(/[^\d.]/g, ""));
  const decimals = value.includes(".") ? value.split(".")[1]?.replace(/\D/g, "").length : 0;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(num);
  }, [inView, num, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals) + suffix);
    });
  }, [spring, decimals, suffix]);

  return (
    <div
      ref={ref}
      className="bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-[#1e293b] rounded-xl p-5 text-center hover:border-cyan-400/30 transition-colors"
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
        {display}
      </div>
      <div className="text-slate-900 dark:text-white font-medium text-sm">{label}</div>
      <div className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{sub}</div>
    </div>
  );
}

const stats = [
  { value: "4.0", label: "GPA", sub: "Northeastern" },
  { value: "3", label: "Roles", sub: "Industry Experience" },
  { value: "4+", label: "Projects", sub: "ML & AI" },
  { value: "30+", label: "Technologies", sub: "Skills" },
];

const terminalSkills = ["Python", "PyTorch", "LLMs", "RAG", "AWS", "NLP"];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-700 dark:text-slate-300 text-xl leading-relaxed mb-5">
              MS Data Science student at{" "}
              <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
                Northeastern University
              </span>
              , specializing in Data Science, Machine Learning, and AI.
              Experienced in developing data-driven applications and applying
              ML techniques to solve real-world problems.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
              I specialize in building end-to-end ML pipelines, from data preprocessing
              and feature engineering to model development and evaluation, using tools
              such as Python, Pandas, Scikit-learn, and Apache Spark.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
              I have applied machine learning techniques to real-world problems including
              toxic behavior detection and large-scale data analysis, with an emphasis on
              model performance, scalability, and practical deployment. My interests lie
              in applied AI, natural language processing, and building intelligent systems
              that deliver measurable impact.
            </p>
            <p className="text-cyan-600 dark:text-cyan-400 text-base font-medium leading-relaxed mb-8">
              Actively seeking opportunities in Data Science, Machine Learning, and AI
              to develop scalable, data-driven solutions.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin size={15} className="text-cyan-500 dark:text-cyan-400 shrink-0" />
                3611 Washington St, Boston, MA 02130
              </div>
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <Mail size={15} className="text-cyan-500 dark:text-cyan-400 shrink-0" />
                <a
                  href="mailto:Kanuri.m@northeastern.edu"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  Kanuri.m@northeastern.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <Phone size={15} className="text-cyan-500 dark:text-cyan-400 shrink-0" />
                <a
                  href="tel:+18574526325"
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  +1 (857) 452-6325
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Stats grid — animated counters */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} sub={stat.sub} />
              ))}
            </div>

            {/* Terminal card — always dark */}
            <div className="bg-[#0d1117] border border-[#21262d] rounded-xl overflow-hidden shadow-xl">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[#8b949e] text-xs font-mono">bash — terminal</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3">
                {/* whoami */}
                <div>
                  <span className="text-[#58a6ff]">manish</span>
                  <span className="text-[#8b949e]">@portfolio</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-[#e6edf3]">whoami</span>
                </div>
                <div className="pl-2 text-[#8b949e]">
                  <span className="text-[#3fb950]">Name:</span>{" "}
                  <span className="text-[#e6edf3]">Manish Kanuri</span>
                  <br />
                  <span className="text-[#3fb950]">Role:</span>{" "}
                  <span className="text-[#e6edf3]">Data Scientist &amp; ML Engineer</span>
                </div>

                {/* cat current_role */}
                <div>
                  <span className="text-[#58a6ff]">manish</span>
                  <span className="text-[#8b949e]">@portfolio</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-[#e6edf3]">cat current_role.txt</span>
                </div>
                <div className="pl-2 text-[#79c0ff]">
                  Data Scientist @ One Community Inc
                </div>

                {/* skills --highlight */}
                <div>
                  <span className="text-[#58a6ff]">manish</span>
                  <span className="text-[#8b949e]">@portfolio</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-[#e6edf3]">skills --highlight</span>
                </div>
                <div className="pl-2 flex flex-wrap gap-2">
                  {terminalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-[#3fb950] border border-[#3fb950]/30 bg-[#3fb950]/10 px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Blinking cursor */}
                <div className="flex items-center gap-0">
                  <span className="text-[#58a6ff]">manish</span>
                  <span className="text-[#8b949e]">@portfolio</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-white">$ </span>
                  <span className="inline-block w-2 h-4 bg-[#e6edf3] ml-0.5 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
