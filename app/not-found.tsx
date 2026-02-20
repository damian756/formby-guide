import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🐿️</div>
        <h1 className="font-display text-4xl font-bold text-[#1C3220] mb-2">Page not found</h1>
        <p className="text-[#1C3220]/60 mb-8">That page has scurried off somewhere. Let&apos;s get you back on track.</p>
        <Link
          href="/"
          className="inline-block bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors"
        >
          Back to FormbyGuide
        </Link>
      </div>
    </div>
  );
}
