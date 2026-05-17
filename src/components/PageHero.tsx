import Image from "next/image";
import { img } from "@/data/museum";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageId,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageId: string;
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <Image src={img(imageId, 2000)} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/55 to-ink" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16">
        <p className="text-sm uppercase tracking-[0.4em] text-gold-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl text-cream md:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/80">{subtitle}</p>
      </div>
    </section>
  );
}
