import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiPrisma,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiRadixui,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiPython,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "prisma"
  | "node" | "motion" | "tailwind" | "radixui" | "github" | "fastapi"
  | "redis" | "python";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, prisma: SiPrisma,
  node: SiNodedotjs, motion: SiFramer, tailwind: SiTailwindcss, radixui: SiRadixui,
  github: SiGithub, fastapi: SiFastapi, redis: SiRedis, python: SiPython,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", prisma: "Prisma",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", radixui: "Radix UI",
  github: "GitHub API", fastapi: "FastAPI", redis: "Redis", python: "Python",
};

export const projectsData: Project[] = [
  {
    slug: "eventx",
    title: "EventX",
    imageTitle: "Booking Interface",
    src: "/project-image/eventx.png",
    video: "",
    description:
      "Real-time event ticket booking platform where double-booking is physically impossible — enforced by a Postgres unique constraint and self-expiring Redis seat locks, on a fully serverless backend.",
    tech: ["react", "ts", "tailwind", "motion", "node", "redis", { label: "Vite" }, { label: "PostgreSQL" }, { label: "JWT Auth" }],
    github: "https://github.com/rohithprem18/EventX",
    live: "https://event-x-ruby-six.vercel.app",
    hasPin: true,
  },
  {
    slug: "tack",
    title: "Tack",
    imageTitle: "Board View",
    src: "/project-image/tack.png",
    video: "",
    description:
      "Minimal Trello-style team/project board built entirely on Next.js Server Actions with no REST layer — optimistic drag-and-drop, smart 3s polling sync, and a responsive design audited down to 320px.",
    tech: ["next", "ts", "tailwind", "motion", "prisma", { label: "PostgreSQL" }, { label: "Auth.js" }, { label: "dnd-kit" }],
    github: "https://github.com/rohithprem18/tack",
    live: "https://tack-sigma.vercel.app",
    hasPin: false,
  },
  {
    slug: "chainguard",
    title: "ChainGuard",
    imageTitle: "Risk Scoring UI",
    src: "/project-image/chainguard.png",
    video: "",
    description:
      "ML-powered Ethereum address risk scoring tool. A calibrated LightGBM classifier (PR-AUC 0.945) with SHAP-based, non-accusatory explanations, served as a single Docker image with no database.",
    tech: ["python", "fastapi", { label: "LightGBM" }, { label: "scikit-learn" }, { label: "SHAP" }, { label: "Docker" }],
    github: "https://github.com/rohithprem18/chainguard",
    live: "https://chainguard-zxbl.onrender.com",
    hasPin: false,
  },
  {
    slug: "sift",
    title: "Sift",
    imageTitle: "Search Interface",
    src: "/project-image/sift.png",
    video: "",
    description:
      "Self-hosted realtime search engine — debounced, cancellation-safe search across web/images/news/video, with server-side caching and a single-JAR deployment (Spring Boot serving an embedded React build).",
    tech: [{ label: "Java" }, { label: "Spring Boot" }, "react", { label: "Vite" }, { label: "Caffeine Cache" }, { label: "Docker" }],
    github: "https://github.com/rohithprem18/sift",
    live: "https://sift-zhof.onrender.com",
    hasPin: false,
  },
  {
    slug: "dockyard",
    title: "Dockyard",
    imageTitle: "Dashboard View",
    src: "/project-image/dockyard.png",
    video: "",
    description:
      "B2B inventory & warehouse operations dashboard with six operational modules, a documented design system, and a marketing landing page backed by the real live product UI.",
    tech: ["react", "ts", { label: "Vite" }, "tailwind", "radixui", { label: "TanStack Query" }, { label: "React Hook Form" }, { label: "Zod" }, { label: "Recharts" }],
    github: "https://github.com/rohithprem18/dockyard",
    live: "https://dockyard-fawn.vercel.app",
    hasPin: false,
  },
];
