import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Heart, Flower2, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { segments, schedule, posts, site } from "@/data/site";
import { img, categories } from "@/data/museum";

const iconMap = { heart: Heart, book: BookOpen, flower: Flower2 } as const;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src={img("1547483238-2cbf881a559f", 2000)}
          alt="Jerusalém ao entardecer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 via-midnight/70 to-ink" />
        <div className="relative mx-auto max-w-7xl px-5 py-32">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.45em] text-gold-soft">
              {site.hebrew} · {site.city}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
              Judaísmo com{" "}
              <span className="text-gradient-gold">Tradição e Beleza</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              A sinagoga da alegria em Ribeirão Preto. Uma comunidade dedicada à
              Torah, à justiça social e a ser luz para todas as nações.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/museu"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Visitar o Museu
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Faça uma visita
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/70" />
      </section>

      {/* SEGMENTOS */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle eyebrow="Nossos Pilares" title="Três Caminhos, Uma Missão" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {segments.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <article className="group h-full rounded-3xl border border-sand bg-white p-9 transition-all hover:-translate-y-1 hover:shadow-luxe">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-midnight text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
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

      {/* MUSEU TEASER */}
      <section className="relative overflow-hidden bg-ink py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold-soft">
                Novo · Experiência Imersiva
              </p>
              <h2 className="mt-5 font-display text-5xl leading-tight text-cream">
                O Museu Espaço Torah
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-cream/75">
                Uma jornada visual por Israel, pela nossa sinagoga e pela arte
                judaica. Coleções curadas, tour virtual e a memória viva da
                comunidade — tudo em uma experiência cinematográfica.
              </p>
              <Link
                href="/museu"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Entrar no Museu
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c, i) => (
                <div
                  key={c.id}
                  className={`relative overflow-hidden rounded-2xl ${
                    i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img(c.cover, 700)}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-display text-lg text-cream">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HORÁRIOS */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <SectionTitle eyebrow="Vida Comunitária" title="Horários de Serviço" />
          </Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-sand bg-white">
            {schedule.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="flex items-center justify-between gap-4 border-b border-sand px-7 py-5 last:border-0">
                  <div className="flex items-center gap-4">
                    <Clock size={18} className="text-gold" />
                    <div>
                      <p className="font-display text-xl text-ink">{s.name}</p>
                      <p className="text-sm text-ink/55">{s.when}</p>
                    </div>
                  </div>
                  <span className="font-display text-2xl text-royal">{s.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle eyebrow="Ensinamentos" title="Do Beit Midrash" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-8 transition-shadow hover:shadow-luxe">
                  <span className="w-fit rounded-full bg-midnight px-3 py-1 text-xs uppercase tracking-widest text-gold">
                    {p.tag}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest text-ink/45">
                    {p.date}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-midnight py-24 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="font-display text-2xl text-gold">ברוכים הבאים</p>
            <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
              Sua casa em Ribeirão Preto
            </h2>
            <p className="mt-5 text-cream/75">
              As portas do Espaço Torah estão abertas. Venha celebrar o Shabat
              conosco e sinta a alegria da nossa comunidade.
            </p>
            <Link
              href="/contato"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-105"
            >
              Fale Conosco
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="hairline mx-auto mt-6 w-24" />
    </div>
  );
}
