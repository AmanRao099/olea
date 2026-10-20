import type { Metadata } from "next";
import Link from "next/link";
import { LeafMark } from "@/components/brand";
import { Container, Rule } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Table",
  description: "Reserve a table at Olea Social, Covent Garden.",
};

export default function BookPage() {
  return (
    <section className="bg-forest-900 pb-20 pt-32">
      <Container>
        <p className="eyebrow text-brass">Reserve a table</p>
        <h1 className="mt-4 font-display text-5xl font-light text-cream sm:text-6xl">
          Book your <span className="italic">table</span>
        </h1>
        <Rule className="mt-5" />
        <p className="mt-6 max-w-xl font-display text-lg text-white/80">
          Lunch, dinner, pre-theatre and group bookings at Olea Social, Covent Garden.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Replace this panel with the restaurant's booking widget embed (e.g. OpenTable / SevenRooms). */}
          <div
            aria-label="Booking"
            className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cream p-10 text-center text-ink lg:col-span-8"
          >
            <LeafMark className="h-24 w-auto text-leaf" />
            <p className="max-w-md font-display text-3xl leading-snug">Call the team to reserve your table</p>
            <a href={site.phoneHref} className="font-display text-4xl text-forest-800 underline-offset-8 hover:underline">
              {site.phone}
            </a>
            <p className="max-w-sm text-sm text-ink/60">
              For group bookings and private dining, share your preferred date and group size and the team
              will help you plan.
            </p>
          </div>

          <div className="space-y-px bg-white/10 lg:col-span-4">
            <div className="bg-forest-800 p-8">
              <h2 className="eyebrow text-leaf-light">Opening hours</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="text-white">{h.days}</dt>
                    <dd className="text-white/70">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-forest-800 p-8">
              <h2 className="eyebrow text-leaf-light">Address</h2>
              <address className="mt-4 text-sm not-italic leading-relaxed text-white/80">
                {site.address.line1}
                <br />
                {site.address.city} {site.address.postcode}
              </address>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="eyebrow mt-4 inline-block text-[10px] text-brass hover:text-white">
                Map &amp; directions →
              </a>
            </div>
            <div className="bg-forest-800 p-8">
              <h2 className="eyebrow text-leaf-light">Before you visit</h2>
              <Link href="/menu" className="mt-4 block font-display text-2xl text-cream hover:text-brass">
                Browse the menus →
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/50">
          For information relating to allergens, please speak to a member of our team.
        </p>
      </Container>
    </section>
  );
}
