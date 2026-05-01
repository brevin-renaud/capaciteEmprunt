import LZString from "lz-string";
import { DEFAULTS, SCHEMA_VERSION, URL_KEYS } from "./constants";
import type { PropertyType, SimulatorInputs } from "./calculator";

type RawParams = Partial<Record<string, string>>;

// ── Encoding helpers ───────────────────────────────────────────────────────

function encodeInt(n: number): string {
  return Math.round(n).toString(36);
}

function decodeInt(s: string | undefined, fallback: number): number {
  if (!s) return fallback;
  const parsed = parseInt(s, 36);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function encodeFloat(n: number, precision = 100): string {
  return Math.round(n * precision).toString(36);
}

function decodeFloat(
  s: string | undefined,
  fallback: number,
  precision = 100
): number {
  if (!s) return fallback;
  const parsed = parseInt(s, 36);
  return Number.isFinite(parsed) ? parsed / precision : fallback;
}

// ── Public API ─────────────────────────────────────────────────────────────

export function serializeToParams(inputs: SimulatorInputs): URLSearchParams {
  const params = new URLSearchParams();
  params.set(URL_KEYS.version,         SCHEMA_VERSION.toString());
  params.set(URL_KEYS.salary,          encodeInt(inputs.salary));
  params.set(URL_KEYS.apport,          encodeInt(inputs.apport));
  params.set(URL_KEYS.duration,        encodeInt(inputs.durationYears));
  params.set(URL_KEYS.interestRate,    encodeFloat(inputs.annualInterestRate));
  params.set(URL_KEYS.insuranceRate,   encodeFloat(inputs.annualInsuranceRate, 1000));
  params.set(URL_KEYS.propertyType,    inputs.propertyType);
  params.set(URL_KEYS.targetDebtRatio, encodeInt(inputs.targetDebtRatio));
  return params;
}

export function deserializeFromParams(raw: RawParams): SimulatorInputs {
  const typ = raw[URL_KEYS.propertyType];
  const propertyType: PropertyType =
    typ === "new" || typ === "old" ? typ : DEFAULTS.propertyType;

  return {
    salary:             decodeInt(raw[URL_KEYS.salary],           DEFAULTS.salary),
    apport:             decodeInt(raw[URL_KEYS.apport],           DEFAULTS.apport),
    durationYears:      decodeInt(raw[URL_KEYS.duration],         DEFAULTS.duration),
    annualInterestRate: decodeFloat(raw[URL_KEYS.interestRate],   DEFAULTS.interestRate),
    annualInsuranceRate:decodeFloat(raw[URL_KEYS.insuranceRate],  DEFAULTS.insuranceRate, 1000),
    targetDebtRatio:    decodeInt(raw[URL_KEYS.targetDebtRatio],  DEFAULTS.targetDebtRatio),
    propertyType,
  };
}

/**
 * Push current state to the URL bar without creating a history entry.
 * Keeps the displayed URL clean (/simulateur) - use buildShareURL() to get the
 * full shareable link with encoded state.
 */
export function pushToURL(_inputs: SimulatorInputs): void {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", "/simulateur");
}

/** Returns the full shareable URL with all inputs encoded as query params. */
export function buildShareURL(inputs: SimulatorInputs): string {
  if (typeof window === "undefined") return "";
  const params = serializeToParams(inputs);
  return `${window.location.origin}/simulateur?${params.toString()}`;
}

// ── LZ-String compressed variant (forward-compat for future schema growth) ─

export function serializeCompressed(inputs: SimulatorInputs): string {
  return LZString.compressToEncodedURIComponent(JSON.stringify(inputs));
}

export function deserializeCompressed(encoded: string): SimulatorInputs | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    const parsed = JSON.parse(json) as unknown;
    if (typeof parsed === "object" && parsed !== null && "salary" in parsed) {
      return parsed as SimulatorInputs;
    }
    return null;
  } catch {
    return null;
  }
}
