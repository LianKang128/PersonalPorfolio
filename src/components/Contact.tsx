import Icon from "@/components/Icons";
import { personal } from "@/lib/data";

const socials = [
  { label: "GitHub", href: personal.github, note: "Code & experiments" },
  { label: "LinkedIn", href: personal.linkedin, note: "Work & background" },
  { label: "WhatsApp", href: personal.whatsapp, note: "Quick hello" },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="page-container">
        <div className="overflow-hidden border border-[var(--accent)]">
          <div className="grid bg-[var(--accent)] text-[var(--accent-ink)] lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-6 sm:p-10 lg:p-14 xl:p-16">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">Contact.request</p>
              <h2 id="contact-title" className="text-balance mt-6 max-w-[12ch] text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Have a problem worth building?
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#2c381f]">
                I&apos;m open to full-stack roles, game-adjacent work, and collaborations where thoughtful engineering makes the product noticeably better.
              </p>
              <a
                href={"mailto:" + personal.email}
                className="cursor-target magnet-target mt-9 inline-flex min-h-12 max-w-full items-center gap-3 bg-[var(--accent-ink)] px-6 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--foreground)] transition-colors duration-200 hover:bg-[#1d2918]"
              >
                <Icon name="mail" className="h-5 w-5 shrink-0" />
                <span className="[overflow-wrap:anywhere]">Send me an email</span>
                <Icon name="arrow-up-right" className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="border-t border-[rgba(16,23,13,0.3)] bg-[var(--accent-ink)] p-6 text-[var(--foreground)] sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-6">
                <span className="status-dot" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]">Status: available</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Usually replies within 24 hours</p>
                </div>
              </div>

              <div className="py-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--subtle)]">Direct line</p>
                <a
                  href={"mailto:" + personal.email}
                  className="cursor-target mt-3 block [overflow-wrap:anywhere] text-lg font-semibold text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {personal.email}
                </a>
              </div>

              <div className="grid border-t border-[var(--border)]">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target group flex min-h-16 items-center justify-between border-b border-[var(--border)] py-3 transition-colors duration-200 hover:text-[var(--accent)]"
                  >
                    <span>
                      <span className="block font-mono text-xs font-bold uppercase tracking-[0.1em]">{social.label}</span>
                      <span className="mt-1 block text-xs text-[var(--subtle)]">{social.note}</span>
                    </span>
                    <Icon name="arrow-up-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
