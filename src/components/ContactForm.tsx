"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle, Send } from "lucide-react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields; humans never do.
    if (data.get("_gotcha")) return;

    if (!ENDPOINT) {
      setError(
        "Formulário ainda não configurado. Defina NEXT_PUBLIC_FORMSPREE_ID."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(
          json?.errors?.[0]?.message ??
            "Não foi possível enviar agora. Tente novamente em instantes."
        );
        setStatus("error");
      }
    } catch {
      setError("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 rounded-2xl border border-gold/30 bg-brand/15 p-8 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-ink">
          <Check size={26} />
        </span>
        <p className="mt-5 font-display text-2xl text-cream">
          Mensagem enviada · Shalom!
        </p>
        <p className="mt-2 text-sm text-cream/70">
          Recebemos seu contato e responderemos em breve.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-gold/50 px-6 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    );
  }

  const busy = status === "submitting";

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
      <div
        aria-hidden
        className="absolute left-[-9999px]"
        style={{ position: "absolute" }}
      >
        <label>
          Não preencha
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <input type="hidden" name="_subject" value="Novo contato · Site Espaço Torah" />

      <Field label="Nome" name="nome" disabled={busy} />
      <Field label="E-mail" name="email" type="email" disabled={busy} />
      <div>
        <label
          htmlFor="mensagem"
          className="text-xs uppercase tracking-[0.25em] text-gold-soft"
        >
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          disabled={busy}
          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none transition-all focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/40 disabled:opacity-60"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200"
          >
            <AlertCircle size={16} className="shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-105 disabled:scale-100 disabled:opacity-70"
      >
        {busy ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send size={16} /> Enviar mensagem
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.25em] text-gold-soft"
      >
        {label}
      </label>
      <input
        id={name}
        required
        name={name}
        type={type}
        disabled={disabled}
        autoComplete={name === "email" ? "email" : "name"}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream outline-none transition-all focus:border-brand-bright focus:ring-2 focus:ring-brand-bright/40 disabled:opacity-60"
      />
    </div>
  );
}
