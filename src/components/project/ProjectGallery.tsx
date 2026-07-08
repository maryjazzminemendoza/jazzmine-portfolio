import { Project } from "@/data/projects";
import PremiumBrowserMockup from "./PremiumBrowserMockup";

export default function ProjectGallery({ project }: { project: Project }) {
  if (!project.images || project.images.length <= 1) return null;

  return (
    <section className="pb-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-emerald-300">Gallery</p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Product Screens
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A closer look at the interface and user experience.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {project.images.slice(1).map((image) => (
          <PremiumBrowserMockup
            key={image}
            image={image}
            title={project.title}
            urlLabel="interface-preview"
          />
        ))}
      </div>
    </section>
  );
}