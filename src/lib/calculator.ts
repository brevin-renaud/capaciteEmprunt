import { HCSF_MAX_DEBT_RATIO, NOTARY_FEES_RATE } from "./constants";

// ── Types ──────────────────────────────────────────────────────────────────

export type PropertyType = "new" | "old";

export interface SimulatorInputs {
  salary: number;
  apport: number;
  durationYears: number;
  annualInterestRate: number;
  annualInsuranceRate: number;
  propertyType: PropertyType;
  targetDebtRatio: number; // integer percentage, e.g. 35 means 35%
}

export interface SimulatorResults {
  maxMonthlyPayment: number;
  notaryFees: number;
  netContribution: number;
  loanCapacity: number;
  totalBudget: number;
  totalInterest: number;
  totalInsurance: number;
  debtRatio: number;
  exceedsHCSF: boolean;
  monthlyPayment: number;
}

export interface DurationScenario {
  durationYears: number;
  loanCapacity: number;
  totalBudget: number;
  monthlyPayment: number;
  totalInterest: number;
  totalInsurance: number;
}

// ── Primitive math functions ───────────────────────────────────────────────

export function monthlyRate(annualRatePct: number): number {
  return annualRatePct / 12 / 100;
}

export function totalPayments(durationYears: number): number {
  return durationYears * 12;
}

/**
 * Classic annuity formula: maximum borrowable capital P for a given
 * monthly payment M, monthly rate r, and n periods.
 * P = M × [1 − (1+r)^(−n)] / r
 * Special case r=0: P = M × n
 */
export function computeLoanCapacity(
  maxMonthlyPayment: number,
  annualRatePct: number,
  durationYears: number
): number {
  const r = monthlyRate(annualRatePct);
  const n = totalPayments(durationYears);
  if (r === 0) return maxMonthlyPayment * n;
  return (maxMonthlyPayment * (1 - Math.pow(1 + r, -n))) / r;
}

export function computeTotalInterest(
  monthlyPayment: number,
  durationYears: number,
  loanCapacity: number
): number {
  return monthlyPayment * totalPayments(durationYears) - loanCapacity;
}

export function computeTotalInsurance(
  loanCapacity: number,
  annualInsuranceRatePct: number,
  durationYears: number
): number {
  return loanCapacity * (annualInsuranceRatePct / 100) * durationYears;
}

export function computeNotaryFees(
  apport: number,
  propertyType: PropertyType
): number {
  return apport * NOTARY_FEES_RATE[propertyType];
}

export function computeDebtRatio(
  monthlyPayment: number,
  salary: number
): number {
  if (salary <= 0) return 0;
  return monthlyPayment / salary;
}

// ── Orchestrators ──────────────────────────────────────────────────────────

export function simulate(inputs: SimulatorInputs): SimulatorResults {
  const {
    salary,
    apport,
    durationYears,
    annualInterestRate,
    annualInsuranceRate,
    propertyType,
    targetDebtRatio,
  } = inputs;

  const maxMonthlyPayment = salary * (targetDebtRatio / 100);
  const notaryFees = computeNotaryFees(apport, propertyType);
  const netContribution = Math.max(0, apport - notaryFees);
  const loanCapacity = computeLoanCapacity(
    maxMonthlyPayment,
    annualInterestRate,
    durationYears
  );
  const totalBudget = loanCapacity + netContribution;
  const totalInterest = computeTotalInterest(
    maxMonthlyPayment,
    durationYears,
    loanCapacity
  );
  const totalInsurance = computeTotalInsurance(
    loanCapacity,
    annualInsuranceRate,
    durationYears
  );
  const debtRatio = computeDebtRatio(maxMonthlyPayment, salary);
  const exceedsHCSF = debtRatio > HCSF_MAX_DEBT_RATIO;

  return {
    maxMonthlyPayment,
    notaryFees,
    netContribution,
    loanCapacity,
    totalBudget,
    totalInterest,
    totalInsurance,
    debtRatio,
    exceedsHCSF,
    monthlyPayment: maxMonthlyPayment,
  };
}

export function simulateMultipleDurations(
  inputs: SimulatorInputs,
  durations: ReadonlyArray<number>
): DurationScenario[] {
  return durations.map((durationYears) =>
    simulateForDuration({ ...inputs, durationYears })
  );
}

function simulateForDuration(inputs: SimulatorInputs): DurationScenario {
  const {
    salary,
    apport,
    durationYears,
    annualInterestRate,
    annualInsuranceRate,
    propertyType,
  } = inputs;

  const maxMonthlyPayment = salary * (inputs.targetDebtRatio / 100);
  const notaryFees = computeNotaryFees(apport, propertyType);
  const netContribution = Math.max(0, apport - notaryFees);
  const loanCapacity = computeLoanCapacity(
    maxMonthlyPayment,
    annualInterestRate,
    durationYears
  );
  const totalBudget = loanCapacity + netContribution;
  const totalInterest = computeTotalInterest(
    maxMonthlyPayment,
    durationYears,
    loanCapacity
  );
  const totalInsurance = computeTotalInsurance(
    loanCapacity,
    annualInsuranceRate,
    durationYears
  );

  return {
    durationYears,
    loanCapacity,
    totalBudget,
    monthlyPayment: maxMonthlyPayment,
    totalInterest,
    totalInsurance,
  };
}
