import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectProblemSolution from "@/components/project/ProjectProblemSolution";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectLinks from "@/components/project/ProjectLinks";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Link
          href="/projects"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <ProjectHero project={project} />
        <ProjectProblemSolution project={project} />
        <ProjectGallery project={project} />
        <ProjectFeatures project={project} />
        <ProjectTechStack project={project} />
        <ProjectLinks project={project} />
      </div>
    </main>
  );
}