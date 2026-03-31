"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ── Rule-based responses ──────────────────────────────────────────────────────
interface QA {
  keywords: string[];
  response: string;
}

const qa: QA[] = [
  {
    keywords: ["skill", "tech", "technology", "know", "language", "framework", "tool", "stack", "proficient", "expert"],
    response:
      "Manish's core skills include Python, PyTorch, TensorFlow, Scikit-learn, and HuggingFace for ML/AI. For NLP he uses BERT, RoBERTa, spaCy, and NLTK. On the cloud side he works with AWS Bedrock, SageMaker, and Lambda. He also knows Pandas, SQL, PySpark, Tableau, and Three.js.",
  },
  {
    keywords: ["project", "built", "build", "portfolio", "work on", "demo", "app"],
    response:
      "Manish has 4 standout projects:\n1. 🚀 Asteroid Hazard Predictor — live ML + NASA APIs + 3D Three.js tracker on Streamlit\n2. 📄 Semantic Resume Matching — FAISS + RAG + LLaMA/Mistral\n3. 🏀 NBA Player Performance Prediction — ML pipelines, 20% accuracy boost\n4. 🎮 Toxic Behavior Detection — HuggingFace Transformers, 18% fewer false reports",
  },
  {
    keywords: ["asteroid", "space", "nasa", "hazard", "streamlit", "threejs", "three.js"],
    response:
      "The Asteroid Hazard Predictor uses Gradient Boosting + SMOTE to classify near-Earth asteroids as hazardous or safe using live NASA JPL data. It features a 3D space tracker in Three.js with 1,500+ real asteroid positions and is deployed live on Streamlit Cloud!",
  },
  {
    keywords: ["resume", "matching", "faiss", "rag", "llama", "mistral", "semantic"],
    response:
      "The Semantic Resume Matching project is an AI career assistant that uses Sentence Transformers + FAISS for retrieval and LLaMA/Mistral for generating transparent, explainable job recommendations via Retrieval-Augmented Generation (RAG).",
  },
  {
    keywords: ["nba", "basketball", "player", "prediction", "sport"],
    response:
      "The NBA Player Performance Prediction project builds end-to-end ML pipelines using regression and classification models with advanced feature engineering. It achieved ~20% accuracy improvement over baseline through hyperparameter tuning and cross-validation.",
  },
  {
    keywords: ["toxic", "game", "detection", "behavior", "huggingface", "transformer"],
    response:
      "The Toxic Behavior Detection project uses HuggingFace Transformers, PyTorch, and T5Tokenizer to detect toxic behavior in online games. It applies ethical-AI filters including PII masking and bias evaluation, reducing false reports by 18%.",
  },
  {
    keywords: ["experience", "work", "job", "intern", "company", "role", "position", "employ"],
    response:
      "Manish has 3 industry roles:\n• Data Scientist @ One Community Inc (Jan–May 2026, Remote)\n• Data Analyst @ NoQs Digital (Aug 2023–Jan 2024, Hyderabad) — built LLM tools, 55% efficiency gain\n• Junior Data Analyst @ Citridot (Jan–Jun 2023) — automated pipelines, saved 30hrs/month",
  },
  {
    keywords: ["education", "degree", "study", "university", "northeastern", "anurag", "gpa", "grade", "academic", "course"],
    response:
      "Manish holds an MS in Data Science from Northeastern University, Boston (2024–2026) with a perfect GPA of 4.0/4.0. He completed his B.Tech in CSE with Honors in Data Science from Anurag University (2020–2024) with a CGPA of 8.14/10.",
  },
  {
    keywords: ["gpa", "grade", "score", "academic", "marks"],
    response:
      "Manish has a perfect GPA of 4.0/4.0 in his MS Data Science program at Northeastern University — a testament to his dedication and academic excellence!",
  },
  {
    keywords: ["open", "hire", "hiring", "available", "availability", "seek", "looking", "job", "opportunity", "recruit", "work"],
    response:
      "Yes! Manish is actively seeking full-time opportunities in Data Science, Machine Learning, and AI. He's open to roles where he can build scalable, data-driven solutions. Reach him at Kanuri.m@northeastern.edu or connect on LinkedIn!",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "connect", "message", "linkedin", "github"],
    response:
      "You can reach Manish at:\n📧 Kanuri.m@northeastern.edu\n📞 +1 (857) 452-6325\n💼 linkedin.com/in/manish-kanuri/\n💻 github.com/ManishKanuri\nHe's based in Boston, MA.",
  },
  {
    keywords: ["location", "where", "based", "live", "city", "boston"],
    response:
      "Manish is currently based in Boston, MA (3611 Washington St, 02130) while pursuing his MS at Northeastern University.",
  },
  {
    keywords: ["python", "pytorch", "tensorflow", "machine learning", "ml", "deep learning", "neural"],
    response:
      "Python is Manish's primary language. He's proficient in PyTorch and TensorFlow for deep learning, Scikit-learn for classical ML, and has built production-ready models for NLP, classification, regression, and anomaly detection.",
  },
  {
    keywords: ["nlp", "natural language", "text", "bert", "llm", "language model", "gpt", "transformer"],
    response:
      "NLP is one of Manish's core specializations. He works with BERT, RoBERTa, T5, LLaMA, Mistral, spaCy, and NLTK. He's built RAG pipelines, text classifiers, summarization tools, and toxic content detectors.",
  },
  {
    keywords: ["aws", "cloud", "bedrock", "sagemaker", "lambda", "s3"],
    response:
      "Manish has hands-on experience with AWS cloud AI services including Bedrock (for LLM APIs), SageMaker (for model training/deployment), Lambda (serverless), S3 (data storage), and IAM (access control).",
  },
  {
    keywords: ["about", "who", "introduce", "tell me", "background", "yourself", "manish"],
    response:
      "Manish Kanuri is an MS Data Science student at Northeastern University (GPA 4.0) specializing in Machine Learning, NLP, and AI. He's built end-to-end ML pipelines, LLM-powered tools, and cloud AI solutions, with 3 industry roles across the US and India. He's actively looking for DS/ML/AI opportunities!",
  },
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch = { score: 0, response: "" };

  for (const item of qa) {
    const score = item.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > bestMatch.score) {
      bestMatch = { score, response: item.response };
    }
  }

  if (bestMatch.score > 0) return bestMatch.response;

  return "Great question! I'm not sure about that specific detail. For the most accurate info, reach out to Manish directly at Kanuri.m@northeastern.edu or check his GitHub at github.com/ManishKanuri 😊";
}

// ── Suggested questions ───────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What are Manish's top skills?",
  "Tell me about his projects",
  "Is he open to work?",
  "What's his experience?",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Manish's AI assistant. Ask me anything about his background, skills, or projects! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = (text: string) => {
    if (!text.trim() || loading) return;
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    // Simulate a short typing delay for a natural feel
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getBotReply(text) },
      ]);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[340px] sm:w-[370px] h-[510px] bg-[#0d0d15] border border-[#1e293b] rounded-2xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border-b border-[#1e293b] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shrink-0">
                  <Bot size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    Ask about Manish
                  </p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-white transition-colors p-1"
              >
                <X size={17} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-tr-sm"
                        : "bg-[#1a1a2e] text-slate-300 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-[#1a1a2e] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full block"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions */}
              {showSuggestions && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs bg-[#1a1a2e] text-cyan-400 border border-cyan-400/20 px-3 py-1.5 rounded-full hover:bg-cyan-400/10 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[#1e293b] p-3 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
              <p className="text-center text-slate-700 text-[10px] mt-2">
                Ask about skills · projects · experience
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/30 text-white"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing dot */}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white dark:border-[#0a0a0f]">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
