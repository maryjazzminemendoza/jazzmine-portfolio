import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          Back to Home
        </Link>

        <section className="py-20">
          <p className="text-sm font-medium text-emerald-300">
            Project Library
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Projects built for web, AI, and business workflows.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of projects focused on responsive interfaces,
            automation, API integrations, e-commerce layouts, and business
            systems.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <p className="text-sm text-emerald-300">{project.category}</p>

              <h2 className="mt-4 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200"
              >
                View Project
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
