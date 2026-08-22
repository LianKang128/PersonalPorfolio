import Image from "next/image";
import Icon from "@/components/Icons";
import { personal, quickFacts } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 sm:pt-36 lg:min-h-dvh lg:pt-40">
      <div className="page-container flex min-h-[calc(100dvh-8rem)] flex-col justify-center pb-16 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.72fr)] lg:gap-16 xl:gap-24">
          <div className="relative z-10">
            <div className="hero-reveal mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-9 items-center gap-3 border border-[var(--border-strong)] bg-[var(--surface)] px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                <span className="status-dot" aria-hidden="true" />
                Available for opportunities
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--subtle)]">
                Kuala Lumpur · MY
              </span>
            </div>

            <p className="hero-reveal hero-reveal-delay mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--game)]">
              Full stack / Game systems / Creative code
            </p>
            <h1
              id="hero-title"
              className="hero-reveal hero-reveal-delay text-balance max-w-[13ch] text-[clamp(3.35rem,7.6vw,7.4rem)] font-bold leading-[0.91] tracking-[-0.065em] text-[var(--foreground)]"
            >
              Full-stack developer with a <span className="text-[var(--accent)]">game maker&apos;s</span> instinct.
            </h1>

            <p className="hero-reveal hero-reveal-late mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              {personal.tagline}
            </p>

            <div className="hero-reveal hero-reveal-late mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--accent)] px-6 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--accent-ink)] transition-colors duration-200 hover:bg-[#dcff91]"
              >
                Explore selected work
                <Icon name="arrow-down" className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Lee-Lian-Kang-Resume.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[var(--border-strong)] bg-[var(--surface)] px-6 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--muted)] hover:bg-[var(--surface-raised)]"
              >
                Download résumé
                <Icon name="download" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hero-reveal hero-reveal-late relative mx-auto w-full max-w-[31rem] pb-10 lg:mx-0 lg:justify-self-end">
            <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[var(--accent)] opacity-70" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface)]">
              <Image
                src="/Profile.jpg"
                alt="Lian Kang smiling at sunset by the sea"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-[50%_42%] saturate-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100dcc] via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                <span>Profile.jpg</span>
                <span>4284 × 4284</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">Developer</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">{personal.name}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/30 text-white">
                  <Icon name="code" className="h-5 w-5" />
                </span>
              </div>
            </div>

            <div className="absolute -bottom-1 -left-2 w-[min(92%,23rem)] border border-[var(--border-strong)] bg-[#09130fee] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:-left-8 sm:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">developer.ts</span>
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              </div>
              <div className="space-y-1 font-mono text-[11px] leading-5 sm:text-xs">
                <p><span className="text-[var(--game)]">const</span> <span className="text-[var(--cyan)]">lian</span> = {"{"}</p>
                <p className="pl-4"><span className="text-[var(--subtle)]">role:</span> <span className="text-[#f2d69c]">&quot;full-stack&quot;</span>,</p>
                <p className="pl-4"><span className="text-[var(--subtle)]">mode:</span> <span className="text-[#f2d69c]">&quot;build → test → refine&quot;</span>,</p>
                <p className="pl-4"><span className="text-[var(--subtle)]">available:</span> <span className="text-[var(--accent)]">true</span></p>
                <p>{"}"};</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid border-y border-[var(--border)] sm:grid-cols-3 lg:mt-20">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[4rem_1fr] items-center gap-4 border-b border-[var(--border)] py-5 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <dt className="font-mono text-2xl font-bold text-[var(--accent)] sm:mb-2">{fact.value}</dt>
              <dd className="text-sm leading-6 text-[var(--muted)]">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
