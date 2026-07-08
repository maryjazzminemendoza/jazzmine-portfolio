import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import PremiumBrowserMockup from "@/components/project/PremiumBrowserMockup";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-emerald-300">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Projects designed like real digital products.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              A selection of web, AI, and automation projects built around
              practical business use cases.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-28">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1}>
              <article className="grid items-center gap-12 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {project.images?.[0] ? (
                    <PremiumBrowserMockup
                      image={project.images[0]}
                      title={project.title}
                      urlLabel={`${project.slug}.app`}
                    />
                  ) : (
                    <div className="flex h-[360px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] text-zinc-500">
                      Screenshot coming soon
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    0{index + 1} / {project.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {project.summary}
                  </p>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm font-medium text-white">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm font-medium text-white">
                        Solution
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-emerald-300"
                  >
                    View Project →
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
