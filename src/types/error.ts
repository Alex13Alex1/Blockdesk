export interface ErrorDetails {
  title: string;
  detail: string;
  isRetryable: boolean;
  additionalInfo: Record<string, unknown>;
  buttons: unknown[];
  planChoices: unknown[];
}

export interface ApiErrorResponse {
  error: string;
  details: ErrorDetails;
  isExpected: boolean;
}

export type ErrorCode = 'ERROR_UNAUTHORIZED' | string;
