export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-sm text-zinc-500 md:flex-row md:items-center">
        <p>&copy; 2026 Jazzmine Mendoza. Built with Next.js and Tailwind CSS.</p>

        <div className="flex gap-5">
          <a
            href="mailto:maryjazzminemendoza@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
          <a
            href="https://github.com/maryjazzminemendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mary-jazzmine-mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
