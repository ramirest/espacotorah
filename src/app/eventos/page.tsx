import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { events } from "@/data/site";

export const metadata: Metadata = { title: "Eventos · Espaço Torah" };

export default function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos"
        subtitle="Celebre os tempos sagrados com a nossa comunidade."
        imageId="1528659882437-b89a74bc157f"
      />
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="space-y-6">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <article className="flex flex-col gap-6 rounded-3xl border border-sand bg-white p-8 md:flex-row md:items-center">
                  <div className="grid w-full shrink-0 place-items-center rounded-2xl bg-midnight px-8 py-6 text-center text-cream md:w-44">
                    <CalendarDays className="text-gold" size={22} />
                    <p className="mt-2 font-display text-2xl">{e.date}</p>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl text-ink">{e.title}</h2>
                    <p className="mt-2 leading-relaxed text-ink/70">{e.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-6 text-sm text-ink/60">
                      <span className="flex items-center gap-2">
                        <Clock size={15} className="text-gold" /> {e.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={15} className="text-gold" /> {e.place}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
