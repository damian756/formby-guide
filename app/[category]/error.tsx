"use client";

import Link from "next/link";

export default function CategoryError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#F7F9F6] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">⚠️</div>
        <h1 className="font-display text-2xl font-bold text-[#1C3220] mb-3">
          Something went wrong
        </h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          We had trouble loading this page. This is usually a temporary issue — try again in a moment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-[#1C3220] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#2E6B3E] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-gray-200 text-[#1C3220] px-6 py-3 rounded-full font-semibold text-sm hover:bg-white transition-colors"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
