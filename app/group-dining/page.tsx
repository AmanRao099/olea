import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Button, Container } from "@/components/ui";
import { groupDining, site, whatsOn } from "@/lib/site";

export const metadata: Metadata = {
  title: "Group Dining",
  description: "Group lunches, dinners, celebrations and private dining at Olea Social in Covent Garden.",
};

const occasions = [
  { title: "Relaxed lunches", body: "Set lunch and meze lunch menus for teams, catch-ups and long afternoons." },
  { title: "Group dinners", body: "Sharing starters and Mediterranean mains, served from the kitchen to the table." },
  { title: "Celebrations", body: "Birthdays, anniversaries and festive gatherings in a warm, lively setting." },
  { title: "Corporate gatherings", body: "From business lunches to office parties, in the heart of Covent Garden." },
];

const spaces = whatsOn.items.filter((i) => i.slug !== "set-lunch");

export default function GroupDiningPage() {
  return (
    <>
      <section className="bg-forest-950">
        <div className="relative flex min-h-[70vh] items-end overflow-hidden pt-28">
          <Image
            src="/images/dining-room.jpg"
            alt="The Olea Social dining room with hanging plants and green banquettes"
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <Container className="relative pb-8">
            <h1 className="animate-rise font-display text-6xl font-light text-cream sm:text-8xl">Group dining</h1>
          </Container>
        </div>
        <div className="bg-forest-900">
          <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-white/80">{groupDining}</p>
            <a
              href="#enquire"
              className="eyebrow flex items-center gap-3 whitespace-nowrap border-white/20 text-white hover:text-brass md:border-l md:pl-8"
            >
              Plan your event <Arrow />
            </a>
          </Container>
        </div>
      </section>

      <section className="bg-sand py-16 text-ink sm:py-24">
        <Container>
          <h2 className="eyebrow font-medium">Made for coming together</h2>
          <div className="mt-2 h-px w-8 bg-leaf" />
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((o) => (
              <div key={o.title} className="reveal bg-sand p-8">
                <h3 className="font-display text-2xl">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{o.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 sm:py-24">
        <Container>
          <h2 className="eyebrow font-medium text-white">Spaces &amp; occasions</h2>
          <div className="mt-2 h-px w-8 bg-brass" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {spaces.map((item) => (
              <Link key={item.slug} href={`/whats-on/${item.slug}`} className="group relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={item.heroImage}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/20" />
                <div className="absolute left-5 top-5">
                  <p className="font-display text-3xl text-white">{item.title}</p>
                  <p className="eyebrow mt-1 text-[10px] text-white/80">Covent Garden</p>
                </div>
                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white group-hover:bg-white group-hover:text-forest-900">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="enquire" className="scroll-mt-20 bg-forest-950 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brass">Enquiries</p>
            <h2 className="mt-4 font-display text-4xl font-light text-cream sm:text-5xl">Let&apos;s plan your gathering</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/70">
              Share your preferred date and group size with the team and they&apos;ll help you plan the
              right menu and space — from a long lunch to a private Christmas celebration.
            </p>
          </div>
          <div className="space-y-4 border border-white/10 p-8 lg:col-span-5">
            <p className="eyebrow text-[10px] text-white/50">Call the restaurant</p>
            <a href={site.phoneHref} className="block font-display text-3xl text-cream hover:text-brass">
              {site.phone}
            </a>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button href="/book">Book online</Button>
              <Button href="/menu#christmas" variant="light">
                Festive menus
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
