export const SCHEMA_VERSION = 1;

export const HCSF_MAX_DEBT_RATIO = 0.35;

export const NOTARY_FEES_RATE = {
  new: 0.025,
  old: 0.075,
} as const;

export const DEFAULT_INSURANCE_RATE = 0.36;
export const DEFAULT_INTEREST_RATE = 3.5;

export const SLIDER_LIMITS = {
  salary:       { min: 0,      max: 50_000,  step: 100  },
  apport:       { min: 0,      max: 800_000, step: 1_000 },
  duration:     { min: 10,     max: 25,      step: 5    },
  interestRate: { min: 0.5,    max: 7.0,     step: 0.05 },
  insuranceRate:{ min: 0.1,    max: 1.0,     step: 0.01 },
  debtRatio:    { min: 10,     max: 35,      step: 1    },
} as const;

export const OPTIMIZATION_SLIDER_LIMITS = {
  loanAmount:   { min: 10_000,  max: 1_000_000, step: 5_000 },
  apport:       { min: 0,       max: 800_000,   step: 1_000 },
  duration:     { min: 5,       max: 30,        step: 1     },
  interestRate: { min: 0.5,     max: 7.0,       step: 0.05  },
  insuranceRate:{ min: 0.1,     max: 1.0,       step: 0.01  },
  salary:       { min: 0,       max: 50_000,    step: 100   },
} as const;

export const OPTIMIZATION_DEFAULTS = {
  loanAmount:   200_000,
  apport:       30_000,
  duration:     20,
  interestRate: DEFAULT_INTEREST_RATE,
  insuranceRate: DEFAULT_INSURANCE_RATE,
  propertyType: "old" as const,
  salary:       3_500,
} as const;

export const OPTIMIZATION_URL_KEYS = {
  mode:       "m",
  loanAmount: "la",
  salary:     "os",
} as const;

export const COMPARISON_DURATIONS: ReadonlyArray<number> = [15, 20, 25];

export const DEFAULTS = {
  salary:          3_500,
  apport:          20_000,
  duration:        20,
  interestRate:    DEFAULT_INTEREST_RATE,
  insuranceRate:   DEFAULT_INSURANCE_RATE,
  propertyType:    "old" as const,
  targetDebtRatio: 35,
} as const;

export const URL_KEYS = {
  version:         "v",
  salary:          "sal",
  apport:          "app",
  duration:        "dur",
  interestRate:    "tx",
  insuranceRate:   "ins",
  propertyType:    "typ",
  targetDebtRatio: "dr",
} as const;
