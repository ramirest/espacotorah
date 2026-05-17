import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/data/site";

function Instagram({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Facebook({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3l.5-3H14V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.6 0 15.5 0 14.3 0 11.7 0 10 1.6 10 4v2H7v3h3v9h4V9Z" />
    </svg>
  );
}
function Youtube({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4A3 3 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-midnight text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-gradient-gold">{site.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-gold-soft">
            {site.hebrew} · {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Uma ferramenta para a implementação da Sagrada Torah na Terra — ser
            luz para Israel e para todas as nações.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { i: Instagram, h: site.social.instagram },
              { i: Facebook, h: site.social.facebook },
              { i: Youtube, h: site.social.youtube },
            ].map(({ i: Icon, h }, k) => (
              <a
                key={k}
                href={h}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold">Navegação</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-gold">Contato</h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex gap-3">
                <Phone size={17} className="shrink-0 text-gold" />
                <span>{p}</span>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail size={17} className="shrink-0 text-gold" />
              <span>{site.emails[0]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name} · {site.city}. Feito com
          tradição e beleza.
        </p>
      </div>
    </footer>
  );
}
