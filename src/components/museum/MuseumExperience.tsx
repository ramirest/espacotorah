"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Compass, ScrollText, Sparkles } from "lucide-react";
import { categories, exhibits, img } from "@/data/museum";
import { timeline } from "@/data/site";
import Lightbox from "./Lightbox";

export default function MuseumExperience() {
  const [active, setActive] = useState<string>("todos");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filtered = useMemo(
    () =>
      active === "todos"
        ? exhibits
        : exhibits.filter((e) => e.category === active),
    [active]
  );

  const filters = [{ id: "todos", name: "Acervo Completo" }, ...categories];

  return (
    <>
      {/* CINEMATIC HERO */}
      <section
        ref={heroRef}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <Image
            src={img("1564769662533-4f00a87b4056", 2400)}
            alt="Panorama de Jerusalém"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-midnight/60 to-ink" />

        <motion.div style={{ opacity: heroFade }} className="relative px-5 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.4 }}
            className="text-sm uppercase text-gold-soft"
          >
            Museu Espaço Torah
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-cream md:text-8xl"
          >
            Uma jornada pela{" "}
            <span className="text-gradient-gold">memória sagrada</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mx-auto mt-7 max-w-xl text-lg text-cream/80"
          >
            Israel, a Terra Santa, a arte judaica e a história viva da nossa
            comunidade — curadas em uma experiência imersiva.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-col items-center gap-2 text-cream/60"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Role para explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* COLEÇÕES — intro cards */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-4">
            <Sparkles className="text-gold" size={22} />
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              Coleções em exposição
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => {
                  setActive(c.id);
                  document
                    .getElementById("acervo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative h-64 overflow-hidden rounded-2xl text-left"
              >
                <Image
                  src={img(c.cover, 700)}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-sm tracking-[0.25em] text-gold">
                    {c.hebrew}
                  </p>
                  <p className="font-display text-2xl text-cream">{c.name}</p>
                  <p className="mt-1 text-xs leading-snug text-cream/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {c.blurb}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ACERVO — masonry */}
      <section id="acervo" className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gold">Acervo</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Galeria Imersiva
            </h2>
          </div>

          {/* sticky filter */}
          <div className="sticky top-20 z-20 mt-10 -mx-5 bg-cream/85 px-5 py-4 backdrop-blur">
            <div className="no-scrollbar flex gap-3 overflow-x-auto">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-all ${
                    active === f.id
                      ? "border-midnight bg-midnight text-gold"
                      : "border-sand bg-white text-ink/70 hover:border-gold"
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((e, i) => (
                <motion.figure
                  key={e.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-midnight"
                >
                  <div
                    className={`relative w-full ${
                      e.span === "tall"
                        ? "aspect-[3/4]"
                        : e.span === "wide"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img(e.imageId, 1000)}
                      alt={e.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1100ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                      {e.meta}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-cream">
                      {e.title}
                    </h3>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* TOUR VIRTUAL */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-4">
            <Compass className="text-gold" size={22} />
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              Tour Virtual
            </h2>
          </div>
          <p className="mt-4 max-w-xl text-cream/70">
            Deslize sobre a imagem para percorrer o santuário — uma prévia da
            experiência presencial no Espaço Torah.
          </p>
          <PanoViewer />
        </div>
      </section>

      {/* MEMÓRIA VIVA — timeline */}
      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex items-center gap-4">
            <ScrollText className="text-royal" size={22} />
            <h2 className="font-display text-4xl text-ink md:text-5xl">
              Memória Viva
            </h2>
          </div>
          <div className="relative mt-14 border-l-2 border-gold/40 pl-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pb-14 last:pb-0"
              >
                <span className="absolute -left-[3.15rem] top-1 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-ink">
                  ✦
                </span>
                <p className="font-display text-3xl text-royal">{t.year}</p>
                <h3 className="mt-1 font-display text-2xl text-ink">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA DO CURADOR */}
      <section className="bg-midnight py-24 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <p className="font-display text-2xl text-gold">מן האוצר</p>
          <blockquote className="mt-5 font-display text-3xl leading-snug text-cream md:text-4xl">
            “Cada imagem é uma janela: olhamos para Jerusalém e Jerusalém olha de
            volta para nós.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cream/50">
            Curadoria · Espaço Torah
          </p>
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}

function PanoViewer() {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setX(((e.clientX - r.left) / r.width) * 100);
      }}
      onTouchMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setX(((e.touches[0].clientX - r.left) / r.width) * 100);
      }}
      className="relative mt-10 h-[60vh] cursor-ew-resize overflow-hidden rounded-3xl"
    >
      <Image
        src={img("1592861956120-e524fc739696", 2400)}
        alt="Panorama do Monte do Templo"
        fill
        sizes="100vw"
        className="object-cover transition-[object-position] duration-300 ease-out"
        style={{ objectPosition: `${x}% center` }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-ink/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cream/80 backdrop-blur">
        360° · arraste para girar
      </div>
    </div>
  );
}
