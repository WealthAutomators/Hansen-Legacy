import { company } from "@/data/company";
import { philosophy } from "@/data/homepage";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border shadow-sm">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our Story">
            <p>
              {company.name} was founded around a simple idea: everyday living deserves products that feel
              considered — practical enough for real life, beautiful enough to keep close.
            </p>
            <p className="mt-4">
              Based in {company.address.city}, {company.address.state}, we curate a broad marketplace spanning
              home, kitchen, technology, beauty, family, outdoor, and more. Every piece is selected for
              usefulness, quality, and lasting appeal — so shopping feels calm, not overwhelming.
            </p>
          </PageSection>
        </div>

        <div className="mx-auto max-w-3xl py-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary">{philosophy.title}</h2>
          <p className="mt-4 text-muted-foreground">{philosophy.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {philosophy.principles.map((item) => (
            <div key={item.mark} className="border border-border bg-card p-6 text-center shadow-sm">
              <span className="font-serif text-2xl font-semibold text-secondary/70">{item.mark}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <PageSection title="What Our Customers Say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 4).map((t) => (
              <div key={t.id} className="border border-border bg-card p-6 shadow-sm">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop Our Collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
