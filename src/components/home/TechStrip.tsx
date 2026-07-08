import FadeIn from "@/components/ui/FadeIn";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI API",
  "Shopify",
  "REST APIs",
];

export default function TechStrip() {
  return (
    <section className="px-6 pb-24">
      <FadeIn>
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <p className="text-center text-sm text-zinc-500">
            Technologies I use to build modern web and automation projects
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}