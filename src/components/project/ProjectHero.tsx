import { Project } from "@/data/projects";
import PremiumBrowserMockup from "./PremiumBrowserMockup";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <>
      <section className="py-20">
        <p className="text-sm font-medium text-emerald-300">
          {project.category}
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          {project.summary}
        </p>
      </section>

      <section>
        {project.images?.[0] ? (
          <PremiumBrowserMockup
            image={project.images[0]}
            title={project.title}
            urlLabel={`${project.slug}.vercel.app`}
          />
        ) : (
          <div className="flex h-[500px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] text-zinc-500">
            Hero image coming soon
          </div>
        )}
      </section>
    </>
  );
}