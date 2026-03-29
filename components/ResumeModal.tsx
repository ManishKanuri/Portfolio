"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col w-full h-full max-w-5xl mx-auto my-6 px-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#111118] border border-[#1e293b] rounded-t-xl px-5 py-4 shrink-0">
              <span className="text-white font-semibold text-sm tracking-wide">
                Manish Kanuri &mdash; Resume
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download size={14} />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1e293b]"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 bg-[#0d0d15] border-x border-b border-[#1e293b] rounded-b-xl overflow-hidden">
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400 p-8 text-center">
                  <p className="text-sm">
                    Your browser does not support inline PDF viewing.
                  </p>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Download size={15} />
                    Download Resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
