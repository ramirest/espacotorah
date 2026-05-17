import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { timeline } from "@/data/site";

export const metadata: Metadata = { title: "Sobre Nós · Espaço Torah" };

const leaders = [
  { name: "Rachel Bat Ya'akov", role: "Fundadora", note: "Fundou o Espaço Torah em 2012 após uma jornada espiritual a Israel." },
  { name: "Yonah Ben Avraham", role: "Rosh Kehilá", note: "Assumiu a liderança oficial em 2021, consolidando a vida comunitária." },
  { name: "Ya'akov Ben Avraham", role: "Ensino", note: "Educador dedicado aos programas de estudo da comunidade." },
  { name: "Chesky Gotlieb", role: "Ensino", note: "Compõe o corpo de mestres da Yeshivá Chayim Tovim." },
];

const committees = [
  { name: "Administrativo", desc: "Gestão, finanças e operação da casa." },
  { name: "Mídia", desc: "Comunicação, conteúdo e presença digital." },
  { name: "Educacional", desc: "Yeshivá, cursos e formação contínua." },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Sobre Nós"
        subtitle="Uma ferramenta para a implementação da Sagrada Torah na Terra."
        imageId="1601233749202-95d04d5b3c00"
      />

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Missão</p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                Luz para Israel e para todas as nações
              </h2>
              <p className="mt-6 leading-relaxed text-ink/70">
                Avançamos a educação da Torah, promovemos a justiça social
                (Tzedaká) e estabelecemos academias judaicas (Yeshivot) para
                preservar a cultura judaica às próximas gerações.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Somos reconhecidos como a “sinagoga da alegria”, conhecida por
                projetos inovadores que aproximam a espiritualidade judaica da
                sociedade.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-midnight p-10 text-cream">
              <p className="font-display text-2xl text-gold">Nossos Comitês</p>
              <div className="mt-6 space-y-5">
                {committees.map((c) => (
                  <div key={c.name} className="border-b border-gold/15 pb-5 last:border-0">
                    <p className="font-display text-xl text-cream">{c.name}</p>
                    <p className="text-sm text-cream/65">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-ink md:text-5xl">
              Liderança
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold font-display text-2xl text-ink">
                    {l.name[0]}
                  </div>
                  <p className="mt-5 font-display text-xl text-ink">{l.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{l.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{l.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-ink md:text-5xl">
              Nossa Trajetória
            </h2>
          </Reveal>
          <div className="relative mt-14 border-l-2 border-gold/40 pl-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[3.15rem] top-1 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs text-ink">
                    ✦
                  </span>
                  <p className="font-display text-3xl text-royal">{t.year}</p>
                  <h3 className="mt-1 font-display text-2xl text-ink">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
