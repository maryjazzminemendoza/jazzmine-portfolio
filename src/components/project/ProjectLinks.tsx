import { Project } from "@/data/projects";

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <section className="py-24">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-10">
        <h2 className="text-4xl font-bold">Explore the Project</h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          View the live application or browse the source code to see how it was
          built.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-400 px-7 py-4 text-center font-semibold text-black transition hover:bg-emerald-300"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-7 py-4 text-center font-semibold transition hover:bg-white/10"
            >
              GitHub Repository
            </a>
          )}
        </div>

        {/* Shopify Demo Password */}
        {project.password && (
          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Shopify Development Store
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Demo Store Password
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
                  This project is hosted as a Shopify Partner development store,
                  so Shopify requires a storefront password before visitors can
                  access the demo.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 px-6 py-5 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Password
                </p>

                <p className="mt-2 font-mono text-3xl font-bold tracking-widest text-amber-300">
                  {project.password}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}