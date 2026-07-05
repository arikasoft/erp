"use client";

import { RefreshCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-black text-red-500">

          Oops!

        </h1>

        <h2 className="mt-6 text-4xl font-black text-white">

          Something went wrong

        </h2>

        <p className="mt-6 text-slate-400">

          An unexpected error occurred while loading the page.

        </p>

        <button
          onClick={reset}
          className="mt-10 inline-flex items-center rounded-xl bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700"
        >

          <RefreshCcw
            className="mr-2"
            size={20}
          />

          Try Again

        </button>

      </div>

    </main>
  );
}