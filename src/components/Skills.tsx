import Icon from "@/components/Icons";
import { currentlyLearning, principles, skillGroups } from "@/lib/data";

const accentStyles = [
  {
    text: "text-[var(--accent)]",
    border: "border-[rgba(201,247,101,0.34)]",
    background: "bg-[rgba(201,247,101,0.06)]",
  },
  {
    text: "text-[var(--cyan)]",
    border: "border-[rgba(112,215,208,0.34)]",
    background: "bg-[rgba(112,215,208,0.06)]",
  },
  {
    text: "text-[var(--game)]",
    border: "border-[rgba(255,138,91,0.34)]",
    background: "bg-[rgba(255,138,91,0.06)]",
  },
];

export default function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="section-pad border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">Working stack</p>
            <h2 id="stack-title" className="mt-5 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl">
              One builder, three technical lanes.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              I enjoy owning the path from the interface a person touches to the system that keeps it running—and occasionally the world a player explores.
            </p>

            <div className="mt-9 border-l border-[var(--border-strong)] pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">Currently exploring</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {currentlyLearning.map((item, index) => (
                  <span key={item} className="font-mono text-xs text-[var(--foreground)]">
                    {item}{index < currentlyLearning.length - 1 && <span className="ml-4 text-[var(--border-strong)]">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {skillGroups.map((group, index) => {
              const accent = accentStyles[index];
              return (
                <article
                  key={group.title}
                  className={"group grid gap-6 border p-6 transition-colors duration-200 hover:border-[var(--border-strong)] sm:grid-cols-[4rem_1fr] sm:p-8 " + accent.border + " " + accent.background}
                >
                  <div className={"flex h-14 w-14 items-center justify-center border border-current " + accent.text}>
                    <Icon name={group.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <p className={"font-mono text-[10px] uppercase tracking-[0.16em] " + accent.text}>Track {group.number}</p>
                        <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-[var(--foreground)]">{group.title}</h3>
                      </div>
                      <span className="font-mono text-xs text-[var(--subtle)]">{String(group.skills.length).padStart(2, "0")} tools</span>
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{group.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="border border-[var(--border)] bg-[rgba(7,16,13,0.65)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-10">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h3 className="text-3xl font-bold tracking-[-0.035em] text-[var(--foreground)]">How I approach the work</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">Principles over buzzwords</p>
          </div>
          <div className="grid border-l border-t border-[var(--border)] md:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className="border-b border-r border-[var(--border)] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon name={principle.icon} className="h-6 w-6 text-[var(--accent)]" />
                  <span className="font-mono text-[10px] text-[var(--subtle)]">P-0{index + 1}</span>
                </div>
                <h4 className="mt-8 text-lg font-bold text-[var(--foreground)]">{principle.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
