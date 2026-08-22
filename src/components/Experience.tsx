import Icon from "@/components/Icons";
import { experience, type Experience as ExperienceType } from "@/lib/data";

function MetaItem({ icon, children }: { icon: "map-pin" | "briefcase" | "graduation"; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
      <Icon name={icon} className="h-4 w-4 shrink-0 text-[var(--subtle)]" />
      {children}
    </span>
  );
}

function Notes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--border-strong)] text-[var(--accent)]">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ToolTags({ items, tone = "game" }: { items: string[]; tone?: "game" | "education" }) {
  const classes = tone === "game"
    ? "border-[rgba(255,138,91,0.32)] text-[#ffab87]"
    : "border-[rgba(142,168,255,0.34)] text-[#b4c3ff]";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={"border bg-[rgba(7,16,13,0.56)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] " + classes}>
          {item}
        </span>
      ))}
    </div>
  );
}

function GameScene() {
  return (
    <div className="game-screen h-full min-h-[34rem] p-4 sm:p-6" aria-hidden="true">
      <div className="flex h-full flex-col border border-[rgba(255,138,91,0.34)] bg-[#07100de8]">
        <div className="flex items-center justify-between border-b border-[rgba(255,138,91,0.26)] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#ffab87]">
          <span>Scene_01 / Internship</span>
          <span className="text-[var(--accent)]">Build succeeded</span>
        </div>

        <div className="grid flex-1 gap-4 p-4 sm:p-5">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--subtle)]">
              <span>Current objective</span>
              <span>01 / 03</span>
            </div>
            <p className="mt-3 font-mono text-sm font-semibold text-[var(--foreground)]">BUILD → PLAYTEST → REFINE</p>
            <div className="mt-3 h-1.5 bg-[var(--border)]">
              <div className="h-full w-4/5 bg-[var(--game)]" />
            </div>
          </div>

          <div className="grid grid-cols-[1fr_0.72fr] gap-4">
            <div className="grid grid-cols-6 gap-1 border border-[var(--border)] bg-[#08110e] p-3">
              {Array.from({ length: 36 }, (_, index) => {
                const row = Math.floor(index / 6);
                const column = index % 6;
                const path = row === 2 || column === 2 || (row === 4 && column > 1);
                const player = index === 26;
                return (
                  <span
                    key={index}
                    className={
                      "aspect-square border " +
                      (player
                        ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_14px_rgba(201,247,101,0.45)]"
                        : path
                          ? "border-[rgba(112,215,208,0.24)] bg-[rgba(112,215,208,0.12)]"
                          : "border-[rgba(255,138,91,0.18)] bg-[rgba(255,138,91,0.06)]")
                    }
                  />
                );
              })}
            </div>
            <div className="grid gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--subtle)]">
              <div className="border border-[var(--border)] p-3"><span className="block text-sm text-[var(--cyan)]">42</span>Entities</div>
              <div className="border border-[var(--border)] p-3"><span className="block text-sm text-[var(--accent)]">60</span>FPS target</div>
              <div className="border border-[var(--border)] p-3"><span className="block text-sm text-[var(--game)]">TS</span>Runtime</div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[#050b08] p-4 font-mono text-[10px] leading-5 sm:text-[11px]">
            <p className="code-line text-[var(--subtle)]" data-line="01"><span className="text-[var(--game)]">function</span> <span className="text-[var(--cyan)]">iterate</span>(feature) {"{"}</p>
            <p className="code-line pl-4 text-[var(--muted)]" data-line="02">build(feature);</p>
            <p className="code-line pl-4 text-[var(--muted)]" data-line="03">playtest(feature);</p>
            <p className="code-line pl-4 text-[var(--muted)]" data-line="04"><span className="text-[var(--accent)]">return</span> refine(feature);</p>
            <p className="code-line text-[var(--subtle)]" data-line="05">{"}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GameChapter({ item }: { item: ExperienceType }) {
  return (
    <li>
      <article aria-labelledby="game-experience-title" className="overflow-hidden border border-[rgba(255,138,91,0.42)] bg-[var(--surface)]">
        <div className="flex items-center justify-between border-b border-[rgba(255,138,91,0.26)] px-5 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[var(--game)]" />
            <span className="h-2 w-2 rounded-full bg-[#e7c95a]" />
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#ffab87]">Career chapter {item.number} · Game production</p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-9 lg:p-11 xl:p-14">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="border border-[rgba(255,138,91,0.36)] bg-[rgba(255,138,91,0.08)] px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ffab87]">
                Internship completed
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">XP + Production workflow</span>
            </div>

            <h3 id="game-experience-title" className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl">
              {item.role}
            </h3>
            <p className="mt-4 font-mono text-sm font-semibold text-[var(--game)]">{item.company}</p>

            <div className="mt-6 flex flex-col gap-3 border-y border-[var(--border)] py-4 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <MetaItem icon="briefcase">{item.period}</MetaItem>
              <MetaItem icon="map-pin">{item.location}</MetaItem>
            </div>

            <p className="mt-7 text-xl font-semibold leading-8 text-[var(--foreground)]">{item.summary}</p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.detail}</p>

            <div className="mt-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">What this chapter developed</p>
              <Notes items={item.notes} />
            </div>

            <div className="mt-8">
              <ToolTags items={item.tools} />
            </div>
          </div>
          <GameScene />
        </div>
      </article>
    </li>
  );
}

function EducationVisual() {
  const modules = ["Algorithms", "Data structures", "Databases", "Software engineering"];

  return (
    <div className="blueprint-grid flex h-full min-h-[30rem] flex-col justify-between p-5 sm:p-7" aria-hidden="true">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-[#b4c3ff]">
        <span>Foundation.map</span>
        <span>2023—2026</span>
      </div>
      <div className="my-10">
        <div className="mb-5 flex h-16 w-16 items-center justify-center border border-[rgba(142,168,255,0.5)] bg-[rgba(142,168,255,0.1)] text-[#b4c3ff]">
          <Icon name="graduation" className="h-8 w-8" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">Core modules</p>
        <div className="mt-4 grid gap-2">
          {modules.map((module, index) => (
            <div key={module} className="flex items-center justify-between border border-[rgba(142,168,255,0.22)] bg-[rgba(7,16,13,0.72)] px-4 py-3">
              <span className="text-sm text-[var(--foreground)]">{module}</span>
              <span className="font-mono text-[9px] text-[#b4c3ff]">M-0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-[var(--subtle)]">
        Theory becomes useful when it survives contact with a real project.
      </p>
    </div>
  );
}

function EducationChapter({ item }: { item: ExperienceType }) {
  return (
    <li>
      <article aria-labelledby="education-experience-title" className="overflow-hidden border border-[rgba(142,168,255,0.36)] bg-[var(--surface)]">
        <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
          <EducationVisual />
          <div className="p-6 sm:p-9 lg:p-11 xl:p-14">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b4c3ff]">Career chapter {item.number} · Education</p>
              <span className="border border-[rgba(142,168,255,0.34)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b4c3ff]">Academic track</span>
            </div>

            <h3 id="education-experience-title" className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl">
              {item.role}
            </h3>
            <p className="mt-4 max-w-xl font-mono text-sm font-semibold leading-6 text-[#b4c3ff]">{item.company}</p>

            <div className="mt-6 flex flex-col gap-3 border-y border-[var(--border)] py-4 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <MetaItem icon="graduation">{item.period}</MetaItem>
              <MetaItem icon="map-pin">{item.location}</MetaItem>
            </div>

            <p className="mt-7 text-xl font-semibold leading-8 text-[var(--foreground)]">{item.summary}</p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.detail}</p>

            <div className="mt-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--subtle)]">What this chapter is building</p>
              <Notes items={item.notes} />
            </div>

            <div className="mt-8">
              <ToolTags items={item.tools} tone="education" />
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Experience() {
  const [game, education] = experience;

  return (
    <section id="career" aria-labelledby="career-title" className="section-pad border-t border-[var(--border)]">
      <div className="page-container">
        <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Career journey</p>
            <h2 id="career-title" className="mt-5 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Every chapter gets its own world.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] lg:justify-self-end">
            My path moves between software fundamentals and interactive production. Each environment changed how I solve problems—and the interface below changes with it.
          </p>
        </div>

        <ol className="space-y-8 lg:space-y-12">
          <GameChapter item={game} />
          <EducationChapter item={education} />
        </ol>
      </div>
    </section>
  );
}
