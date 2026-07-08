export default function AboutPreview() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-300">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            I design interfaces with clarity, structure, and business use in mind.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-lg leading-8 text-zinc-400">
            I’m a frontend developer focused on building responsive web
            applications, polished user interfaces, and AI-powered tools for
            practical workflows. My background in IT support also helps me
            approach projects with problem-solving, attention to detail, and
            user-focused thinking.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Clean UI", "Business Tools", "Automation"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}