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
            headline: "Formby in Winter: What to Expect from December to February",
            description:
              "Earlier closing, no food vans and wintering birds on the shore. A practical guide to visiting Formby beach and the pinewoods in winter, and the squirrel pox guidance from July 2026.",
            url: "https://www.formbyguide.co.uk/blog/formby-in-winter",
            datePublished: "2026-11-11",
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
            image: "https://www.formbyguide.co.uk/pinewoods-hero.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby in Winter</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1C4A5A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Seasonal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Formby in Winter: What to Expect from December to February
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Winter is a good time for the beach and the pinewoods, but a visit works differently: on a November day the car parks close at 4pm, there is no food on site, and wintering birds need room on the shore.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/pinewoods-hero.webp"
              alt="Sunlight through the Formby pinewoods, with a narrow path running between tall pines"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. November 11, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            A winter visit to Formby needs a little more planning than a summer one. The car parks keep set opening hours, there is nothing to buy on site, and both the shore and the dunes have residents that need room: wintering birds and grazing cattle.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Car Parks Close in the Afternoon</h2>
          <p>
            The National Trust&apos;s two car parks at Formby, Victoria Road (L37 1LJ) and Lifeboat Road (L37 2EB), change their opening hours with the season. On 11 November 2026 both were open from 09:00 to 16:00, with the toilets open from 09:30 to 16:00. Check the National Trust&apos;s Formby page on the day you go.
          </p>
          <p>
            In practice that means starting in the morning and leaving yourself time to get back to the car before it closes, rather than racing the light across the dunes.
          </p>
          <p>
            Parking works the same as the rest of the year. There is no booking. The car parks are ticketless with number-plate cameras, and you pay at the machine with coins or card, or with the JustPark app. National Trust members and Blue Badge holders park free. Members scan their card or check in with JustPark; Blue Badge holders tell the welcome team on arrival, as there is no option for them on the machines yet.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              Coming by train means no closing time to watch. Merseyrail runs every 15 minutes: get off at Freshfield for Victoria Road and the squirrel walks, or at Formby for Lifeboat Road and the boardwalk to the beach.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Bring a Flask</h2>
          <p>
            The food and drink vans that park up in the National Trust car parks only come in spring and summer. Outside those seasons there is nothing to buy on site, so bring a hot drink and something to eat, or plan to finish in the village. Our <Link href="/cafes" className="text-[#2E6B3E] underline">Formby cafés listing</Link> covers the places to warm up afterwards.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Squirrels and Squirrel Pox</h2>
          <p>
            The pinewoods are the place to look for red squirrels, but Formby&apos;s squirrels have had a difficult year. On 20 July 2026 the Wildlife Trust for Lancashire, Manchester and North Merseyside confirmed an outbreak of squirrel pox in Formby. The disease is carried by grey squirrels without harming them, and it is fatal to reds. In the last major outbreak, in 2008, Formby&apos;s red squirrel population fell by an estimated 80%.
          </p>
          <p>
            In July the Trust and Sefton Council asked visitors and residents to help in a few simple ways:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Take down wildlife feeders along the Sefton Coast. Shared feeding spots can become hotspots for spreading the disease. If you want to feed wildlife at home, scatter small amounts of fresh fruit with a high water content, such as apple or melon.</li>
            <li>Every day, clean bird baths and any outdoor equipment that squirrels can reach, using a wildlife-safe disinfectant.</li>
            <li>Report what you see: healthy, sick or dead red squirrels, and any grey squirrels, on the Wildlife Trust&apos;s sightings form.</li>
            <li>If you see a red squirrel that looks unwell, call the Trust&apos;s Red Squirrel Team on 07590 745 862 and leave a voicemail if there is no answer.</li>
          </ul>
          <p>
            That guidance dates from July 2026. Check the Wildlife Trust&apos;s red squirrel pages for the latest advice before you go.
          </p>
          <p>
            The National Trust is also carrying out woodland conservation work at Formby through the autumn and winter, so you may see work going on in parts of the pinewoods.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Birds on the Shore</h2>
          <p>
            The Sefton shore, Formby included, is part of the Ribble and Alt Estuaries Special Protection Area, protected in large part for the birds that spend the winter here. The government&apos;s factsheet for the site lists, among others, pink-footed goose, knot, sanderling, dunlin, bar-tailed godwit, grey plover and oystercatcher.
          </p>
          <p>
            The same factsheet records concerns that beach recreation disturbs roosting flocks, and notes the effect on the birds&apos; energy and survival, especially in winter. Every time a resting flock is put up, it burns energy it needs. If you see birds resting at the water&apos;s edge, walk round them in a wide arc and keep your dog close until you are well past.
          </p>
          <figure className="my-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/formby-beach-sea.jpg"
                alt="People walking along the water's edge on Formby beach, with the dunes on the right"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-2">The water&apos;s edge at Formby. In winter, give resting flocks plenty of room.</figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cattle in the Dunes</h2>
          <p>
            The National Trust is using conservation cattle grazing in the Formby dunes this winter as part of its work to restore the dune habitats that natterjack toads and sand lizards depend on. It asks visitors to be mindful of the cattle. Give them room, and keep dogs under close control near the grazing areas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Footprints and Shipwrecks</h2>
          <p>
            A quiet winter morning at low tide is a good time to look at the older history on the beach. The National Trust points visitors to Formby&apos;s two shipwrecks and its prehistoric footprints, preserved in old layers of mud on the shoreline. Our guide to the <Link href="/blog/prehistoric-footprints-formby-point" className="text-[#2E6B3E] underline">prehistoric footprints at Formby Point</Link> explains who made them and how to look.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical: A Winter Visit</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              ["Car parks", "Victoria Road, L37 1LJ, for the pinewoods and the squirrel walks. Lifeboat Road, L37 2EB, for the boardwalk to the beach. Hours change with the season, so check before you go."],
              ["Paying", "No booking. Machine (coins or card) or the JustPark app. Members and Blue Badge holders park free; Blue Badge holders tell the welcome team."],
              ["Toilets", "At both car parks, with baby changing. On 11 November 2026 they opened at 09:30, half an hour after the car parks."],
              ["Food", "Nothing on site in winter. Bring a flask or finish in the village."],
              ["By train", "Merseyrail every 15 minutes. Freshfield for Victoria Road, Formby for Lifeboat Road."],
              ["On the beach", "Check the tide times. RNLI lifeguards only cover Lifeboat Road in the spring and summer school holidays, so there are none in winter."],
              ["Dogs", "Welcome. Keep them under close control, especially near cattle and resting birds."],
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
              href="/formby-pinewoods"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Pinewoods Walks
            </Link>
            <Link
              href="/guides/parking-formby-beach"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Parking at Formby Beach
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
