import type { ApiErrorResponse, ErrorCode } from '../types/error';

/**
 * Checks if an error is an API error response
 */
export function isApiErrorResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === 'object' &&
    error !== null &&
    'error' in error &&
    'details' in error &&
    typeof (error as ApiErrorResponse).error === 'string'
  );
}

/**
 * Checks if an error is unauthorized
 */
export function isUnauthorizedError(error: unknown): boolean {
  if (isApiErrorResponse(error)) {
    return error.error === 'ERROR_UNAUTHORIZED';
  }
  return false;
}

/**
 * Checks if an error is retryable
 */
export function isRetryableError(error: unknown): boolean {
  if (isApiErrorResponse(error)) {
    return error.details.isRetryable;
  }
  return false;
}

/**
 * Gets a user-friendly error message from an error
 */
export function getErrorMessage(error: unknown): string {
  if (isApiErrorResponse(error)) {
    return error.details.detail || error.details.title || 'An error occurred';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

/**
 * Gets the error code from an error
 */
export function getErrorCode(error: unknown): ErrorCode | null {
  if (isApiErrorResponse(error)) {
    return error.error;
  }
  return null;
}
