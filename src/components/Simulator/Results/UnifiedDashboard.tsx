"use client";

import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import type { SimulatorResults, OptimizationResults } from "@/lib/calculator";
import { Home, TrendingDown, TrendingUp, Wallet, TriangleAlert } from "lucide-react";

type Mode = "capacity" | "optimization";

interface UnifiedDashboardProps {
  mode: Mode;
  capResults: SimulatorResults;
  optResults: OptimizationResults;
  loanAmount: number;
}

// ── Shared helpers ─────────────────────────────────────────────────────────

const euroFmt = (v: number) =>
  v.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function AnimatedNumber({ value, format }: { value: number; format: (v: number) => string }) {
  const motionVal = useMotionValue(value);
  const display = useTransform(motionVal, (v) => format(Math.round(v)));
  useEffect(() => {
    const c = animate(motionVal, value, { duration: 0.55, ease: "easeOut" });
    return c.stop;
  }, [value, motionVal]);
  return <motion.span>{display}</motion.span>;
}

interface KPICardProps {
  label: string;
  value: number;
  format?: (v: number) => string;
  icon: ReactNode;
  highlight?: boolean;
  warning?: boolean;
  fullWidth?: boolean;
  dimmed?: boolean;
}

function KPICard({
  label, value, format = euroFmt, icon, highlight, warning, fullWidth, dimmed,
}: KPICardProps) {
  return (
    <div
      className={[
        "rounded-xl p-4 flex flex-col gap-2",
        fullWidth ? "sm:col-span-2" : "",
        highlight ? "glass-strong" : "glass",
      ].join(" ")}
      style={{
        ...(warning ? { borderColor: "var(--bd-warning)" } : {}),
        ...(highlight && !warning ? { borderColor: "rgba(128,192,170,0.25)" } : {}),
        ...(dimmed ? { opacity: 0.75 } : {}),
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--t-muted)" }}>
          {label}
        </span>
        <span style={{ color: warning ? "var(--icon-warning)" : "var(--t-brand)", opacity: 0.8 }}>
          {icon}
        </span>
      </div>
      <div
        className="text-2xl font-bold tabular-nums"
        style={{ color: warning ? "var(--t-warning)" : "var(--t-primary)" }}
      >
        <AnimatedNumber value={value} format={format} />
      </div>
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────

export default function UnifiedDashboard({
  mode,
  capResults,
  optResults,
  loanAmount,
}: UnifiedDashboardProps) {
  // Active values for common cards — update in place when mode or results change
  const totalBudget    = mode === "capacity" ? capResults.totalBudget    : optResults.totalBudget;
  const monthlyPayment = mode === "capacity" ? capResults.monthlyPayment : optResults.monthlyPayment;
  const totalInterest  = mode === "capacity" ? capResults.totalInterest  : optResults.totalInterest;
  const totalInsurance = mode === "capacity" ? capResults.totalInsurance : optResults.totalInsurance;
  const netContrib     = mode === "capacity" ? capResults.netContribution: optResults.netContribution;
  const debtRatio      = mode === "capacity" ? capResults.debtRatio      : optResults.debtRatio;
  const exceedsHCSF    = mode === "capacity" ? capResults.exceedsHCSF    : optResults.exceedsHCSF;

  // Mode-specific card values (bottom row)
  const specificValue  = mode === "capacity" ? capResults.loanCapacity   : optResults.totalCreditCost;

  const mensualiteLabel = debtRatio > 0
    ? `Mensualité (${Math.round(debtRatio * 100)} % du salaire)`
    : "Mensualité";

  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      {/* Title — simple text swap, no animation needed */}
      <h2 className="text-base font-semibold tracking-tight" style={{ color: "var(--t-secondary)" }}>
        {mode === "capacity" ? "Votre capacité d’acquisition" : "Résultats de votre prêt"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* ── Row 1: two primary KPIs side by side, highlight follows mode ── */}
        <KPICard
          label="Budget total d'acquisition"
          value={totalBudget}
          icon={<Home size={15} />}
          highlight={mode === "capacity"}
        />
        <KPICard
          label={mensualiteLabel}
          value={monthlyPayment}
          icon={mode === "optimization" ? <TrendingDown size={15} /> : <TrendingDown size={15} />}
          highlight={mode === "optimization"}
          warning={exceedsHCSF}
        />

        {/* ── Rows 2–3: always same position, same card ── */}
        <KPICard
          label="Coût total des intérêts"
          value={totalInterest}
          icon={<TrendingUp size={15} />}
        />
        <KPICard
          label="Coût total assurance"
          value={totalInsurance}
          icon={<TriangleAlert size={15} />}
        />
        <KPICard
          label="Apport net (après notaire)"
          value={netContrib}
          icon={<Wallet size={15} />}
          fullWidth
        />

        {/* ── Bottom: mode-specific card — stays mounted, label + value update ── */}
        <div
          className="sm:col-span-2 rounded-xl p-4 flex flex-col gap-2 glass"
          style={{ opacity: 0.78 }}
        >
          <div className="flex items-center justify-between">
            {/* Label fades on mode change */}
            <motion.span
              key={mode}
              className="text-xs font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ color: "var(--t-muted)" }}
            >
              {mode === "capacity" ? "Capacité d’emprunt" : "Coût total du crédit"}
            </motion.span>
            {/* Icon fades on mode change */}
            <motion.span
              key={`icon-${mode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ color: "var(--t-brand)" }}
            >
              {mode === "capacity" ? <Wallet size={15} /> : <TrendingUp size={15} />}
            </motion.span>
          </div>
          <div className="text-2xl font-bold tabular-nums" style={{ color: "var(--t-primary)" }}>
            <AnimatedNumber value={specificValue} format={euroFmt} />
          </div>
        </div>
      </div>

      {/* HCSF warning */}
      {exceedsHCSF && (
        <div
          className="flex items-start gap-2 rounded-xl px-3 py-2.5 text-xs"
          style={{ background: "var(--bg-warning)", border: "1px solid var(--bd-warning)", color: "var(--t-warning)" }}
        >
          <TriangleAlert size={14} className="mt-0.5 shrink-0" />
          <span>
            {mode === "capacity"
              ? "Votre taux d’endettement dépasse la limite HCSF de 35 %. Certaines banques peuvent refuser votre dossier."
              : "La mensualité dépasse 35 % de votre salaire (limite HCSF). Certaines banques peuvent refuser ce dossier."}
          </span>
        </div>
      )}

      {/* Capital emprunté info (optimization mode only) */}
      {mode === "optimization" && (
        <div
          className="rounded-xl px-4 py-3 text-xs flex items-baseline justify-between gap-2"
          style={{ background: "var(--bg-brand-dim)", border: "1px solid var(--bd-brand)" }}
        >
          <span style={{ color: "var(--t-muted)" }}>Capital emprunté</span>
          <span className="font-semibold tabular-nums" style={{ color: "var(--t-brand)" }}>
            {euroFmt(loanAmount)}
          </span>
        </div>
      )}
    </div>
  );
}
