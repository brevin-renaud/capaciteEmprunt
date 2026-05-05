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

export interface OptimizationInputs {
  loanAmount: number;
  apport: number;
  durationYears: number;
  annualInterestRate: number;
  annualInsuranceRate: number;
  propertyType: PropertyType;
  salary: number; // used for HCSF check; 0 to skip
}

export interface OptimizationResults {
  monthlyPayment: number;
  totalInterest: number;
  totalInsurance: number;
  totalCreditCost: number;
  notaryFees: number;
  netContribution: number;
  totalBudget: number;
  debtRatio: number;
  exceedsHCSF: boolean;
}

export interface OptimizationScenario {
  durationYears: number;
  monthlyPayment: number;
  totalInterest: number;
  totalInsurance: number;
  totalCreditCost: number;
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

/**
 * Reverse annuity: monthly payment M for a known loan amount P.
 * M = P × r / [1 − (1+r)^(−n)]
 * Special case r=0: M = P / n
 */
export function computeMonthlyPayment(
  loanAmount: number,
  annualRatePct: number,
  durationYears: number
): number {
  const r = monthlyRate(annualRatePct);
  const n = totalPayments(durationYears);
  if (r === 0) return loanAmount / n;
  return (loanAmount * r) / (1 - Math.pow(1 + r, -n));
}

export function computeTotalInterest(
  monthlyPayment: number,
  durationYears: number,
  loanCapacity: number
): number {
  return Math.max(0, monthlyPayment * totalPayments(durationYears) - loanCapacity);
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

// ── Mode 1: Capacité d'emprunt ─────────────────────────────────────────────

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

// ── Mode 2: Optimisation du prêt ──────────────────────────────────────────

export function optimizeLoan(inputs: OptimizationInputs): OptimizationResults {
  const {
    loanAmount,
    apport,
    durationYears,
    annualInterestRate,
    annualInsuranceRate,
    propertyType,
    salary,
  } = inputs;

  const monthlyPayment = computeMonthlyPayment(loanAmount, annualInterestRate, durationYears);
  const totalInterest = computeTotalInterest(monthlyPayment, durationYears, loanAmount);
  const totalInsurance = computeTotalInsurance(loanAmount, annualInsuranceRate, durationYears);
  const totalCreditCost = totalInterest + totalInsurance;
  const notaryFees = computeNotaryFees(apport, propertyType);
  const netContribution = Math.max(0, apport - notaryFees);
  const totalBudget = loanAmount + netContribution;
  const debtRatio = salary > 0 ? computeDebtRatio(monthlyPayment, salary) : 0;
  const exceedsHCSF = salary > 0 && debtRatio > HCSF_MAX_DEBT_RATIO;

  return {
    monthlyPayment,
    totalInterest,
    totalInsurance,
    totalCreditCost,
    notaryFees,
    netContribution,
    totalBudget,
    debtRatio,
    exceedsHCSF,
  };
}

export function optimizeLoanMultipleDurations(
  inputs: OptimizationInputs,
  durations: ReadonlyArray<number>
): OptimizationScenario[] {
  return durations.map((durationYears) => {
    const { loanAmount, annualInterestRate, annualInsuranceRate } = inputs;
    const monthlyPayment = computeMonthlyPayment(loanAmount, annualInterestRate, durationYears);
    const totalInterest = computeTotalInterest(monthlyPayment, durationYears, loanAmount);
    const totalInsurance = computeTotalInsurance(loanAmount, annualInsuranceRate, durationYears);
    return {
      durationYears,
      monthlyPayment,
      totalInterest,
      totalInsurance,
      totalCreditCost: totalInterest + totalInsurance,
    };
  });
}
