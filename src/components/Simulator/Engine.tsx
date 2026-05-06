"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Check, Link } from "lucide-react";
import { simulate, simulateMultipleDurations } from "@/lib/calculator";
import type { SimulatorInputs } from "@/lib/calculator";
import { buildShareURL } from "@/lib/url-serializer";
import { COMPARISON_DURATIONS } from "@/lib/constants";

import InteractiveSliders from "./Inputs/InteractiveSliders";
import ProjectToggle from "./Inputs/ProjectToggle";
import Dashboard from "./Results/Dashboard";
import HCSFGauge from "./Results/HCSFGauge";
import MultiDurationTable from "./Results/MultiDurationTable";

interface EngineProps {
  inputs: SimulatorInputs;
  onInputChange: (patch: Partial<SimulatorInputs>) => void;
}

export default function Engine({ inputs, onInputChange }: EngineProps) {
  const [copied, setCopied] = useState(false);
  const replaceStateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (replaceStateTimer.current) clearTimeout(replaceStateTimer.current);
    replaceStateTimer.current = setTimeout(() => {
      window.history.replaceState(null, "", "/simulateur");
    }, 300);
    return () => {
      if (replaceStateTimer.current) clearTimeout(replaceStateTimer.current);
    };
  }, [inputs]);

  const handleShare = () => {
    const url = buildShareURL(inputs);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const deferredInputs = useDeferredValue(inputs);
  const results = useMemo(() => simulate(deferredInputs), [deferredInputs]);
  const multiScenarios = useMemo(
    () => simulateMultipleDurations(deferredInputs, COMPARISON_DURATIONS),
    [deferredInputs]
  );

  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-6xl mx-auto px-4 items-start">
        <div className="flex flex-col gap-4 lg:sticky lg:top-16">
          <InteractiveSliders inputs={inputs} onInputChange={onInputChange} />
          <ProjectToggle
            value={inputs.propertyType}
            onChange={(propertyType) => onInputChange({ propertyType })}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Dashboard results={results} />
          <HCSFGauge
            debtRatio={results.debtRatio}
            exceedsHCSF={results.exceedsHCSF}
            monthlyPayment={results.monthlyPayment}
            salary={inputs.salary}
          />
          <MultiDurationTable scenarios={multiScenarios} targetDebtRatio={inputs.targetDebtRatio} />
        </div>
      </div>

      <div className="px-4">
        <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-base font-semibold" style={{ color: "var(--t-primary)" }}>
              Partager cette simulation
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Copiez le lien pour retrouver ou envoyer vos paramètres - toutes vos données
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
