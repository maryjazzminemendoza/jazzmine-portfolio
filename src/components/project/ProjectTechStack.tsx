import { Project } from "@/data/projects";

export default function ProjectTechStack({ project }: { project: Project }) {
  return (
    <section className="py-20">
      <p className="text-sm font-medium text-emerald-300">Technology</p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight">Built With</h2>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}