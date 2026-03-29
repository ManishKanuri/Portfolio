import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manish Kanuri | Data Scientist & ML Engineer",
  description:
    "Personal portfolio of Manish Kanuri — Data Scientist and ML Engineer specializing in NLP, AI, and cloud solutions.",
  keywords: ["Data Science", "Machine Learning", "NLP", "AI", "Python", "AWS", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-200 antialiased transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
