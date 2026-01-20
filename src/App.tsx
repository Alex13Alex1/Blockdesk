import React, { useState } from 'react';
import { ErrorDisplay } from './components/ErrorDisplay';
import type { ApiErrorResponse } from './types/error';

function App() {
  const [error, setError] = useState<ApiErrorResponse | null>(null);

  // Example: Simulating the error you received
  const simulateError = () => {
    const exampleError: ApiErrorResponse = {
      error: 'ERROR_UNAUTHORIZED',
      details: {
        title: 'Unauthorized request.',
        detail: 'User is unauthorized',
        isRetryable: false,
        additionalInfo: {},
        buttons: [],
        planChoices: [],
      },
      isExpected: true,
    };
    setError(exampleError);
  };

  const handleRetry = () => {
    console.log('Retrying...');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Blockdesk</h1>
        
        <div className="mb-4">
          <button
            onClick={simulateError}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Simulate Unauthorized Error
          </button>
        </div>

        {error && (
          <ErrorDisplay error={error} onRetry={handleRetry} className="mb-4" />
        )}

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Error Handling Example</h2>
          <p className="text-gray-600">
            This app demonstrates error handling for API errors like the
            unauthorized error you encountered. Click the button above to see
            the error display component in action.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
