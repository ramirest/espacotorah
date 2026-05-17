import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/site";

export const metadata: Metadata = { title: "Blog · Espaço Torah" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Ensinamentos"
        title="Blog"
        subtitle="Reflexões, Torah e a sabedoria do Beit Midrash."
        imageId="1574936145840-28808d77a0b6"
      />
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="space-y-6">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group flex flex-col gap-4 rounded-3xl border border-sand bg-white p-9 transition-shadow hover:shadow-luxe md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-midnight px-3 py-1 text-xs uppercase tracking-widest text-gold">
                        {p.tag}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-ink/45">
                        {p.date}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl text-ink">{p.title}</h2>
                    <p className="mt-2 max-w-2xl leading-relaxed text-ink/70">
                      {p.excerpt}
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-gold transition-transform group-hover:translate-x-1">
                    Ler →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
