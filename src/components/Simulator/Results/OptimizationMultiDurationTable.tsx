"use client";

import { motion } from "framer-motion";
import type { OptimizationScenario } from "@/lib/calculator";

interface OptimizationMultiDurationTableProps {
  scenarios: OptimizationScenario[];
  currentDuration: number;
}

const euroFmt = (v: number) =>
  v.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

type ScenarioKey = keyof OptimizationScenario;

const COLUMNS: { key: ScenarioKey; label: string; format: (v: number) => string }[] = [
  { key: "durationYears",   label: "Durée",              format: (v) => `${v} ans` },
  { key: "monthlyPayment",  label: "Mensualité",          format: euroFmt },
  { key: "totalInterest",   label: "Intérêts",            format: euroFmt },
  { key: "totalInsurance",  label: "Assurance",           format: euroFmt },
  { key: "totalCreditCost", label: "Coût total crédit",   format: euroFmt },
];

export default function OptimizationMultiDurationTable({
  scenarios,
  currentDuration,
}: OptimizationMultiDurationTableProps) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <h3
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--t-muted)" }}
      >
        Comparaison par durée
      </h3>

      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm min-w-105">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="px-2 pb-3 text-left text-xs font-medium uppercase tracking-wide whitespace-nowrap"
                  style={{ color: "var(--t-muted)" }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario, rowIdx) => {
              const isActive = scenario.durationYears === currentDuration;
              return (
                <motion.tr
                  key={scenario.durationYears}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: rowIdx * 0.06, duration: 0.3 }}
                  style={{
                    borderTop: "1px solid var(--bd-table-row)",
                    background: isActive ? "var(--bg-brand-dim)" : "transparent",
                  }}
                >
                  {COLUMNS.map((col) => (
                    <td
                      key={col.key}
                      className="px-2 py-3 tabular-nums whitespace-nowrap"
                      style={{
                        color:
                          col.key === "monthlyPayment"
                            ? "var(--t-brand)"
                            : col.key === "durationYears"
                            ? "var(--t-primary)"
                            : "var(--t-secondary)",
                        fontWeight:
                          col.key === "monthlyPayment" || isActive ? 600 : 400,
                      }}
                    >
                      {col.format(scenario[col.key] as number)}
                      {col.key === "durationYears" && isActive && (
                        <span
                          className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full"
                          style={{
                            background: "var(--bg-brand-medium)",
                            color: "var(--t-brand)",
                            border: "1px solid var(--bd-brand)",
                          }}
                        >
                          actuel
                        </span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "var(--t-faint)" }}>
        Augmenter la durée réduit la mensualité mais accroît le coût total du crédit.
      </p>
    </div>
  );
}
