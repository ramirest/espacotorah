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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-sand/70 shadow-[0_10px_30px_-18px_rgba(11,31,58,0.35)]"
          : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" aria-label={site.name} className="group flex items-center">
          <Image
            src={logo}
            alt={site.name}
            priority
            placeholder="blur"
            sizes="(max-width: 640px) 150px, 188px"
            className={`h-auto transition-all duration-300 ${
              scrolled
                ? "w-[120px] sm:w-[140px] lg:w-[156px]"
                : "w-[138px] sm:w-[164px] lg:w-[188px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  item.highlight
                    ? "ml-2 bg-brand text-white shadow-sm hover:bg-brand-bright"
                    : active
                    ? "text-brand"
                    : "text-ink/65 hover:text-brand"
                }`}
              >
                {item.label}
                {active && !item.highlight && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-sand text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
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
            className="overflow-hidden border-t border-sand bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    item.highlight
                      ? "bg-brand text-white"
                      : pathname === item.href
                      ? "bg-cream text-brand"
                      : "text-ink/70 hover:bg-cream"
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
