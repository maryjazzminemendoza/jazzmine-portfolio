import Image from "next/image";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "maryjazzminemendoza@gmail.com",
    href: "mailto:maryjazzminemendoza@gmail.com",
  },
  {
    label: "GitHub",
    value: "maryjazzminemendoza",
    href: "https://github.com/maryjazzminemendoza",
  },
  {
    label: "LinkedIn",
    value: "Mary Jazzmine Mendoza",
    href: "https://www.linkedin.com/in/mary-jazzmine-mendoza",
  },
];

const projectTypes = [
  "Frontend websites",
  "Shopify layouts",
  "AI automation tools",
  "Business dashboards",
];

export default function ContactPage() {
  const inquiryHref =
    "mailto:maryjazzminemendoza@gmail.com?subject=Project%20Inquiry%20for%20Jazzmine&body=Hi%20Jazzmine,%0D%0A%0D%0AI'd%20like%20to%20talk%20about%20a%20project.%0D%0A%0D%0AProject%20type:%0D%0ATimeline:%0D%0ABudget%20range:%0D%0AWhat%20I%20need%20help%20with:%0D%0A";

  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          Back to Home
        </Link>

        <section className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-emerald-300">Contact</p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Let&apos;s talk about your next website or automation idea.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I&apos;m open to frontend, Shopify, web builder, and AI automation
              projects. Send a few details and I&apos;ll get back to you as soon
              as I can.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {projectTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/jazzmine-portrait.jpeg"
                alt="Portrait of Jazzmine Mendoza"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-[center_24%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-[#050505]" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <p className="text-sm font-medium text-emerald-300">
                  Start a conversation
                </p>

                <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-white">
                  Share the essentials, and I&apos;ll take it from there.
                </h2>
              </div>
            </div>

            <div className="p-7 pt-2 md:p-8 md:pt-3">
              <a
                href={inquiryHref}
                className="inline-flex w-full justify-center rounded-full bg-emerald-400 px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-emerald-300"
              >
                Send Project Inquiry
              </a>

              <div className="mt-8 space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
                >
                  <span className="block text-sm text-zinc-500">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-medium text-zinc-200">
                    {link.value}
                  </span>
                </a>
              ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
