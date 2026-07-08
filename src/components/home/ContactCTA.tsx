import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-32">
      <FadeIn>
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl md:p-16">
          <p className="text-sm font-medium text-emerald-300">
            Available for opportunities
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let&apos;s build a website or automation tool that feels polished
            and useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Open to frontend, Shopify, web builder, and AI automation projects.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-emerald-400 px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-emerald-300"
          >
            Contact Me
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
