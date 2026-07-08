import { Project } from "@/data/projects";

export default function ProjectProblemSolution({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="grid gap-6 py-28 md:grid-cols-2">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
        <p className="text-sm font-medium text-emerald-300">The Challenge</p>
        <h2 className="mt-4 text-3xl font-bold">Problem</h2>
        <p className="mt-6 leading-8 text-zinc-400">{project.problem}</p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
        <p className="text-sm font-medium text-emerald-300">The Solution</p>
        <h2 className="mt-4 text-3xl font-bold">What I Built</h2>
        <p className="mt-6 leading-8 text-zinc-400">{project.solution}</p>
      </div>
    </section>
  );
}