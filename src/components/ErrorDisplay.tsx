import React from 'react';
import type { ApiErrorResponse } from '../types/error';
import { isApiErrorResponse, getErrorMessage, isRetryableError } from '../utils/errorHandler';

interface ErrorDisplayProps {
  error: unknown;
  onRetry?: () => void;
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
  className = '',
}) => {
  const errorMessage = getErrorMessage(error);
  const isRetryable = isRetryableError(error);
  const isApiError = isApiErrorResponse(error);
  const apiError = isApiError ? (error as ApiErrorResponse) : null;

  return (
    <div
      className={`rounded-lg border border-red-200 bg-red-50 p-4 ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">
            {apiError?.details.title || 'Error'}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{errorMessage}</p>
            {apiError?.error && (
              <p className="mt-1 text-xs text-red-600">
                Error Code: {apiError.error}
              </p>
            )}
          </div>
          {isRetryable && onRetry && (
            <div className="mt-4">
              <button
                type="button"
                onClick={onRetry}
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
