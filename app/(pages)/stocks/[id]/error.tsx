'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl font-medium mb-6 text-center">
        Something went wrong. We’re working on fixing it.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}
