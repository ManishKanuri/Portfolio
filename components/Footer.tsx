export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-[#1e293b] py-8 px-4 bg-slate-50 dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          &copy; {year}{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">
            Manish Kanuri
          </span>
          . Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="text-slate-400 dark:text-slate-700 text-xs">
          Designed &amp; Developed with &hearts;
        </p>
      </div>
    </footer>
  );
}
