# Homepage Overrides

These rules override `../MASTER.md` for the portfolio homepage.

## Page pattern

- Use scroll-based editorial storytelling: introduction, selected builds, toolbelt, career chapters, contact.
- Keep the complete narrative in DOM order without scroll-jacking or animation-dependent content.
- Give every career chapter its own art direction while preserving one shared grid, type, and spacing system.

## Typography

- Display: Syne (existing optimized project font).
- Technical labels and data: JetBrains Mono.
- Long-form body: system sans for legibility and to avoid an additional font payload.

## Color extensions

- Core accent: `#C9F765` for actions and active states.
- Game chapter: `#FF8A5B` for gameplay/editor cues.
- Systems/data: `#70D7D0`.
- Education chapter: `#8EA8FF`.
- Keep `#07100D` as the default background and `#F3F5ED` as primary text.

## Components and motion

- Use sharp or lightly rounded panels with visible 1px borders; reserve larger radius for the portrait only.
- Use CSS/SVG interface graphics rather than stock imagery or emoji icons.
- Motion is limited to initial hero reveal, status feedback, and small control transitions.
- All motion must resolve immediately under `prefers-reduced-motion`.
