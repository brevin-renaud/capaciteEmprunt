"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS, FAQ_CATEGORIES, type FAQItem, type FAQCategory } from "@/data/faq";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: isOpen ? "var(--bg-active-item)" : "var(--bg-card)",
        border: `1px solid ${isOpen ? "var(--bd-active-item)" : "var(--bd-card)"}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-base leading-snug"
          style={{ color: isOpen ? "var(--t-brand)" : "var(--t-primary)" }}
        >
          {item.question}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? "#003d2b" : "var(--bg-filter)",
            color: isOpen ? "#ffffff" : "var(--t-muted)",
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--t-secondary)" }}
          >
            {item.answer}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "var(--bg-keyword)",
                  color: "var(--t-brand)",
                  border: "1px solid var(--bd-brand-dim)",
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* Section avec titre de catégorie + ses questions */
function CategorySection({
  categoryId,
  label,
  items,
  openId,
  setOpenId,
}: {
  categoryId: string;
  label: string;
  items: FAQItem[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="flex items-center gap-3 mt-10 first:mt-0">
        <h2
          className="text-sm font-semibold uppercase tracking-widest shrink-0"
          style={{ color: "var(--t-brand)" }}
          id={`cat-${categoryId}`}
        >
          {label}
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--bd-brand-dim)" }}
        />
        <span
          className="text-xs shrink-0"
          style={{ color: "var(--t-muted)" }}
        >
          {items.length} question{items.length > 1 ? "s" : ""}
        </span>
      </div>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

export default function FAQClient() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 uppercase tracking-widest"
            style={{
              background: "var(--bg-badge)",
              border: "1px solid var(--bd-brand)",
              color: "var(--t-brand)",
            }}
          >
            {FAQ_ITEMS.length} questions · 8 thèmes
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--t-primary)" }}
          >
            Tout comprendre sur votre{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #80c0aa, #268e6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              capacité d&apos;emprunt
            </span>
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--t-muted)" }}
          >
            Réponses claires aux questions les plus posées sur le crédit
            immobilier en France - de la formule bancaire aux stratégies
            d&apos;optimisation.
          </p>
        </div>

        {/* Filtres catégories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => { setActiveCategory("all"); setOpenId(null); }}
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            style={{
              background: activeCategory === "all" ? "var(--bg-brand-filter)" : "var(--bg-filter)",
              color: activeCategory === "all" ? "var(--t-brand)" : "var(--t-filter)",
              border: `1px solid ${activeCategory === "all" ? "var(--bd-filter-active)" : "var(--bd-filter)"}`,
            }}
          >
            Tous ({FAQ_ITEMS.length})
          </button>
          {FAQ_CATEGORIES.map(({ id, label }) => {
            const count = FAQ_ITEMS.filter((i) => i.category === id).length;
            const active = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => { setActiveCategory(id); setOpenId(null); }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: active ? "var(--bg-brand-filter)" : "var(--bg-filter)",
                  color: active ? "var(--t-brand)" : "var(--t-filter)",
                  border: `1px solid ${active ? "var(--bd-filter-active)" : "var(--bd-filter)"}`,
                }}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Vue filtrée : liste plate avec titre de catégorie unique */}
        {activeCategory !== "all" ? (
          <div className="flex flex-col gap-4">
            {filtered.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        ) : (
          /* Vue "Tous" : sections par thème avec titres */
          <div className="flex flex-col gap-2">
            {FAQ_CATEGORIES.map(({ id, label }) => (
              <CategorySection
                key={id}
                categoryId={id}
                label={label}
                items={FAQ_ITEMS.filter((i) => i.category === id)}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "var(--bg-cta)",
            border: "1px solid var(--bd-brand)",
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "var(--t-muted)" }}
          >
            Prêt à calculer votre situation personnelle ?
          </p>
          <Link
            href="/simulateur"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "#003d2b", color: "#ffffff" }}
          >
            Lancer le simulateur gratuit →
          </Link>
        </div>
      </div>
    </main>
  );
}
