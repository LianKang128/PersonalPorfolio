import Icon from "@/components/Icons";
import { personal, projects, type Project } from "@/lib/data";

const floorCells = new Set([
  14, 15, 16, 17, 18, 19, 20, 21,
  26, 29, 32, 33,
  38, 39, 40, 41, 42, 43, 44, 45,
  50, 53, 56, 57,
  62, 63, 64, 65, 66, 67, 68, 69,
  74, 77, 80, 81,
]);

const wallCells = new Set([13, 22, 25, 34, 37, 46, 49, 58, 61, 70, 73, 82]);

function DungeonVisual() {
  return (
    <div className="h-full min-h-[27rem] border-l-0 border-[var(--border)] bg-[#07100d] lg:border-l">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">
        <span>MapGenerator.ts</span>
        <span className="text-[var(--cyan)]">Connected · 24ms</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--game)]">Seed</p>
            <p className="mt-1 font-mono text-sm text-[var(--foreground)]">DNGN_7A32</p>
          </div>
          <div className="flex gap-5 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)]">
            <p><span className="block text-base text-[var(--accent)]">04</span>Players</p>
            <p><span className="block text-base text-[var(--cyan)]">18</span>Rooms</p>
          </div>
        </div>

        <div className="dungeon-grid" aria-hidden="true">
          {Array.from({ length: 96 }, (_, index) => {
            let state = "";
            if (floorCells.has(index)) state = "floor";
            if (wallCells.has(index)) state = "wall";
            if (index === 44) state = "spawn";
            return <span key={index} className={"dungeon-cell " + state} />;
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)] sm:grid-cols-3">
          <div className="border border-[var(--border)] p-3"><span className="mb-1 block text-[var(--foreground)]">Cellular</span>Algorithm</div>
          <div className="border border-[var(--border)] p-3"><span className="mb-1 block text-[var(--foreground)]">Realtime</span>WebSocket</div>
          <div className="col-span-2 border border-[var(--border)] p-3 sm:col-span-1"><span className="mb-1 block text-[var(--foreground)]">Party</span>Co-op</div>
        </div>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="relative min-h-[23rem] overflow-hidden border border-[var(--border)] bg-[#08110e]" aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[var(--game)]" />
        <span className="h-2 w-2 rounded-full bg-[#e7c95a]" />
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        <div className="ml-3 h-5 flex-1 border border-[var(--border)] bg-[var(--surface)]" />
      </div>
      <div className="grid min-h-[20rem] grid-cols-[4rem_1fr]">
        <div className="border-r border-[var(--border)] p-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className={"mb-3 h-8 border " + (item === 0 ? "border-[var(--accent)] bg-[rgba(201,247,101,0.1)]" : "border-[var(--border)]")} />
          ))}
        </div>
        <div className="p-5 sm:p-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--game)]">Portfolio / index.tsx</p>
          <div className="mt-5 h-3 w-3/5 bg-[var(--foreground)]" />
          <div className="mt-3 h-3 w-4/5 bg-[var(--foreground)] opacity-90" />
          <div className="mt-3 h-3 w-2/5 bg-[var(--accent)]" />
          <div className="mt-7 max-w-sm space-y-2">
            <div className="h-1.5 w-full bg-[var(--border-strong)]" />
            <div className="h-1.5 w-11/12 bg-[var(--border)]" />
            <div className="h-1.5 w-3/4 bg-[var(--border)]" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-16 border border-[var(--game)] bg-[rgba(255,138,91,0.08)]" />
            <div className="h-16 border border-[var(--cyan)] bg-[rgba(112,215,208,0.06)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectContent({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={compact ? "flex h-full flex-col" : ""}>
      <div className="mb-7 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--game)]">Project {project.number}</p>
          <p className="mt-2 font-mono text-xs text-[var(--subtle)]">{project.type}</p>
        </div>
        <span className="font-mono text-3xl font-bold text-[var(--border-strong)]">{project.number}</span>
      </div>

      <h3 className="text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
        {project.name}
      </h3>
      <p className="mt-4 text-lg font-semibold leading-7 text-[var(--foreground)]">{project.summary}</p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{project.description}</p>

      <ul className="mt-7 space-y-3" aria-label={project.name + " features"}>
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--border-strong)] text-[var(--accent)]">
              <Icon name="check" className="h-3.5 w-3.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className={"mt-8 flex flex-wrap gap-2 " + (compact ? "" : "lg:max-w-xl")}>
        {project.tags.map((tag) => (
          <span key={tag} className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--muted)]">
            {tag}
          </span>
        ))}
      </div>

      <div className={(compact ? "mt-auto pt-8" : "mt-9") + " flex flex-wrap items-center gap-5"}>
        {project.showcase && (
          <a
            href={project.showcase}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target magnet-target inline-flex min-h-11 items-center gap-3 bg-[var(--accent)] px-5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent-ink)] transition-colors duration-200 hover:bg-[#dcff91]"
          >
            Open live showcase
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-target group inline-flex min-h-11 items-center gap-3 border-b border-[var(--foreground)] font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View source on GitHub
          <Icon name="arrow-up-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [gameProject, portfolioProject] = projects;

  return (
    <section id="work" aria-labelledby="work-title" className="section-pad border-t border-[var(--border)] bg-[rgba(7,16,13,0.78)]">
      <div className="page-container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="mt-5 text-5xl font-bold tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Built to be used.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] lg:justify-self-end">
            A focused set of projects that show how I connect architecture, interaction, and the details that make software feel complete.
          </p>
        </div>

        <article className="grid overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="p-6 sm:p-9 lg:p-11 xl:p-14">
            <ProjectContent project={gameProject} />
          </div>
          <DungeonVisual />
        </article>

        <article className="mt-6 grid gap-0 border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:p-10">
          <PortfolioVisual />
          <div className="pt-8 lg:pt-0">
            <ProjectContent project={portfolioProject} compact />
          </div>
        </article>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--subtle)]">
            More experiments live in the repository
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)] transition-colors duration-200 hover:text-[#dcff91]"
          >
            Browse all GitHub projects
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
