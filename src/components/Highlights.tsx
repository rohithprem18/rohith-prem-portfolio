"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { highlightsData, type Highlight } from "@/data/highlightsData";

function HighlightCard({
  item,
  onOpen,
}: {
  item: Highlight;
  onOpen: (item: Highlight) => void;
}) {
  const inner = (
    <div className="relative group w-[280px] sm:w-[300px] flex-shrink-0">
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div className="absolute -inset-[4px] border border-black/5 dark:border-white/5 rounded-[10px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />

      {/* Main Card Body */}
      <div className="relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]">
        {/* Screenshot Image Container */}
        <div className="relative w-full aspect-video bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden p-3">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              draggable={false}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
              }}
            />
          )}
        </div>

        {/* Signature Dashed Divider Motif */}
        <div
          className="h-px bg-black/30 dark:bg-white/[0.15]"
          style={{
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Info Content Section */}
        <div className="flex flex-col gap-1.5 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
            {item.link && (
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            )}
          </div>
          <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );

  if (item.external && item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="block text-left cursor-pointer"
      aria-haspopup="dialog"
    >
      {inner}
    </button>
  );
}

function ProofModal({ item, onClose }: { item: Highlight; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Body */}
      <div
        className="relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-[8px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/10 dark:border-white/10 shadow-2xl shadow-black/40 dark:shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* Proof Image */}
        {item.image && (
          <div className="relative w-full bg-zinc-100 dark:bg-[#0a0a0a] overflow-auto flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full max-h-[60vh] object-contain rounded-[4px]"
              draggable={false}
            />
          </div>
        )}

        {/* Divider */}
        <div
          className="h-px bg-black/30 dark:bg-white/[0.15]"
          style={{
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Details */}
        <div className="flex flex-col gap-2 p-4">
          <span className="inline-flex items-center self-start px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
            {item.badge}
          </span>
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
            {item.title}
          </p>
          {item.link && (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors self-start"
            >
              View original certificate
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function Highlights() {
  const items = [...highlightsData, ...highlightsData];
  const [selected, setSelected] = useState<Highlight | null>(null);

  return (
    <div className="relative mt-4 overflow-hidden py-2">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <div className="highlights-track flex gap-4 w-max">
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} onOpen={setSelected} />
        ))}
      </div>

      {selected && <ProofModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default Highlights;
