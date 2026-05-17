"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Nome" name="nome" />
      <Field label="E-mail" name="email" type="email" />
      <div>
        <label className="text-xs uppercase tracking-[0.25em] text-gold-soft">
          Mensagem
        </label>
        <textarea
          required
          rows={4}
          className="mt-2 w-full rounded-xl border border-gold/20 bg-royal/20 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-105 disabled:opacity-70"
      >
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.span
              key="ok"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Check size={16} /> Mensagem enviada
            </motion.span>
          ) : (
            <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Enviar mensagem
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-gold-soft">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-gold/20 bg-royal/20 px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
