"use client";

import { motion } from "framer-motion";
import type { DurationScenario } from "@/lib/calculator";

interface MultiDurationTableProps {
  scenarios: DurationScenario[];
  targetDebtRatio: number;
}

const euroFmt = (v: number) =>
  v.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

type ScenarioKey = keyof DurationScenario;

const COLUMNS: { key: ScenarioKey; label: string; format: (v: number) => string }[] = [
  { key: "durationYears", label: "Durée", format: (v) => `${v} ans` },
  { key: "monthlyPayment", label: "Mensualité", format: euroFmt },
  { key: "loanCapacity", label: "Capacité prêt", format: euroFmt },
  { key: "totalBudget", label: "Budget total", format: euroFmt },
  { key: "totalInterest", label: "Coût intérêts", format: euroFmt },
];

export default function MultiDurationTable({ scenarios, targetDebtRatio }: MultiDurationTableProps) {
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
            {scenarios.map((scenario, rowIdx) => (
              <motion.tr
                key={scenario.durationYears}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIdx * 0.06, duration: 0.3 }}
                className="group"
                style={{ borderTop: "1px solid var(--bd-table-row)" }}
              >
                {COLUMNS.map((col) => (
                  <td
                    key={col.key}
                    className="px-2 py-3 tabular-nums whitespace-nowrap"
                    style={{
                      color:
                        col.key === "totalBudget"
                          ? "var(--t-brand)"
                          : col.key === "durationYears"
                            ? "var(--t-primary)"
                            : "var(--t-secondary)",
                      fontWeight: col.key === "totalBudget" ? 600 : 400,
                    }}
                  >
                    {col.format(scenario[col.key] as number)}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "var(--t-faint)" }}>
        La mensualité est identique sur toutes les durées car elle est plafonnée à{" "}
        {targetDebtRatio} % du salaire net - la durée influence la capacité d&apos;emprunt
        et le coût total.
      </p>
      <p className="text-xs leading-relaxed flex items-start gap-1.5" style={{ color: "var(--t-faint)" }}>
        Les taux d'intérêt réels varient selon la durée du prêt : les banques
        appliquent généralement des taux plus élevés sur les longues durées (20-25 ans)
        que sur les courtes (10-15 ans). Les valeurs ci-dessus utilisent le même taux
        pour simplifier la comparaison.
      </p>
    </div>
  );
}
