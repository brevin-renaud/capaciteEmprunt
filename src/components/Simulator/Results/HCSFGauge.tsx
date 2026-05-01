"use client";

import { motion } from "framer-motion";
import { HCSF_MAX_DEBT_RATIO } from "@/lib/constants";

interface HCSFGaugeProps {
  debtRatio: number;
  exceedsHCSF: boolean;
  monthlyPayment: number;
  salary: number;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const MAX_RATIO = 0.45;

function strokeColor(ratio: number, exceeds: boolean): string {
  if (exceeds) return "#f59e0b";
  if (ratio > 0.30) return "#facc15";
  return "#268e6b";
}

function gaugeTextClass(ratio: number, exceeds: boolean): string {
  if (exceeds) return "gauge-over";
  if (ratio > 0.30) return "gauge-warn";
  return "gauge-ok";
}

function statusLabel(ratio: number, exceeds: boolean): { text: string; color: string } {
  if (exceeds) return { text: "Dépassement", color: "var(--c-gauge-over)" };
  if (ratio >= HCSF_MAX_DEBT_RATIO - 0.001) return { text: "À la limite", color: "var(--c-gauge-warn)" };
  if (ratio > 0.30) return { text: "Attention", color: "var(--c-gauge-warn)" };
  return { text: "Confortable", color: "var(--c-gauge-ok)" };
}

function contextMessage(ratio: number, exceeds: boolean, marginEuros: number): string {
  if (exceeds) return "Dépasse la limite HCSF. Un refus bancaire est probable sans dérogation.";
  if (ratio >= HCSF_MAX_DEBT_RATIO - 0.001) return "Mensualité maximale - vous utilisez toute votre capacité HCSF.";
  if (ratio > 0.30) return `Vous approchez de la limite réglementaire. Il vous reste ${Math.round(marginEuros).toLocaleString("fr-FR")} € / mois de marge.`;
  return `Situation confortable - ${Math.round(marginEuros).toLocaleString("fr-FR")} € / mois de capacité de remboursement disponible avant la limite HCSF.`;
}

const euroFmt = (v: number) =>
  Math.round(v).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

export default function HCSFGauge({ debtRatio, exceedsHCSF, monthlyPayment, salary }: HCSFGaugeProps) {
  const clamped = Math.min(debtRatio, MAX_RATIO);
  const fillPct = clamped / MAX_RATIO;
  const strokeDashoffset = CIRCUMFERENCE * (1 - fillPct);
  const color = strokeColor(debtRatio, exceedsHCSF);
  const textClass = gaugeTextClass(debtRatio, exceedsHCSF);
  const limitOffset = CIRCUMFERENCE * (1 - HCSF_MAX_DEBT_RATIO / MAX_RATIO);
  const maxHCSFPayment = salary * HCSF_MAX_DEBT_RATIO;
  const margin = maxHCSFPayment - monthlyPayment;
  const status = statusLabel(debtRatio, exceedsHCSF);
  const message = contextMessage(debtRatio, exceedsHCSF, margin);

  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--t-muted)" }}
        >
          Taux d&apos;endettement - Règle HCSF
        </h3>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: "var(--bg-brand-dim)",
            color: status.color,
            border: "1px solid var(--bd-brand-dim)",
          }}
        >
          {status.text}
        </span>
      </div>

      {/* Gauge + Numbers side by side */}
      <div className="flex items-center gap-6">
        {/* Circular gauge */}
        <div className="relative w-28 h-28 shrink-0">
          <svg viewBox="0 0 120 120" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
            {/* Track */}
            <circle
              cx="60" cy="60" r={RADIUS}
              fill="none"
              stroke="var(--stroke-track)"
              strokeWidth="10"
            />
            {/* 35% limit marker */}
            <circle
              cx="60" cy="60" r={RADIUS}
              fill="none"
              stroke="rgba(245,158,11,0.6)"
              strokeWidth="3"
              strokeDasharray={`4 ${CIRCUMFERENCE - 4}`}
              strokeDashoffset={limitOffset}
              strokeLinecap="round"
            />
            {/* Animated fill */}
            <motion.circle
              cx="60" cy="60" r={RADIUS}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE, stroke: "#268e6b" }}
              animate={{ strokeDashoffset, stroke: color }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`${textClass} text-2xl font-bold tabular-nums leading-none`}>
              {(debtRatio * 100).toFixed(0)}
              <span className="text-base font-normal">%</span>
            </span>
            <span className="text-xs mt-1" style={{ color: "var(--t-faint)" }}>
              / 35 %
            </span>
          </div>
        </div>

        {/* Numbers column */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-xs" style={{ color: "var(--t-muted)" }}>
              Mensualité choisie
            </span>
            <span className="text-sm font-bold tabular-nums shrink-0" style={{ color: "var(--t-primary)" }}>
              {euroFmt(monthlyPayment)}<span className="text-xs font-normal">/mois</span>
            </span>
          </div>

          <div className="flex justify-between items-baseline gap-2">
            <span className="text-xs" style={{ color: "var(--t-muted)" }}>
              Plafond HCSF (35 %)
            </span>
            <span className="text-sm font-semibold tabular-nums shrink-0" style={{ color: "var(--t-secondary)" }}>
              {euroFmt(maxHCSFPayment)}<span className="text-xs font-normal">/mois</span>
            </span>
          </div>

          <div
            className="flex justify-between items-baseline gap-2 pt-2"
            style={{ borderTop: "1px solid var(--bd-table-row)" }}
          >
            <span className="text-xs font-medium" style={{ color: "var(--t-muted)" }}>
              {margin >= 0 ? "Marge disponible" : "Dépassement"}
            </span>
            <span
              className="text-sm font-bold tabular-nums shrink-0"
              style={{ color: margin >= 0 ? "var(--c-gauge-ok)" : "var(--c-gauge-over)" }}
            >
              {margin >= 0 ? "+" : ""}{euroFmt(margin)}<span className="text-xs font-normal">/mois</span>
            </span>
          </div>
        </div>
      </div>

      {/* Context message */}
      <p
        className="text-xs leading-relaxed"
        style={{ color: exceedsHCSF ? "var(--t-warning)" : "var(--t-faint)" }}
      >
        {message}
      </p>
    </div>
  );
}
