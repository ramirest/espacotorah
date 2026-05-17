import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contato · Espaço Torah" };

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title="Contato"
        subtitle="As portas do Espaço Torah estão sempre abertas."
        imageId="1551038247-3d9af20df552"
      />

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl text-ink">Onde estamos</h2>
            <ul className="mt-8 space-y-6 text-ink/75">
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              {site.phones.map((p) => (
                <li key={p} className="flex gap-4">
                  <Phone className="shrink-0 text-gold" />
                  <span>{p}</span>
                </li>
              ))}
              {site.emails.map((e) => (
                <li key={e} className="flex gap-4">
                  <Mail className="shrink-0 text-gold" />
                  <span>{e}</span>
                </li>
              ))}
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-gold" />
                <span>Cabalat Shabat · Sextas, 18:45 — visitantes bem-vindos.</span>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-sand">
              <iframe
                title="Mapa Espaço Torah"
                className="h-72 w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.address
                )}&output=embed`}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-midnight p-9 md:p-12">
            <h2 className="font-display text-4xl text-cream">Envie uma mensagem</h2>
            <p className="mt-2 text-cream/65">
              Responderemos o mais breve possível. Shalom!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
