"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, Link } from "lucide-react";
import { simulate, simulateMultipleDurations } from "@/lib/calculator";
import type { SimulatorInputs } from "@/lib/calculator";
import { buildShareURL, pushToURL } from "@/lib/url-serializer";
import { COMPARISON_DURATIONS } from "@/lib/constants";

import InteractiveSliders from "./Inputs/InteractiveSliders";
import ProjectToggle from "./Inputs/ProjectToggle";
import Dashboard from "./Results/Dashboard";
import HCSFGauge from "./Results/HCSFGauge";
import MultiDurationTable from "./Results/MultiDurationTable";

interface EngineProps {
  initialInputs: SimulatorInputs;
}

export default function Engine({ initialInputs }: EngineProps) {
  const [inputs, setInputs] = useState<SimulatorInputs>(initialInputs);
  const [copied, setCopied] = useState(false);

  const updateInputs = useCallback((patch: Partial<SimulatorInputs>) => {
    setInputs((prev) => ({ ...prev, ...patch }));
  }, []);

  useEffect(() => {
    pushToURL(inputs);
  }, [inputs]);

  const handleShare = useCallback(() => {
    const url = buildShareURL(inputs);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [inputs]);

  const results = useMemo(() => simulate(inputs), [inputs]);
  const multiScenarios = useMemo(
    () => simulateMultipleDurations(inputs, COMPARISON_DURATIONS),
    [inputs]
  );

  return (
    <div className="flex flex-col gap-5 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-6xl mx-auto px-4 items-start">
        {/* Left column - inputs. On mobile, displayed second (order-2) so results appear first */}
        <div className="order-2 lg:order-1 flex flex-col gap-4 lg:sticky lg:top-16">
          <InteractiveSliders
            inputs={inputs}
            onInputChange={updateInputs}
          />
          <ProjectToggle
            value={inputs.propertyType}
            onChange={(propertyType) => updateInputs({ propertyType })}
          />
        </div>

        {/* Right column - results. On mobile, displayed first (order-1) */}
        <div className="order-1 lg:order-2 flex flex-col gap-4">
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

      <div className=" px-4 items-start">
        <div
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between"
        >
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
