import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Resume | Rohith Prem S",
  description: "Resume of Rohith Prem S, full-stack developer and final-year CS student.",
};

const dashedLine = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
};

const achievements = [
  "Secured 1st place at the national-level IBM Z Datathon 2024 for developing an innovative solution",
  "Achieved a Top 4 national ranking at the ISRO–IIT Kharagpur Hackathon",
  "Qualified for the semifinals of the national-level L&T Techgium competition",
  "Reached the semifinals of the Flipkart GRiD 7.0 national-level competition",
  "Earned the Oracle Database SQL Certified Associate (1Z0-914) certification",
  "Secured Runner-up position in the QuizOnQuants at Saveetha Engineering College",
  "Solved 300+ Data Structures and Algorithms problems on LeetCode",
];

const experience = [
  {
    role: "Software Engineering Mentee",
    org: "IBM India Systems Development Lab (ISDL), Bangalore, Karnataka",
    dates: "Jan 2025 – Mar 2025",
    points: [
      "Analyzed enterprise-grade software workflows across 3+ modules, gaining exposure to large-scale system design and deployment practices",
      "Enhanced an existing Ethereum fraud detection system by refining feature selection and model evaluation, achieving a 15–20% reduction in false positives",
      "Developed 5+ RESTful APIs to support backend services and frontend integration, improving data flow reliability and reducing manual processing",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Connect Infosystems, Chennai, Tamil Nadu",
    dates: "Jun 2024 – Jul 2024",
    points: [
      "Designed and developed responsive web interfaces using HTML and CSS, ensuring cross-browser compatibility and structured layouts",
      "Developed multi-page web applications with clean UI layouts and basic backend integration concepts",
    ],
  },
];

const projects = [
  {
    name: "EventX",
    tag: "Serverless event ticket booking, DB-enforced concurrency",
    link: "https://event-x-ruby-six.vercel.app",
  },
  {
    name: "Tack",
    tag: "Trello-style board on Next.js Server Actions, optimistic DnD",
    link: "https://tack-sigma.vercel.app",
  },
  {
    name: "ChainGuard",
    tag: "Calibrated LightGBM Ethereum risk scoring with SHAP explainability",
    link: "https://chainguard-zxbl.onrender.com",
  },
  {
    name: "Sift",
    tag: "Self-hosted realtime search engine, Java/Spring Boot + React",
    link: "https://sift-zhof.onrender.com",
  },
  {
    name: "Dockyard",
    tag: "Inventory & warehouse operations dashboard",
    link: "https://dockyard-fawn.vercel.app",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "Spring Boot"] },
  { label: "Data & ML", items: ["PostgreSQL", "Redis", "Prisma", "Supabase", "scikit-learn", "LightGBM"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Linux"] },
];

export default function ResumePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      <div className="pointer-events-none absolute bottom-0 left-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block" style={{ maskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)" }} />
      <div className="pointer-events-none absolute bottom-0 right-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block" style={{ maskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)" }} />
      <div className="pointer-events-none absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />
      <div className="pointer-events-none absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />

      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((position, index) => (
        <div
          key={index}
          className="pointer-events-none absolute z-10 hidden h-[2px] w-[2px] bg-black/50 dark:bg-white/[0.25] md:block"
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            transform: `translate(${position.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      <div className="pointer-events-auto absolute left-0 right-0 top-0 h-[22vh] md:left-[30%] md:right-[30%]">
        <FooterBackground />
        <div className="pointer-events-auto absolute bottom-3 right-2 z-10">
          <CurrentTime />
        </div>
      </div>

      <header className="absolute left-0 right-0 top-[22vh] z-50 flex h-[112px] items-center px-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <Link
              href="/"
              aria-label="Back to home"
              className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200/50 bg-zinc-100 text-zinc-400 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800/50 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>
            <div className="flex min-w-0 flex-col justify-center">
              <h1 className="truncate text-[20px] font-bold leading-none text-zinc-800 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:text-zinc-100 dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)] sm:text-[24px]">
                Resume
              </h1>
              <p className="mt-1 truncate text-[12px] text-zinc-500 dark:text-zinc-400">
                Rohith Prem S
              </p>
            </div>
          </div>

          <div className="flex h-20 shrink-0 items-start justify-end gap-2 py-1 sm:h-24 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </header>

      <section className="relative z-10 ml-0 mr-0 flex min-h-screen flex-col px-4 pb-16 pt-[calc(22vh+112px)] md:ml-[30%] md:mr-[30%]">
        {/* Identity block */}
        <div className="py-4">
          <h2 className="text-[24px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Rohith Prem S</h2>
          <p className="mt-1 text-[14px] text-zinc-600 dark:text-zinc-400">
            Full-stack developer · Final year student, Saveetha Engineering College
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-[13px] text-zinc-500 dark:text-zinc-400">
            <a href="mailto:rohithprem91@gmail.com" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Mail className="h-3.5 w-3.5" /> rohithprem91@gmail.com
            </a>
            <a href="https://github.com/rohithprem18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <GithubIcon className="h-3.5 w-3.5" /> github.com/rohithprem18
            </a>
            <a href="https://www.linkedin.com/in/rohithprem91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <LinkedinIcon className="h-3.5 w-3.5" /> linkedin.com/in/rohithprem91
            </a>
          </div>
        </div>

        <div className="relative my-6">
          <div className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />
        </div>

        {/* Experience */}
        <div className="py-2">
          <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Experience</h3>
          <div className="mt-4 space-y-6">
            {experience.map((exp) => (
              <div key={exp.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role} <span className="font-normal text-zinc-500 dark:text-zinc-400">— {exp.org}</span>
                  </p>
                  <p className="text-[12px] text-zinc-500 dark:text-zinc-400 shrink-0">{exp.dates}</p>
                </div>
                <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-1.5">
                      <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative my-6">
          <div className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />
        </div>

        {/* Projects */}
        <div className="py-2">
          <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Projects</h3>
          <div className="mt-4 space-y-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-3 rounded-[6px] border border-black/5 bg-zinc-50 px-3 py-2.5 transition-colors hover:bg-zinc-100 dark:border-white/5 dark:bg-[#0a0a0a] dark:hover:bg-[#121214]"
              >
                <div>
                  <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</p>
                  <p className="mt-0.5 text-[12px] text-zinc-500 dark:text-zinc-400">{project.tag}</p>
                </div>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-zinc-200" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative my-6">
          <div className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />
        </div>

        {/* Skills */}
        <div className="py-2">
          <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Skills</h3>
          <div className="mt-4 space-y-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
                <p className="w-28 shrink-0 text-[12px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-600">{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-[4px] border border-black/10 bg-zinc-50 px-2 py-0.5 text-[12px] text-zinc-600 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-zinc-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative my-6">
          <div className="pointer-events-none absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15]" style={dashedLine} />
        </div>

        {/* Achievements */}
        <div className="py-2 pb-8">
          <h3 className="text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Achievements & Certifications</h3>
          <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
