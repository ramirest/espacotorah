import type { Metadata } from "next";
import { BookOpen, Heart, Flower2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { segments, schedule } from "@/data/site";

export const metadata: Metadata = { title: "Comunidade · Espaço Torah" };

const iconMap = { heart: Heart, book: BookOpen, flower: Flower2 } as const;

export default function ComunidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Vida Comunitária"
        title="Comunidade"
        subtitle="Tradição, estudo e alegria — uma casa para todas as gerações."
        imageId="1438032005730-c779502df39b"
      />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-ink md:text-5xl">
              Nossos Segmentos
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {segments.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <article className="h-full rounded-3xl border border-sand bg-white p-9">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-midnight text-gold">
                      <Icon size={24} />
                    </div>
                    <p className="mt-6 font-display text-sm tracking-[0.3em] text-gold">
                      {s.hebrew}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-ink">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-cream md:text-5xl">
              Horários de Serviço
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {schedule.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="flex items-center justify-between rounded-2xl border border-gold/20 bg-royal/20 px-7 py-5">
                  <div>
                    <p className="font-display text-xl text-cream">{s.name}</p>
                    <p className="text-sm text-cream/55">{s.when}</p>
                  </div>
                  <span className="font-display text-2xl text-gold">{s.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
