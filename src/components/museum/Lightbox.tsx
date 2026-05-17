"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { img, type Exhibit } from "@/data/museum";

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Exhibit[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            aria-label="Fechar"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            <X size={20} />
          </button>

          <NavBtn side="left" onClick={(e) => { e.stopPropagation(); go(-1); }}>
            <ChevronLeft size={26} />
          </NavBtn>
          <NavBtn side="right" onClick={(e) => { e.stopPropagation(); go(1); }}>
            <ChevronRight size={26} />
          </NavBtn>

          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-midnight"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-ink">
              <Image
                src={img(item.imageId, 1800)}
                alt={item.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col gap-1 px-7 py-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {item.meta}
                </p>
                <h3 className="mt-1 font-display text-3xl text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/70">
                  {item.description}
                </p>
              </div>
              <span className="shrink-0 text-sm text-cream/40">
                {index! + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavBtn({
  side,
  onClick,
  children,
}: {
  side: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={side === "left" ? "Anterior" : "Próximo"}
      onClick={onClick}
      className={`absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold hover:text-ink ${
        side === "left" ? "left-4 md:left-8" : "right-4 md:right-8"
      }`}
    >
      {children}
    </button>
  );
}
