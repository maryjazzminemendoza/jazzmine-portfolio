import { Project } from "@/data/projects";

export default function ProjectFeatures({ project }: { project: Project }) {
  return (
    <section className="grid gap-12 py-20 md:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="text-sm font-medium text-emerald-300">Features</p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Core Functionality
        </h2>
      </div>

      <div className="space-y-4">
        {project.features.map((feature) => (
          <div
            key={feature}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}