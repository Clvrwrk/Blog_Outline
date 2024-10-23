export const API_ENDPOINTS = {
  WEBHOOK: import.meta.env.VITE_WEBHOOK_URL || 'https://hook.make.com/your-webhook-endpoint',
} as const;

export const TIMEOUTS = {
  WEBHOOK: Number(import.meta.env.VITE_WEBHOOK_TIMEOUT) || 30000,
} as const;

export const DEBUG = {
  ENABLED: import.meta.env.VITE_ENABLE_DEBUG_LOGGING === 'true',
} as const;

export const ANALYTICS = {
  ENABLED: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
} as const;