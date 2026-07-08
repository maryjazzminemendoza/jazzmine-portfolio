import FadeIn from "@/components/ui/FadeIn";

const capabilities = [
  {
    title: "Responsive Web Applications",
    description:
      "Modern, mobile-friendly interfaces built with clean layouts, reusable components, and polished user experience.",
    tools: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI Automation Tools",
    description:
      "Business-focused AI tools that automate repetitive work such as email replies, lead analysis, and workflow support.",
    tools: ["OpenAI API", "API Routes", "Prompt Design"],
  },
  {
    title: "Shopify Storefront UI",
    description:
      "E-commerce interfaces focused on premium product presentation, brand storytelling, and smooth browsing experience.",
    tools: ["Shopify", "Liquid", "HTML/CSS"],
  },
];

export default function Capabilities() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-emerald-300">
              Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              I build digital products that combine beautiful interfaces with
              practical business automation.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.12}>
              <article className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/[0.05]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 transition-all duration-500 group-hover:h-3 group-hover:w-3" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400 transition duration-300 hover:border-emerald-400/40 hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}