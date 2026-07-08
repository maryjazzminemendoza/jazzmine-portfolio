import FadeIn from "@/components/ui/FadeIn";
import PremiumBrowserMockup from "@/components/project/PremiumBrowserMockup";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <FadeIn>
            <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Frontend Developer • AI Automation Builder
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              I build web apps that look polished and solve real workflow problems.
            </h1>
          </FadeIn>

          <FadeIn delay={0.24}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I create responsive interfaces, Shopify-style storefronts, and
              AI-powered tools for business workflows, automation, and better
              user experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.36}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.03] hover:bg-emerald-300"
              >
                View Work
              </a>

              <a
                href="mailto:maryjazzminemendoza@gmail.com"
                className="rounded-full border border-white/10 px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-emerald-400/10 blur-3xl" />

            <PremiumBrowserMockup
              image="\images\sparkles-home-hero.png"
              title="Pet Adoption System"
              urlLabel="sparkleshome.space"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}