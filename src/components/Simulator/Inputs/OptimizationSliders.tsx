"use client";

import { useEffect, useRef, useState } from "react";
import { OPTIMIZATION_SLIDER_LIMITS } from "@/lib/constants";
import type { OptimizationInputs } from "@/lib/calculator";

interface OptimizationSlidersProps {
  inputs: OptimizationInputs;
  onInputChange: (patch: Partial<OptimizationInputs>) => void;
  className?: string;
}

interface SliderConfig {
  label: string;
  field: keyof Pick<
    OptimizationInputs,
    | "loanAmount"
    | "apport"
    | "durationYears"
    | "annualInterestRate"
    | "annualInsuranceRate"
    | "salary"
  >;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  hint: string;
  optional?: boolean;
}

const SLIDERS: SliderConfig[] = [
  {
    label: "Capital emprunté",
    field: "loanAmount",
    ...OPTIMIZATION_SLIDER_LIMITS.loanAmount,
    format: (v) => v.toLocaleString("fr-FR") + " €",
    hint: "Montant du prêt que vous souhaitez contracter",
  },
  {
    label: "Durée du prêt",
    field: "durationYears",
    ...OPTIMIZATION_SLIDER_LIMITS.duration,
    format: (v) => `${v} ans`,
    hint: "Durée de remboursement",
  },
  {
    label: "Taux d'intérêt nominal",
    field: "annualInterestRate",
    ...OPTIMIZATION_SLIDER_LIMITS.interestRate,
    format: (v) => v.toFixed(2) + " %",
    hint: "Taux hors assurance",
  },
  {
    label: "Taux d'assurance",
    field: "annualInsuranceRate",
    ...OPTIMIZATION_SLIDER_LIMITS.insuranceRate,
    format: (v) => v.toFixed(2) + " %",
    hint: "Taux annuel sur capital emprunté",
  },
  {
    label: "Apport personnel",
    field: "apport",
    ...OPTIMIZATION_SLIDER_LIMITS.apport,
    format: (v) => v.toLocaleString("fr-FR") + " €",
    hint: "Montant incluant les frais de notaire",
  },
  {
    label: "Salaire net mensuel",
    field: "salary",
    ...OPTIMIZATION_SLIDER_LIMITS.salary,
    format: (v) => v.toLocaleString("fr-FR") + " €",
    hint: "Optionnel — pour vérifier votre taux d'endettement HCSF",
    optional: true,
  },
];

function EditableValue({
  value,
  format,
  min,
  max,
  step,
  onChange,
}: {
  value: number;
  format: (v: number) => string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [editing]);

  const commit = (rawStr: string) => {
    const parsed = parseFloat(rawStr.replace(",", "."));
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed));
      const snapped = parseFloat((Math.round(clamped / step) * step).toFixed(10));
      onChange(snapped);
    }
    setEditing(false);
  };

  const sharedStyle: React.CSSProperties = {
    color: "var(--t-brand)",
    background: "var(--bg-brand-dim)",
    border: "1px solid var(--bd-brand)",
    height: "1.75rem",
    width: "6rem",
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        type="number"
        value={raw}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setRaw(e.target.value)}
        onBlur={() => commit(raw)}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.currentTarget.blur();
          if (e.key === "Escape") setEditing(false);
        }}
        className="text-sm font-bold tabular-nums text-right rounded-lg px-2 no-spinner"
        style={{ ...sharedStyle, outline: "none" }}
      />
    );
  }

  return (
    <button
      onClick={() => { setRaw(String(value)); setEditing(true); }}
      className="text-sm font-bold tabular-nums rounded-lg px-2 flex items-center justify-end transition-opacity duration-150 cursor-text"
      style={sharedStyle}
      title="Cliquer pour modifier"
    >
      {format(value)}
    </button>
  );
}

export default function OptimizationSliders({
  inputs,
  onInputChange,
  className = "",
}: OptimizationSlidersProps) {
  return (
    <div className={`glass rounded-2xl p-6 flex flex-col gap-4 ${className}`}>
      <h2
        className="text-base font-semibold tracking-tight"
        style={{ color: "var(--t-secondary)" }}
      >
        Paramètres du prêt
      </h2>

      {SLIDERS.map(({ label, field, min, max, step, format, hint, optional }) => {
        const value = inputs[field] as number;
        const pct = ((value - min) / (max - min)) * 100;

        return (
          <div key={field} className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <label
                  htmlFor={`opt-slider-${field}`}
                  className="text-sm font-medium"
                  style={{ color: "var(--t-secondary)" }}
                >
                  {label}
                </label>
                {optional && (
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full shrink-0"
                    style={{
                      background: "var(--bg-brand-dim)",
                      color: "var(--t-muted)",
                      border: "1px solid var(--bd-brand-dim)",
                    }}
                  >
                    optionnel
                  </span>
                )}
              </div>
              <EditableValue
                value={value}
                format={format}
                min={min}
                max={max}
                step={step}
                onChange={(v) => onInputChange({ [field]: v })}
              />
            </div>

            <div className="relative h-2 flex items-center">
              <div
                className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none"
                style={{ background: "var(--slider-track)" }}
              />
              <div
                className="absolute left-0 top-0 h-full rounded-full pointer-events-none"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(to right, #003d2b, #268e6b)",
                }}
              />
              <input
                id={`opt-slider-${field}`}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) =>
                  onInputChange({ [field]: parseFloat(e.target.value) })
                }
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                style={{ height: "2rem", top: "50%", transform: "translateY(-50%)", touchAction: "none" }}
              />
              <div
                className="absolute w-5 h-5 rounded-full pointer-events-none"
                style={{
                  left: `calc(${pct}% - 0.625rem)`,
                  background: "#003d2b",
                  border: "2px solid #80c0aa",
                  boxShadow: "0 4px 12px rgba(0,61,43,0.5)",
                  zIndex: 10,
                }}
              />
            </div>

            <p className="text-xs" style={{ color: "var(--t-muted)" }}>
              {hint}
            </p>
          </div>
        );
      })}
    </div>
  );
}
