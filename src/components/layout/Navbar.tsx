import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-5 z-50 w-full px-6">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          JM
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-400 md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/#skills"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Capabilities
          </Link>

          <Link
            href="/#about"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            About
          </Link>
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-emerald-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
