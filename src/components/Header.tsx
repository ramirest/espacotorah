"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import logo from "../../public/logo.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-xl shadow-luxe py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label={site.name} className="group flex items-center">
          <span
            className={`flex items-center rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(11,31,58,0.6)] ring-1 ring-white/60 transition-all duration-500 group-hover:ring-gold/70 ${
              scrolled ? "px-4 py-2" : "px-5 py-2.5"
            }`}
          >
            <Image
              src={logo}
              alt={site.name}
              priority
              placeholder="blur"
              sizes="198px"
              className={`h-auto transition-all duration-500 ${
                scrolled ? "w-[168px]" : "w-[198px]"
              }`}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  item.highlight
                    ? "ml-2 border border-gold/60 text-gold hover:bg-gold hover:text-ink"
                    : active
                    ? "text-gold"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                {item.label}
                {active && !item.highlight && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-cream lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-midnight/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base ${
                    item.highlight
                      ? "text-gold"
                      : pathname === item.href
                      ? "bg-royal/40 text-gold"
                      : "text-cream/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
