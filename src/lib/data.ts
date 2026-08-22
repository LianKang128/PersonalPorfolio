export const personal = {
  name: "Lian Kang",
  fullName: "Lee Lian Kang",
  role: "Full Stack Developer",
  headline: "Full-stack developer with a game maker's instinct.",
  tagline:
    "I build dependable web products from interface to API, with the same curiosity I bring to gameplay systems and interactive worlds.",
  location: "Kuala Lumpur, Malaysia",
  available: true,
  email: "leeliankang1@gmail.com",
  github: "https://github.com/LianKang128",
  linkedin: "https://www.linkedin.com/in/lee-lian-kang-4b45392a0/",
  whatsapp: "https://wa.me/601137004780",
};

export const quickFacts = [
  { value: "01", label: "Game development internship" },
  { value: "03", label: "Frontend, backend, and game systems" },
  { value: "KL", label: "Based in Kuala Lumpur" },
];

export type Project = {
  id: number;
  number: string;
  name: string;
  type: string;
  summary: string;
  description: string;
  features: string[];
  tags: string[];
  link: string;
  visual: "dungeon" | "portfolio";
};

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    name: "2D Map Random Generation",
    type: "Game systems / Full stack",
    summary: "A multiplayer dungeon crawler built around maps that never repeat.",
    description:
      "A Cocos Creator and Node.js experiment that connects procedural generation, party-based play, and real-time WebSocket networking into one playable system.",
    features: [
      "Cellular-automata dungeon generation",
      "Real-time multiplayer state",
      "Party-based gameplay loop",
    ],
    tags: ["Cocos Creator", "TypeScript", "Node.js", "WebSocket", "Algorithms"],
    link: "https://github.com/LianKang128/2DMapRandomGeneration",
    visual: "dungeon",
  },
  {
    id: 2,
    number: "02",
    name: "Personal Portfolio",
    type: "Frontend / Design engineering",
    summary: "This site, designed as a clear view into how I think and build.",
    description:
      "A responsive portfolio built with the Next.js App Router, typed content, accessible interactions, and a visual system made for technical readers.",
    features: [
      "Responsive editorial layout",
      "Accessible navigation and motion",
      "Reusable, typed content model",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/LianKang128/PersonalPorfolio",
    visual: "portfolio",
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Frontend engineering",
    description:
      "Interfaces that stay clear, responsive, and maintainable as the product grows.",
    icon: "code" as const,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Testing"],
  },
  {
    number: "02",
    title: "Backend & data",
    description:
      "APIs, real-time flows, and data models built around predictable behavior.",
    icon: "server" as const,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Flask / FastAPI", "WebSocket"],
  },
  {
    number: "03",
    title: "Game & interactive",
    description:
      "Gameplay systems where technical rules become something a player can feel.",
    icon: "gamepad" as const,
    skills: ["Cocos Creator", "Roblox Studio", "Tiled", "Luau", "Procedural generation"],
  },
];

export const principles = [
  {
    title: "Build the system, not the patch",
    description: "I look for reusable boundaries before adding another one-off fix.",
    icon: "layers" as const,
  },
  {
    title: "Make behavior visible",
    description: "Clear states, useful feedback, and interfaces that explain themselves.",
    icon: "spark" as const,
  },
  {
    title: "Test in the real context",
    description: "Ship small, observe the result, and refine with evidence.",
    icon: "check" as const,
  },
];

export const currentlyLearning = ["Rust", "LLM APIs", "Edge Runtime", "WebGPU"];

export type Experience = {
  id: number;
  number: string;
  kind: "game" | "education";
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  detail: string;
  notes: string[];
  tools: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    number: "01",
    kind: "game",
    role: "Game Developer Intern",
    company: "IXI Creatives Sdn Bhd",
    period: "Dec 2024 — May 2025",
    location: "Kuala Lumpur · Hybrid",
    summary:
      "Six months inside a game-production environment, translating gameplay ideas into systems that could be built, tested, and refined.",
    detail:
      "This chapter sharpened the bridge between creative intent and technical execution. It taught me to think in player states, feedback loops, edge cases, and the small details that make an interaction feel right.",
    notes: [
      "Worked with Cocos Creator and TypeScript in a production game-development setting.",
      "Turned gameplay requirements into focused implementation and testing cycles.",
      "Built practical habits around debugging, version control, and cross-discipline feedback.",
    ],
    tools: ["Cocos Creator", "TypeScript", "Tiled", "Git"],
  },
  {
    id: 2,
    number: "02",
    kind: "education",
    role: "BSc (Hons) Computer Science",
    company: "Asia Pacific University of Technology & Innovation",
    period: "2023 — 2026",
    location: "Kuala Lumpur · On campus",
    summary:
      "A formal foundation in computer science, strengthened through software projects beyond the classroom.",
    detail:
      "My degree connects the fundamentals—algorithms, data structures, databases, and software engineering—to the practical work I enjoy most: building complete products and interactive systems.",
    notes: [
      "Developed a foundation in algorithms, data structures, and system design.",
      "Applied concepts through individual and collaborative software projects.",
      "Expanded beyond coursework through frontend, backend, and game development.",
    ],
    tools: ["Java", "Python", "C++", "SQL"],
  },
];
