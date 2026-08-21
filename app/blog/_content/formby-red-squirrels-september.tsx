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
            headline: "Red Squirrels in September: The Season Is Starting at Formby",
            description:
              "September is when the red squirrel sighting odds at Formby start to climb. The summer crowds are mostly gone, the squirrels are busier ahead of winter, and the pinewoods feel different.",
            url: "https://www.formbyguide.co.uk/blog/formby-red-squirrels-september",
            datePublished: "2026-08-21",
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
            image: "https://www.formbyguide.co.uk/blog-formby-red-squirrel-september.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Red Squirrels in September</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Wildlife
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Red Squirrels in September: The Season Is Starting at Formby
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            September is when the sighting odds at Formby start to genuinely improve. The summer crowds thin, the squirrels get busier ahead of winter, and the pinewoods feel like a different place.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-red-squirrel-september.webp"
              alt="Red squirrel on a pine branch in coastal pinewoods, alert and looking sideways, tufted ears visible"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. August 21, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            The red squirrel peak season at Formby runs from September through to February. Not July. Not August, though you can see them then. The sighting odds climb meaningfully from September onwards, and that pattern is consistent enough to plan around. If you have been thinking about coming to see the squirrels and wondering when to go, the answer is from September on.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why September Changes Things</h2>
          <p>
            Three things happen in September that improve squirrel sighting odds at Formby. The summer visitor numbers drop significantly after the school term starts. The squirrels enter a period of increased activity as they begin to cache food for winter. And the pine canopy starts to thin slightly, which makes the squirrels easier to spot from the trail below.
          </p>
          <p>
            The combination of quieter paths and more active squirrels is not a coincidence. Red squirrels are less visible when the trails are busy. They move into the higher branches when there are a lot of humans about. In September, with fewer people around, they tend to come lower and move more freely.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Are Looking For</h2>
          <p>
            The Formby red squirrel is slightly smaller than you might expect if your mental image comes from the larger grey squirrel. Tufted ears are the defining feature: they are more prominent from September onward as the winter coat develops. The fur is a warm chestnut-red with a cream chest. Tail colour varies from red to golden.
          </p>
          <p>
            Movement is the key to spotting them. The squirrels cover ground quickly through the canopy and along fallen branches. Look for movement in the mid-level of the pines rather than just on the ground. They forage at all heights but the tree-to-tree movement is easiest to catch. Stop and stand still for two minutes rather than walking continuously and you will see more.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              Go early. I mean genuinely early: before 9am if you can manage it. The squirrels are most active in the first couple of hours after dawn. Standing still at a junction on the trail for five minutes in September morning light and watching the canopy is one of the better quiet experiences Formby has to offer.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where to Go</h2>
          <p>
            The main squirrel trail starts from the National Trust car park on Victoria Road (L37 1YH). Follow the wooden posts and keep left to enter the pinewoods. The highest concentration of squirrel activity is in the established pines in the middle section of the trail, away from the beach path and away from the busiest dog-walking routes.
          </p>
          <p>
            The feeding stations that the National Trust maintains in some years are worth noting. They attract squirrels reliably in periods of lower natural food availability. In September there is usually still enough natural pine cone food that the squirrels are spread more widely through the woods, so the whole trail is worth doing rather than just waiting at one point.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Information for September</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              ["Car park", "Victoria Road, Formby, L37 1YH. Book via the NT app. In September weekday availability is much better than July or August. Weekend mornings still worth booking."],
              ["Best timing", "Early morning, before 9am. September light in the pinewoods is genuinely beautiful."],
              ["What to wear", "Layers. September mornings can be cool. Wellies or proper walking shoes for the paths after rain."],
              ["Dogs", "Dogs allowed on a lead throughout the nature reserve. Keep them on the lead in the pinewoods: it matters for the squirrels."],
              ["Binoculars", "Worth bringing. Not essential but they improve the experience significantly when a squirrel is twenty feet up in a pine."],
            ].map(([item, detail]) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] font-bold flex-none">→</span>
                <span><span className="font-semibold text-gray-900">{item}:</span> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">After the Walk</h2>
          <p>
            The cafes in Formby village are a 10-minute drive from the National Trust car park. If you want something on site, there is a seasonal cafe at the NT visitor area near the car park. In September it is usually still open on weekends but check ahead. The village has better options for a proper lunch or coffee, and the drive through Formby takes you past the chapel lane shops if you want a browse.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Season That Follows</h2>
          <p>
            October and November are when the sighting odds at Formby are highest. The squirrels are caching food intensively, the canopy is thinning as the deciduous trees lose their leaves, and the pinewoods are at their most atmospheric. If September feels too warm still, know that October and November are genuinely the best months. The winter coat on the squirrels in November and December is fuller and more striking. It is worth coming back for.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">More from Formby Guide:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/red-squirrels-formby"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#245730] transition-colors"
            >
              Full Red Squirrel Guide
            </Link>
            <Link
              href="/blog/formby-august-guide"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Formby in August
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
