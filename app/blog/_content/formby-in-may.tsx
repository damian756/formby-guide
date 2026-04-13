import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Formby in May: Why It's One of the Best Months to Visit",
            description:
              "May is one of the best times to visit Formby. Quieter beach, green pinewoods, red squirrels active, natterjack toads calling. What to do, where to go.",
            url: "https://www.formbyguide.co.uk/blog/formby-in-may",
            author: {
              "@type": "Person",
              "@id": "https://www.formbyguide.co.uk/about#clare",
              name: "Clare",
              url: "https://www.formbyguide.co.uk/about",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            datePublished: "2026-04-12",
            inLanguage: "en-GB",
          }),
        }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">Formby in May</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/pinewoods-hero.webp"
          alt="Formby pinewoods in late spring — sunlight through the pines, lush green understorey"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#1C4A5A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Seasonal</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Formby in May: Why It&apos;s One of the Best Months to Visit
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 12, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Every local has a preferred month for Formby. Mine is May. Not July, when it&apos;s rammed. Not October, when it&apos;s beautiful but cold. May: when the beach is quiet, the pinewoods are properly green, the red squirrels are out before the summer crowds arrive, and the natterjack toads are calling on warm evenings. Here&apos;s what makes it worth timing your visit for.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Beach in May</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          May is post-Easter, pre-summer. The school holiday crowds haven&apos;t arrived yet. On a weekday in May, Formby Beach can feel like your own private beach — wide, flat, the dunes greenish-gold with new marram grass, the Irish Sea doing whatever it likes. I&apos;ve walked the full length of the beach in May and counted fewer than 30 people. In August that same walk would put you past several thousand.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          The weather in May is genuinely better than August on average. That sounds counterintuitive. But May gets more sunshine hours and less rain than the summer months in the northwest, and the wind — always present on the coast — is warmer. You&apos;ll still need a layer, but you&apos;re not piling on waterproofs.
        </p>
        <div className="bg-[#F0F5F1] border-l-4 border-[#2E6B3E] rounded-r-xl px-5 py-4 my-7">
          <p className="text-[#1C3220] font-medium leading-relaxed">
            <span className="mr-2">📍</span>
            Formby Beach postcode: L37 1YH (National Trust car park, Formby). Book parking through the NT app in advance at peak weekends.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Pinewoods in May</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          If you&apos;re going to visit the pinewoods once, visit in May. The understorey is at its greenest. There&apos;s still wild garlic in the lower woodland if you go early in the month. The light through the Scots pines on a clear morning is one of those things that&apos;s hard to describe without sounding like a brochure, so I&apos;ll just say: it&apos;s worth arriving before 9am if you want the best of it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          The trails are clear and dry in May. The ground doesn&apos;t churn up the way it does in November. You can walk in trainers rather than full waterproofs. This matters more than you think when you&apos;re also managing children.
        </p>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 border border-gray-100">
          <Image
            src="/pinewoods-deep-woodland.webp"
            alt="Deep in Formby pinewoods in spring — tall scots pines with green fern understorey"
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            quality={85}
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">Red Squirrels in May</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          May is one of the most active months for the red squirrels. The breeding season has ended, the young of the year are beginning to emerge, and the adults are busy foraging ahead of summer. You&apos;ll see more movement in May than in mid-summer when the canopy closes and the squirrels move higher into the trees.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          Early morning is always best — before 10am the squirrels are most active. Walk slowly. Don&apos;t let children run ahead. The squirrels at Formby are used to people but they&apos;re not tame. Stand still for a few minutes in the right area and they&apos;ll carry on as if you&apos;re not there.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Natterjack Toads</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          This is the thing most visitors don&apos;t know about. May is the peak of the natterjack toad calling season at Ainsdale NNR, just south of Formby. The males call at dusk on warm evenings from the dune slack pools — a loud, dry churring sound that carries for several hundred metres. It&apos;s completely unlike anything else you&apos;ll hear in the British countryside.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          You can sometimes hear them from the car park on Shore Road on a warm May evening. The Natterjack Toad is Britain&apos;s rarest amphibian, and the Sefton Coast is one of its last significant strongholds. Worth knowing about.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">What to Do on a May Day in Formby</h2>
        <ul className="mb-6 space-y-3">
          {[
            "Morning: early start at the National Trust red squirrel trail. Before 9am if possible. Car park at L37 1YH.",
            "Mid-morning: walk through the pinewoods to the beach. The transition from pine shade to open dune is one of the better short walks in the northwest.",
            "Lunch: back to Formby village. Left Bank Brasserie if you want a proper meal. The NT cafe if you want something quick and don't mind the queue.",
            "Afternoon: beach. Low tide is the time to walk the full length. Check tide tables before you go.",
            "Evening (warm nights): head toward Ainsdale NNR after 8pm and listen for the natterjack toads. You don't need to go far from the road.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700">
              <span className="text-[#2E6B3E] font-bold flex-none mt-0.5">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">Parking in May</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The National Trust car park gets busy at weekends in May but is rarely at full capacity before 10am. During the week it&apos;s easy. Book through the NT app if you&apos;re coming on a bank holiday weekend to be safe. There&apos;s also parking on Shore Road for Ainsdale if you&apos;re combining both.
        </p>

        <div className="bg-[#1C3220] text-white rounded-2xl px-6 py-5 my-8">
          <p className="text-white/80 text-sm mb-3 leading-relaxed">Full guide to visiting Formby Beach — postcode, parking costs, dog rules and what to bring:</p>
          <Link href="/formby-beach" className="inline-flex items-center font-bold text-[#C9A96E] hover:text-[#e0ba66] transition-colors text-sm">
            Formby Beach Complete Guide →
          </Link>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
