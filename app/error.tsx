"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-neutral-700 mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <Button onClick={() => reset()} className="w-full">
          Try Again
        </Button>
      </div>
    </div>
  );
}
