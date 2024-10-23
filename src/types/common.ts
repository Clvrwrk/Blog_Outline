export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: Status;
}

export interface ValidationError {
  field: string;
  message: string;
}