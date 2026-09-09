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
            headline: "Formby Day Trip from Manchester: How to Do It Properly",
            description:
              "Manchester to Formby by train is under 90 minutes. Most people from Manchester have never been. Here is the honest guide to how to get there, what to do, and whether it is worth the journey.",
            url: "https://www.formbyguide.co.uk/blog/formby-day-trip-from-manchester",
            datePublished: "2026-09-09",
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
            image: "https://www.formbyguide.co.uk/blog-formby-day-trip-manchester.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby Day Trip from Manchester</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1C4A5A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Day Trips
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Formby Day Trip from Manchester: How to Do It Properly
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Manchester to Formby by train is under 90 minutes. Most people from Manchester have never been. The beach, the red squirrels, the pinewoods, and a decent lunch. Here is the honest guide.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-day-trip-manchester.webp"
              alt="Northern Rail train at a Lancashire station platform on a clear autumn day"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. September 9, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            People from Manchester tend to go to the Peak District for nature, or drive to Blackpool for a seaside day. Formby, which is under 90 minutes by train and has better beaches than Blackpool, a National Trust pinewood reserve, red squirrels and genuinely good restaurants, is mostly overlooked. That is partly a geography perception problem and partly because the train route is not obvious. Here is the straightforward version.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting There by Train</h2>
          <p>
            The train from Manchester to Formby requires one change at Liverpool Central or Liverpool Lime Street. The full journey is:
          </p>
          <ul className="space-y-2 list-none pl-0">
            {[
              ["Manchester Piccadilly or Victoria to Liverpool Lime Street", "Approximately 35-45 minutes. Northern or Avanti West Coast trains. Regular service throughout the day."],
              ["Liverpool Lime Street to Liverpool Central", "A short walk (about 10 minutes) or a couple of stops on the loop line."],
              ["Liverpool Central to Formby", "Merseyrail Northern Line to Formby station. Approximately 30 minutes. Trains every 15-20 minutes during the day."],
            ].map(([leg, detail]) => (
              <li key={leg} className="flex gap-3">
                <span className="text-[#2E6B3E] font-bold flex-none">→</span>
                <span><span className="font-semibold text-gray-900">{leg}:</span> {detail}</span>
              </li>
            ))}
          </ul>
          <p>
            Total journey time door to door from central Manchester: 75-90 minutes, depending on connections. Book the Manchester to Liverpool leg in advance. The Merseyrail portion (Liverpool Central to Formby) does not need advance booking.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              Buy a return to Formby via Liverpool. The Merseyrail section is covered on a day return and the connection at Liverpool Central is usually straightforward. Give yourself 15-20 minutes at Liverpool Central for the change, especially on weekends when the platforms are busier.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">From Formby Station</h2>
          <p>
            Formby station is in Formby village, about 15 minutes walk from the National Trust car park on Victoria Road, or a short taxi ride. Taxis are available outside the station. The walk through the village is pleasant and gives you a sense of the place before you reach the reserve.
          </p>
          <p>
            If you are planning to spend the day at the NT reserve and beach, the taxi is the practical choice. If you want to include the village for lunch on the way back, the walk works well in both directions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do</h2>
          <p>
            The National Trust reserve is the main reason to come. The squirrel trail through the pinewoods takes 45-60 minutes at a relaxed pace. From there, the beach is a 15-minute walk through the dunes. The beach at low tide is wide, flat and good for walking. The prehistoric footprint trail at Formby Point is worth adding if the tide is right.
          </p>
          <p>
            A full day programme that works well: arrive by 10am, squirrel trail by 10:30, beach by 11:30, lunch in the village at 1pm, browse Chapel Lane shops, afternoon coffee, train back from Formby at 4-5pm. That gives you a comfortable day without rushing anything.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where to Eat</h2>
          <p>
            The village has several good options. Left Bank Brasserie is the special occasion choice: proper cooking, worth booking ahead at weekends. The Sparrowhawk is a reliable pub with good food and a beer garden that works on a September afternoon. For something more casual, the cafes on Chapel Lane cover coffee and lunch well.
          </p>
          <p>
            There is a seasonal cafe at the NT car park for a post-walk coffee, but it is not always open in September. Do not rely on it without checking ahead.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is It Worth It?</h2>
          <p>
            Yes. Straightforwardly. The combination of a proper pinewood nature reserve, red squirrel sightings in season, one of the better stretches of beach in the north-west, and a functioning village with decent restaurants is not common within 90 minutes of Manchester by train. It is the kind of day out that surprises people who expected something lesser.
          </p>
          <p>
            September and October are the best months. The squirrel sighting odds are improving, the beach is quieter than August, the weather can still be genuinely pleasant, and the pinewoods in early autumn light are worth the journey on their own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Summary</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              ["Journey time", "75-90 minutes from central Manchester. One change at Liverpool."],
              ["NT car park", "Victoria Road, Formby, L37 1YH. Book via NT app. Taxi from station: 5 minutes, around £5-7."],
              ["Best time to arrive", "Before 10am to walk the squirrel trail while it is quiet."],
              ["Return train", "Check Merseyrail timetable. Trains from Formby to Liverpool Central run every 15-20 minutes."],
              ["October half term note", "Half term week (26-30 Oct) is busier. The car park fills earlier on days with good weather. Go early or book parking in advance."],
            ].map(([item, detail]) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] font-bold flex-none">→</span>
                <span><span className="font-semibold text-gray-900">{item}:</span> {detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">More from Formby Guide:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/red-squirrels-formby"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#245730] transition-colors"
            >
              Red Squirrel Guide
            </Link>
            <Link
              href="/formby-beach"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Formby Beach Guide
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
