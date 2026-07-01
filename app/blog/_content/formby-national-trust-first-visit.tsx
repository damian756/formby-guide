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
            headline: "Your First Visit to the National Trust at Formby: What to Expect",
            description: "Planning your first visit to the National Trust at Formby? Clare covers parking, booking, which trails to walk, red squirrel sighting odds in July, and what to bring.",
            url: "https://www.formbyguide.co.uk/blog/formby-national-trust-first-visit",
            datePublished: "2026-07-01",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            image: "https://www.formbyguide.co.uk/blog-formby-nt-first-visit.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">NT Formby First Visit</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Wildlife
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Your First Visit to the National Trust at Formby: What to Expect
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Everyone knows it exists. Fewer people know how it actually works when you get there.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-nt-first-visit.webp"
              alt="Sunlit pine path at Formby National Trust, dappled morning light through tall trees"
              fill className="object-cover" priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. July 1, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            The National Trust site at Formby is one of the best half-day visits on the Sefton Coast. Red squirrels in the pinewoods, a wide sandy beach, sand dunes, and a coastal path with views all the way to Wales on a clear day. The first time I took my eldest there she was six and we spent four hours without running out of things to look at.
          </p>
          <p>
            But I have heard from people who drove up, could not work out the parking, left, and wrote it off. That is avoidable. Here is what you actually need to know.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Parking: Book Before You Leave</h2>
          <p>
            The car park is on Victoria Road, Formby (L37 1YH). In July on any day with reasonable weather, it fills before 10am on weekends and by late morning on weekdays. Do not assume you can turn up and find a space.
          </p>
          <p>
            Book via the National Trust app before you set off. It costs around £7 for the day for non-members. NT members park free. Download the app at home where the Wi-Fi works: the signal in the car park lane is not reliable and trying to book while queuing in your car is not the experience you want.
          </p>
          <p>
            If you arrive and the car park is full, there is no organised overflow. You are looking at parking on residential streets further away and walking. It is walkable but annoying. Go early or book ahead.
          </p>

          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-lg p-5 my-8">
            <h3 className="font-semibold text-[#2E6B3E] mb-2">The basics</h3>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>Postcode: L37 1YH (Victoria Road, Formby)</li>
              <li>Parking: book via the NT app, approx £7/day non-members</li>
              <li>Booking: essential on summer weekends, strongly advised weekdays</li>
              <li>Opening: the site is open year round, car park opens at 8am</li>
              <li>Dogs: allowed on all trails and the beach year round</li>
              <li>Red squirrel trail: dogs on leads throughout</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Actually There</h2>
          <p>
            From the car park you have three main options: the red squirrel trail through the pinewoods, the path to the beach through the dunes, or the coastal path walking north or south. Most first-time visitors do the squirrel trail first and then walk to the beach. That is the right order.
          </p>
          <p>
            The squirrel trail is a marked circular route through the pinewoods. It takes about 45 minutes at a relaxed pace. The squirrels are red squirrels: a genuinely rare thing in England. Formby is one of the strongholds for the species in the north west because the grey squirrels that have displaced red squirrels elsewhere have not established in the pinewoods here.
          </p>
          <p>
            From the squirrel trail it is a 10 to 15 minute walk through the dunes to reach the open beach. The path is sandy and winds through the dune system. Take it slowly and look at the dune plants. There is sea holly in July, the distinctive electric-blue spiky plant, and the dunes are worth noticing in their own right rather than just rushing through to reach the sand.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Squirrel Sightings in July</h2>
          <p>
            July is not the best month for red squirrel sightings. The peak is September through February when food is scarcer and the squirrels spend more time on the ground at the feeding stations. In summer they are higher in the canopy and more spread out.
          </p>
          <p>
            You can still see them in July, particularly early in the morning on the squirrel trail. Go before 9:30am for the best odds. Bring binoculars if you have them. Look up into the pine canopy, not just at ground level. Listen for the sound of pine cones being worked apart, which is often the first indication a squirrel is nearby.
          </p>
          <p>
            Be honest with yourself if you are bringing children. If the main goal is a guaranteed squirrel sighting, September or October is the better bet. If the goal is a good day out with a squirrel sighting as a possible bonus, July is fine.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Cafe and Food</h2>
          <p>
            The NT cafe is in the car park building. It does coffee, sandwiches, cake, and light lunches. It is not cheap but it is consistently decent and the outdoor seating area is pleasant on a good day. In peak July it has queues from about 11am. Get there before noon or after 2pm.
          </p>
          <p>
            For a proper sit-down meal, Formby village is a 10-minute drive. Left Bank Brasserie is the best option. Book ahead at weekends.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Bring</h2>
          <p>
            Layers. The pinewoods are sheltered but the beach is exposed and the wind off the Irish Sea is consistent even in July. Trainers or walking shoes rather than flip flops: the sandy paths are fine in most footwear but flip flops in the dunes are more effort than they are worth. Suncream: you are outdoors for most of the visit with significant sections of open sky exposure.
          </p>
          <p>
            If you have small children: a carrier or backpack for the youngest because the sandy paths are not great for pushchairs. The NT does have a accessible path to the beach but it is limited.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/red-squirrels-formby" className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors">
              Red Squirrel Guide
            </Link>
            <Link href="/formby-beach" className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors">
              Formby Beach Guide
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
