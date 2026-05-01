"use client";

import { motion } from "framer-motion";
import type { PropertyType } from "@/lib/calculator";
import { NOTARY_FEES_RATE } from "@/lib/constants";

interface ProjectToggleProps {
  value: PropertyType;
  onChange: (type: PropertyType) => void;
}

const OPTIONS: { label: string; value: PropertyType; badge: string }[] = [
  {
    label: "Ancien",
    value: "old",
    badge: `Frais notaire ~${(NOTARY_FEES_RATE.old * 100).toFixed(1)} %`,
  },
  {
    label: "Neuf",
    value: "new",
    badge: `Frais notaire ~${(NOTARY_FEES_RATE.new * 100).toFixed(1)} %`,
  },
];

export default function ProjectToggle({ value, onChange }: ProjectToggleProps) {
  return (
    <div className="glass rounded-2xl p-4">
      <p
        className="text-xs mb-3 uppercase tracking-widest font-semibold"
        style={{ color: "var(--t-muted)" }}
      >
        Type de bien
      </p>

      <div
        className="relative flex rounded-xl p-1 gap-1"
        style={{ background: "var(--bg-filter)" }}
      >
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className="relative flex-1 flex flex-col items-center py-2.5 px-3 rounded-lg z-10 transition-colors cursor-pointer"
          >
            {value === opt.value && (
              <motion.div
                layoutId="toggle-pill"
                className="absolute inset-0 rounded-lg"
                style={{ background: "#003d2b", boxShadow: "0 4px 16px rgba(0,61,43,0.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className="relative text-sm font-semibold z-10"
              style={{ color: value === opt.value ? "#ffffff" : "var(--t-secondary)" }}
            >
              {opt.label}
            </span>
            <span
              className="relative text-xs z-10 mt-0.5"
              style={{
                color: value === opt.value ? "rgba(128,192,170,0.9)" : "var(--t-muted)",
              }}
            >
              {opt.badge}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
