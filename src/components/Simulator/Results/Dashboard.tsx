"use client";

import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import type { SimulatorResults } from "@/lib/calculator";
import { Home, TrendingUp, Wallet, TriangleAlert } from "lucide-react";

interface DashboardProps {
  results: SimulatorResults;
}

interface KPICardProps {
  label: string;
  value: number;
  format: (v: number) => string;
  icon: ReactNode;
  highlight?: boolean;
  warning?: boolean;
  fullWidth?: boolean;
}

function AnimatedNumber({ value, format }: { value: number; format: (v: number) => string }) {
  const motionVal = useMotionValue(value);
  const display = useTransform(motionVal, (v) => format(Math.round(v)));

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 0.55, ease: "easeOut" });
    return controls.stop;
  }, [value, motionVal]);

  return <motion.span>{display}</motion.span>;
}

function KPICard({ label, value, format, icon, highlight, warning, fullWidth }: KPICardProps) {
  return (
    <div
      className={[
        "rounded-xl p-4 flex flex-col gap-2",
        fullWidth ? "col-span-2" : "",
        highlight ? "glass-strong" : "glass",
      ].join(" ")}
      style={
        warning
          ? { borderColor: "var(--bd-warning)" }
          : highlight
          ? { borderColor: "rgba(128,192,170,0.25)" }
          : {}
      }
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: "var(--t-muted)" }}
        >
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

const euroFmt = (v: number) =>
  v.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

export default function Dashboard({ results }: DashboardProps) {
  const {
    totalBudget,
    loanCapacity,
    monthlyPayment,
    totalInterest,
    totalInsurance,
    netContribution,
    exceedsHCSF,
  } = results;

  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <h2
        className="text-base font-semibold tracking-tight"
        style={{ color: "var(--t-secondary)" }}
      >
        Votre capacité d&apos;acquisition
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <KPICard
          label="Budget total d'acquisition"
          value={totalBudget}
          format={euroFmt}
          icon={<Home size={15} />}
          highlight
          fullWidth
        />
        <KPICard
          label="Capacité d'emprunt"
          value={loanCapacity}
          format={euroFmt}
          icon={<Wallet size={15} />}
        />
        <KPICard
          label={`Mensualité (${Math.round(results.debtRatio * 100)} % du salaire)`}
          value={monthlyPayment}
          format={euroFmt}
          icon={<TrendingUp size={15} />}
          warning={exceedsHCSF}
        />
        <KPICard
          label="Coût total des intérêts"
          value={totalInterest}
          format={euroFmt}
          icon={<TrendingUp size={15} />}
        />
        <KPICard
          label="Coût total assurance"
          value={totalInsurance}
          format={euroFmt}
          icon={<TriangleAlert size={15} />}
        />
        <KPICard
          label="Apport net (après notaire)"
          value={netContribution}
          format={euroFmt}
          icon={<Wallet size={15} />}
        />
      </div>

      {exceedsHCSF && (
        <div
          className="flex items-start gap-2 rounded-xl px-3 py-2.5 text-xs"
          style={{
            background: "var(--bg-warning)",
            border: "1px solid var(--bd-warning)",
            color: "var(--t-warning)",
          }}
        >
          <TriangleAlert size={14} className="mt-0.5 shrink-0" />
          <span>
            Votre taux d&apos;endettement dépasse la limite HCSF de 35 %. Certaines banques
            peuvent refuser votre dossier.
          </span>
        </div>
      )}
    </div>
  );
}
