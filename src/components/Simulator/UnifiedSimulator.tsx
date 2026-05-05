"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Link } from "lucide-react";

import type { SimulatorInputs, OptimizationInputs } from "@/lib/calculator";
import {
  simulate,
  simulateMultipleDurations,
  optimizeLoan,
  optimizeLoanMultipleDurations,
} from "@/lib/calculator";
import { buildShareURL, buildOptimizationShareURL } from "@/lib/url-serializer";
import { COMPARISON_DURATIONS } from "@/lib/constants";

import InteractiveSliders from "./Inputs/InteractiveSliders";
import OptimizationSliders from "./Inputs/OptimizationSliders";
import ProjectToggle from "./Inputs/ProjectToggle";
import UnifiedDashboard from "./Results/UnifiedDashboard";
import HCSFGauge from "./Results/HCSFGauge";
import MultiDurationTable from "./Results/MultiDurationTable";
import OptimizationMultiDurationTable from "./Results/OptimizationMultiDurationTable";

type Mode = "capacity" | "optimization";

interface UnifiedSimulatorProps {
  mode: Mode;
  capacityInputs: SimulatorInputs;
  optInputs: OptimizationInputs;
  onCapacityChange: (patch: Partial<SimulatorInputs>) => void;
  onOptChange: (patch: Partial<OptimizationInputs>) => void;
}

export default function UnifiedSimulator({
  mode,
  capacityInputs,
  optInputs,
  onCapacityChange,
  onOptChange,
}: UnifiedSimulatorProps) {
  const [copied, setCopied] = useState(false);

  // Deferred for non-blocking slider updates
  const deferredCap = useDeferredValue(capacityInputs);
  const deferredOpt = useDeferredValue(optInputs);

  // Both results always computed (pure math, negligible cost)
  const capResults   = useMemo(() => simulate(deferredCap), [deferredCap]);
  const optResults   = useMemo(() => optimizeLoan(deferredOpt), [deferredOpt]);
  const capScenarios = useMemo(() => simulateMultipleDurations(deferredCap, COMPARISON_DURATIONS), [deferredCap]);
  const optScenarios = useMemo(() => optimizeLoanMultipleDurations(deferredOpt, COMPARISON_DURATIONS), [deferredOpt]);

  const activeSalary      = mode === "capacity" ? capacityInputs.salary      : optInputs.salary;
  const activeDebtRatio   = mode === "capacity" ? capResults.debtRatio       : optResults.debtRatio;
  const activeExceedsHCSF = mode === "capacity" ? capResults.exceedsHCSF     : optResults.exceedsHCSF;
  const activeMonthly     = mode === "capacity" ? capResults.monthlyPayment  : optResults.monthlyPayment;

  const handleShare = () => {
    const url = mode === "capacity"
      ? buildShareURL(capacityInputs)
      : buildOptimizationShareURL(optInputs);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const activePropertyType = mode === "capacity" ? capacityInputs.propertyType : optInputs.propertyType;

  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 items-start">

        {/* ── LEFT: only sliders animate on mode change ── */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-16">
          <AnimatePresence mode="wait">
            {mode === "capacity" ? (
              <motion.div
                key="sliders-cap"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <InteractiveSliders inputs={capacityInputs} onInputChange={onCapacityChange} />
              </motion.div>
            ) : (
              <motion.div
                key="sliders-opt"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <OptimizationSliders inputs={optInputs} onInputChange={onOptChange} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ProjectToggle stays mounted — just updates value */}
          <ProjectToggle
            value={activePropertyType}
            onChange={(propertyType) =>
              mode === "capacity"
                ? onCapacityChange({ propertyType })
                : onOptChange({ propertyType })
            }
          />
        </div>

        {/* ── RIGHT: always mounted, only mode-specific bottom card + table animate ── */}
        <div className="flex flex-col gap-4">
          {/* Unified dashboard: all 5 common cards stay mounted */}
          <UnifiedDashboard
            mode={mode}
            capResults={capResults}
            optResults={optResults}
            loanAmount={optInputs.loanAmount}
          />

          {/* HCSFGauge: stays mounted while salary > 0 */}
          {activeSalary > 0 && (
            <HCSFGauge
              debtRatio={activeDebtRatio}
              exceedsHCSF={activeExceedsHCSF}
              monthlyPayment={activeMonthly}
              salary={activeSalary}
            />
          )}

          {/* Duration table: swaps on mode change (different columns) */}
          <AnimatePresence mode="wait">
            {mode === "capacity" ? (
              <motion.div
                key="table-cap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MultiDurationTable
                  scenarios={capScenarios}
                  targetDebtRatio={capacityInputs.targetDebtRatio}
                />
              </motion.div>
            ) : (
              <motion.div
                key="table-opt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <OptimizationMultiDurationTable
                  scenarios={optScenarios}
                  currentDuration={optInputs.durationYears}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Share button: stays mounted, only URL changes */}
      <div className="px-4">
        <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-base font-semibold" style={{ color: "var(--t-primary)" }}>
              Partager cette simulation
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Copiez le lien pour retrouver ou envoyer vos paramètres — toutes vos données
              sont encodées dans l&apos;URL, rien n&apos;est envoyé à un serveur.
            </p>
          </div>
          <button
            onClick={handleShare}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all duration-200"
            style={{
              background: copied ? "var(--bg-brand-medium)" : "var(--bg-brand-dim)",
              border: "1px solid var(--bd-brand)",
              color: copied ? "var(--t-primary)" : "var(--t-brand)",
            }}
          >
            {copied ? <Check size={16} /> : <Link size={16} />}
            {copied ? "Lien copié !" : "Copier le lien"}
          </button>
        </div>
      </div>
    </div>
  );
}
