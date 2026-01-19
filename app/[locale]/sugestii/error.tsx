'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <i className="fas fa-exclamation-triangle text-red-600 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-red-800 mb-4">A apărut o eroare</h2>
        <p className="text-red-700 mb-6">
          Ne cerem scuze pentru inconvenient. Vă rugăm încercați din nou.
        </p>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Încercați din nou
        </button>
      </div>
    </div>
  );
}
