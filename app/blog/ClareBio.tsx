import Link from "next/link";
import Image from "next/image";

export default function ClareBio() {
  return (
    <div className="bg-gradient-to-br from-[#F0F5EF] to-white rounded-2xl border border-[#2E6B3E]/15 p-6 mt-10">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-md ring-2 ring-[#2E6B3E]/20">
          <Image src="/clare.png" alt="Clare" width={64} height={64} className="object-cover w-full h-full" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-display font-bold text-[#1C3220] text-lg">Clare</span>
            <span className="bg-[#2E6B3E]/10 text-[#2E6B3E] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#2E6B3E]/20">
              Formby Local
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Clare has lived in Formby for over fifteen years. Mum of four, she knows every trail,
            tide time, and family-friendly spot on the Sefton Coast — and isn&apos;t shy about telling you
            which ones aren&apos;t worth the bother. She writes for FormbyGuide to share the kind of
            honest, practical tips you&apos;d only get from someone who actually lives here.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">📍 Formby, Merseyside</span>
            <span className="flex items-center gap-1">👨‍👩‍👧‍👦 Mum of 4</span>
            <span className="flex items-center gap-1">🌲 15+ years local</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2E6B3E]/10 mt-5 pt-4 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-gray-400 italic">
          All tips are based on Clare&apos;s personal experience — no sponsored content, no fluff.
        </p>
        <Link
          href="/blog"
          className="text-xs font-semibold text-[#2E6B3E] hover:text-[#1C3220] transition-colors hover:underline"
        >
          More from Clare →
        </Link>
      </div>
    </div>
  );
}
