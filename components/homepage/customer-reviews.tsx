"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="border-y border-border bg-card py-14 md:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="label-caps text-secondary">Notes from Customers</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            CUSTOMER NOTES
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {featured && (
            <article className="relative border border-border bg-background p-8 shadow-sm lg:col-span-5 lg:p-10">
              <div className="absolute left-6 top-4 font-serif text-6xl leading-none text-secondary/30">&ldquo;</div>
              <StarRating rating={featured.rating} showCount={false} size="md" />
              <p className="relative mt-6 font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                {featured.text}
              </p>
              <div className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium">{featured.name}</p>
                <p className="text-xs text-muted-foreground">{featured.location}</p>
                {featured.product && (
                  <p className="label-caps mt-2 text-[10px] text-secondary">
                    Purchased: {featured.product}
                  </p>
                )}
              </div>
            </article>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.slice(0, 4).map((t) => (
              <article
                key={t.id}
                className="border border-border bg-background p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                  {t.product && (
                    <p className="label-caps mt-1.5 text-[10px] text-secondary">
                      {t.product}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
