"use client";

import { useEffect, useRef, useState } from "react";
import { Calculator, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import type { SimulatorInputs, OptimizationInputs } from "@/lib/calculator";
import { simulate } from "@/lib/calculator";
import { OPTIMIZATION_SLIDER_LIMITS, SLIDER_LIMITS } from "@/lib/constants";
import UnifiedSimulator from "./UnifiedSimulator";

type Mode = "capacity" | "optimization";

interface SimulatorTabsProps {
  initialMode: Mode;
  initialCapacityInputs: SimulatorInputs;
  initialOptimizationInputs: OptimizationInputs;
}

const TABS = [
  {
    id: "capacity" as Mode,
    icon: <Calculator size={15} />,
    label: "Capacité d'emprunt",
    sublabel: "Partir du salaire",
  },
  {
    id: "optimization" as Mode,
    icon: <SlidersHorizontal size={15} />,
    label: "Optimiser mon prêt",
    sublabel: "Partir du capital",
  },
];

function snapLoanAmount(v: number): number {
  const { min, max, step } = OPTIMIZATION_SLIDER_LIMITS.loanAmount;
  return Math.min(max, Math.max(min, Math.round(v / step) * step));
}

function snapCapacityDuration(years: number): number {
  const { min, max, step } = SLIDER_LIMITS.duration;
  return Math.round(Math.min(max, Math.max(min, years)) / step) * step;
}

export default function SimulatorTabs({
  initialMode,
  initialCapacityInputs,
  initialOptimizationInputs,
}: SimulatorTabsProps) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [capacityInputs, setCapacityInputs] = useState<SimulatorInputs>(initialCapacityInputs);
  const [optInputs, setOptInputs] = useState<OptimizationInputs>(initialOptimizationInputs);
  const replaceStateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep URL clean — debounced to avoid hitting the browser's replaceState rate limit
  // on mobile when sliders fire many events per second during fast scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (replaceStateTimer.current) clearTimeout(replaceStateTimer.current);
    replaceStateTimer.current = setTimeout(() => {
      window.history.replaceState(null, "", "/simulateur");
    }, 300);
    return () => {
      if (replaceStateTimer.current) clearTimeout(replaceStateTimer.current);
    };
  }, [capacityInputs, optInputs]);

  const updateCapacity = (patch: Partial<SimulatorInputs>) =>
    setCapacityInputs((prev) => ({ ...prev, ...patch }));

  const updateOpt = (patch: Partial<OptimizationInputs>) =>
    setOptInputs((prev) => ({ ...prev, ...patch }));

  const switchMode = (newMode: Mode) => {
    if (newMode === mode) return;

    if (newMode === "optimization") {
      const results = simulate(capacityInputs);
      setOptInputs((prev) => ({
        ...prev,
        loanAmount: snapLoanAmount(results.loanCapacity),
        apport: capacityInputs.apport,
        durationYears: capacityInputs.durationYears,
        annualInterestRate: capacityInputs.annualInterestRate,
        annualInsuranceRate: capacityInputs.annualInsuranceRate,
        propertyType: capacityInputs.propertyType,
        salary: capacityInputs.salary,
      }));
    } else {
      setCapacityInputs((prev) => ({
        ...prev,
        apport: optInputs.apport,
        durationYears: snapCapacityDuration(optInputs.durationYears),
        annualInterestRate: optInputs.annualInterestRate,
        annualInsuranceRate: optInputs.annualInsuranceRate,
        propertyType: optInputs.propertyType,
        salary: optInputs.salary,
      }));
    }

    setMode(newMode);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Tab switcher — layoutId spring pill like ProjectToggle */}
      <div className="flex flex-col items-center gap-4 px-4">
        <div
          className="relative flex rounded-2xl p-1.5"
          style={{ background: "var(--bg-brand-dim)", border: "1px solid var(--bd-brand)" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => switchMode(tab.id)}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl z-10 cursor-pointer"
            >
              {mode === tab.id && (
                <motion.div
                  layoutId="sim-tab-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "var(--bg-brand-medium)",
                    border: "1px solid var(--bd-brand)",
                    boxShadow: "0 4px 16px rgba(0,61,43,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className="relative z-10"
                style={{
                  color: mode === tab.id ? "var(--t-brand)" : "var(--t-muted)",
                  opacity: mode === tab.id ? 1 : 0.6,
                }}
              >
                {tab.icon}
              </span>
              <div className="relative z-10 text-left">
                <div
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: mode === tab.id ? "var(--t-brand)" : "var(--t-muted)" }}
                >
                  {tab.label}
                </div>
                <div
                  className="text-xs opacity-60 hidden sm:block"
                  style={{ color: mode === tab.id ? "var(--t-brand)" : "var(--t-muted)" }}
                >
                  {tab.sublabel}
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-sm text-center max-w-md" style={{ color: "var(--t-muted)" }}>
          {mode === "capacity"
            ? "Indiquez votre salaire pour calculer combien vous pouvez emprunter, votre budget total et la mensualité correspondante."
            : "Vous connaissez déjà votre capacité d'emprunt ? Entrez le capital souhaité et optimisez durée, taux et apport pour trouver les meilleures conditions."}
        </p>
      </div>

      {/* Unified simulator — stays mounted, no full remount on mode change */}
      <UnifiedSimulator
        mode={mode}
        capacityInputs={capacityInputs}
        optInputs={optInputs}
        onCapacityChange={updateCapacity}
        onOptChange={updateOpt}
      />
    </div>
  );
}
