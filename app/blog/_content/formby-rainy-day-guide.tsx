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
            headline: "What to Do in Formby When It Rains",
            description: "Rainy day in Formby? Here is what Clare actually recommends: where to eat, where to shelter, and what is worth doing even in the wet.",
            url: "https://www.formbyguide.co.uk/blog/formby-rainy-day-guide",
            datePublished: "2026-07-01",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            image: "https://www.formbyguide.co.uk/blog-formby-rainy-day.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Rainy Day Guide</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1C4A5A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Seasonal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            What to Do in Formby When It Rains
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            British summer, British weather. If your Formby day turns wet, here is an honest guide to what actually works.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-rainy-day.webp"
              alt="Rainy day in Formby, view through cafe window with coffee on wooden table"
              fill className="object-cover" priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. July 1, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            It rains in July in Formby. Not always. Sometimes July is brilliant. But you can absolutely drive up the M58, park at the National Trust, and watch the sky turn grey before you have reached the beach. This happens. It happened to me last summer and it will happen again.
          </p>
          <p>
            The answer is not to drive to a retail park. The answer is to know what Formby actually has when the weather turns, which is more than you might think.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stay in the Pinewoods</h2>
          <p>
            Rain in the pinewoods is actually fine. The canopy takes most of it. The sandy paths drain quickly and stay walkable in all but the heaviest sustained downpour. If it starts raining lightly while you are in the NT pinewoods, carry on. You are probably more sheltered than you think and the forest in rain has a different quality to it that is worth experiencing at least once.
          </p>
          <p>
            If it is genuinely heavy, the NT cafe at the car park end is the obvious move. It is warm, does a decent coffee, and the queue tends to move. It is not cheap but you are already there and it is the right call.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lunch in the Village</h2>
          <p>
            A rainy lunchtime in Formby village is genuinely pleasant. The main street has a handful of good options and none of them require planning if you arrive by noon.
          </p>
          <p>
            Left Bank Brasserie on Brows Lane is the best sit-down option. It is the kind of place that suits a slow rainy lunch: the food is good, the room is comfortable, and you can take your time without feeling like you are being rushed through for the next booking at lunchtime on a weekday. At weekends in July, booking ahead is wise even for lunch.
          </p>
          <p>
            The Sparrowhawk on Sparrowhawk Way is slightly more casual and more likely to take a walk-in on a rainy day. Good pub food, decent beer, and the kind of atmosphere that improves in bad weather because everyone is sheltering together.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Drive to Southport</h2>
          <p>
            If it is properly miserable and you want a change of scene, Southport is 15 minutes by car. The Atkinson on Lord Street is an excellent rainy afternoon option: art gallery, theatre space, and a cafe on the ground floor. It is free to enter the gallery and the building itself is worth the visit. I have been in there with all four of my kids on a wet school holiday afternoon and come out with everyone still speaking to each other, which says something.
          </p>
          <p>
            Southport Market on Market Street is another option for a rainy hour: covered, independent food stalls, relaxed atmosphere. Southport town centre generally handles a rainy day better than Formby does because there is simply more of it.
          </p>

          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-lg p-5 my-8">
            <h3 className="font-semibold text-[#2E6B3E] mb-2">Rainy day options in brief</h3>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>NT pinewoods in light rain: carry on, the canopy helps</li>
              <li>NT cafe: reliable, warm, queue usually moves</li>
              <li>Left Bank Brasserie: best sit-down lunch, book at weekends</li>
              <li>The Sparrowhawk: casual, walk-in friendly at lunch</li>
              <li>Southport: The Atkinson and Southport Market, 15 minutes away</li>
              <li>The Formby village charity shops on Chapel Lane if you want a browse</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does Not Work in the Rain</h2>
          <p>
            The beach in heavy rain is not worth it. The sand dunes are slippery when wet and the views are not there. The beach walk is one of those things that is great in most conditions and bad in a proper downpour. Save it for a better day.
          </p>
          <p>
            The red squirrel trail in heavy rain is similarly unreliable. The squirrels are not going to come out in a downpour and neither should you expect them to. Light rain is different. You can still see squirrels in light rain, particularly early morning. Heavy sustained rain is a different situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/things-to-do" className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors">
              Things to Do in Formby
            </Link>
            <Link href="/red-squirrels-formby" className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors">
              Red Squirrel Guide
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
