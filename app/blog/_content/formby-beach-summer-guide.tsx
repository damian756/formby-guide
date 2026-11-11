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
            headline: "Formby Beach in Summer: What You Need to Know Before You Go",
            description:
              "A guide to Formby Beach in summer. Parking, tide times, dogs, crowds, and the best spots. From a local who's been hundreds of times.",
            url: "https://www.formbyguide.co.uk/blog/formby-beach-summer-guide",
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
            datePublished: "2026-05-07",
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
            <span className="text-[#1C3220] font-medium">Formby Beach in Summer</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-summer-beach.jpg"
          alt="Rippled sand at low tide on Formby Beach at golden hour, warm amber light on the wet sand"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <div className="inline-block bg-[#2E6B3E] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Beach Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Formby Beach in Summer: What You Need to Know Before You Go
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Parking, tide times, crowds, dogs, and the spots most visitors miss.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Formby Beach is brilliant in summer. It is also, on a hot August Saturday, absolutely rammed. 
          The two things are both true. If you know how it works, you can have a great day. If you don&apos;t, 
          you can spend 45 minutes trying to park and find you&apos;re walking half a mile to the waterline with 
          a windbreak and four children who stopped being in a good mood about 20 minutes ago.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          I&apos;ve done both. Here&apos;s everything I know.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Basics: Postcode, Parking, Cost</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The main National Trust car park is at <strong>L37 1LJ</strong>. That&apos;s the postcode for your satnav. 
          Parking is managed by the National Trust. Members and Blue Badge holders park free; 
          everyone else pays at the machine or with the JustPark app. There is no booking. Signal in the car park is poor, 
          so set up JustPark at home if you want to pay by app, because queueing to pay on arrival on a busy day is its own special experience.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          There is a second National Trust car park at Lifeboat Road (L37 2EB), reached by a hard standing path and a boardwalk. 
          Both car parks are small and fill quickly on sunny days, so the National Trust asks people to come by train if they can. 
          A payment covers either car park but cannot be moved between them. 
          If you arrive at 9am you will find a space. If you arrive at 12 on a sunny Saturday in July, 
          you will not. This is not a theory, it&apos;s what actually happens.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Tide Times Matter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Formby has a large tidal range. At low tide, the beach is enormous, wide and flat, with shallow 
          ripple pools that children love. At high tide, the water comes right up to the base of the sand 
          dunes and there is very little beach at all. This is not a problem, just something to know before 
          you plan your day.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Check the tide times for the day you&apos;re visiting. The Met Office or Tide-Forecast.com are both 
          reliable. Aim to arrive around low tide for maximum beach. Typically in summer, the beach is at 
          its biggest two to three hours either side of low water.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The other thing to know: rip currents are present at Formby Point. The beach is generally safe 
          for paddling and swimming but the dunes and Point area can have stronger currents. If you&apos;re 
          not confident in the water, don&apos;t go further than knee depth. RNLI lifeguards cover Lifeboat Road 
          from 10am to 6pm in spring and summer during the school holidays. Swim parallel to shore if you get caught in a 
          rip, not against it.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Dogs: What Are the Rules?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dogs are welcome at Formby Beach all year round on most of the beach. There are seasonal 
          restrictions on specific sections near the Little Tern nesting area between May and August. 
          These are clearly signposted and enforced. The main dog-walking area is unrestricted.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The pinewoods walk from the car park to the beach is also dog-friendly and one of the nicest 
          approaches to any beach I&apos;ve walked. Dogs need to be kept on leads through the squirrel reserve 
          section of the pinewoods. There are bins throughout.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Walk from the Car Park</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          It&apos;s about a 10-15 minute walk from the main car park to the waterline. Through the pinewoods, 
          over the dune boardwalk, down onto the sand. It&apos;s a lovely walk. The pinewoods in 
          summer are cool and smell exactly like a proper pine forest. The red squirrel sightings along 
          this route are real, particularly early in the morning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The dune boardwalks are in good condition. Pushchairs can manage the main boardwalk route 
          with some effort. Wheelchairs: the main boardwalk is accessible to the dune ridge but the 
          sandy descent to the beach itself is not paved. Contact the National Trust for the most 
          current accessibility information.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Facilities</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#1C3220] text-white">
                <th className="text-left px-4 py-3 font-semibold">Facility</th>
                <th className="text-left px-4 py-3 font-semibold">Available</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Car park", "Yes (National Trust, paid)"],
                ["Toilets", "At the car park (not on the beach itself)"],
                ["Food and drink", "Mobile concessions in the car parks (spring and summer)"],
                ["Dog water", "Bowls near the entrance"],
                ["Ice cream", "Seasonal van near car park"],
                ["Lifeguards", "RNLI at Lifeboat Road, 10am to 6pm, spring and summer school holidays"],
                ["Accessibility", "Boardwalk to dune ridge; beach itself is sandy"],
              ].map(([f, a]) => (
                <tr key={f} className="border-b border-gray-100 even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-[#1C3220]">{f}</td>
                  <td className="px-4 py-3 text-gray-700">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Best Spots on the Beach</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The main beach area directly in front of the boardwalk exit fills up first. If you walk 
          north along the beach (right as you come off the dunes) for about 10 minutes, the crowds 
          thin out considerably. This is my preferred direction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Formby Point area is at the southern end. It has more dramatic dune scenery but is 
          also where the tidal currents are strongest. Good for photographs and walking, less suitable 
          as a base for a family day with paddling.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The ripple pools that form at low tide towards the waterline are where the kids invariably 
          end up. Shallow, warm in summer, full of small crabs and shells. Take wellies if you want 
          to get involved.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">After the Beach</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In spring and summer there are mobile food concessions in the car parks, but there is no 
          year-round National Trust cafe at Formby. For a proper sit-down lunch after the beach, Formby village 
          is about 10 minutes by car. The Sparrowhawk, a Brunning &amp; Price pub on Southport Old Road, 
          serves food from noon every day.
        </p>

        <div className="bg-[#1C3220] text-white rounded-xl p-6 my-10">
          <p className="font-semibold text-lg mb-2">Quick summary for a good day at Formby Beach</p>
          <ul className="space-y-1 text-gray-200 text-sm">
            <li>Postcode: L37 1LJ</li>
            <li>Set up JustPark at home if you want to pay by app (signal is poor)</li>
            <li>Check tide times. Arrive near low tide for the most beach.</li>
            <li>Walk north from the boardwalk for fewer crowds</li>
            <li>Dogs welcome. Lead through the squirrel section.</li>
            <li>Lifeguards only at Lifeboat Road in the school holidays. Don&apos;t swim in strong currents at Formby Point.</li>
          </ul>
        </div>

        <ClareBio />

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">More from Formby Guide</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/formby-beach" className="text-[#2E6B3E] hover:underline font-medium text-sm">Formby Beach Guide</Link>
            <Link href="/blog/dogs-formby-beach" className="text-[#2E6B3E] hover:underline font-medium text-sm">Dogs at Formby Beach</Link>
            <Link href="/red-squirrels-formby" className="text-[#2E6B3E] hover:underline font-medium text-sm">Red Squirrels</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
