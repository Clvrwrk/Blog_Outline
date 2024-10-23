export const WORD_COUNT_LIMITS = {
  MIN: import.meta.env.VITE_MIN_WORD_COUNT || 3000,
  MAX: import.meta.env.VITE_MAX_WORD_COUNT || 5000,
  DEFAULT_COMPLEXITY_FACTOR: 250,
  DEFAULT_DEPTH_FACTOR: 250,
};

export const SECTION_RATIOS = {
  INTRODUCTION: 0.15,
  MAIN_BODY: 0.70,
  CONCLUSION: 0.15,
};

export const DEFAULT_VALUES = {
  COMPLEXITY: 3,
  DEPTH: 3,
  TECHNICAL_LEVEL: 3,
  INDUSTRY_KNOWLEDGE: 3,
  VOCABULARY_TIER: '2',
  RECENCY_THRESHOLD: '1',
};

export const VOCABULARY_TIERS = {
  GENERAL: '1',
  PROFESSIONAL: '2',
  TECHNICAL: '3',
} as const;

export const APPLICATION_INTENTS = {
  INFORMATION: 'information',
  PROBLEM_SOLVING: 'problem-solving',
  DECISION_MAKING: 'decision-making',
  SKILL_DEVELOPMENT: 'skill-development',
} as const;