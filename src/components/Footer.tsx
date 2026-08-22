import Icon from "@/components/Icons";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="page-container flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold text-[var(--foreground)]">{personal.fullName}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--subtle)]">
            Designed & built in Kuala Lumpur · 2026
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-3 self-start font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)] sm:self-auto"
        >
          Back to top
          <Icon name="arrow-down" className="h-4 w-4 rotate-180" />
        </a>
      </div>
    </footer>
  );
}
