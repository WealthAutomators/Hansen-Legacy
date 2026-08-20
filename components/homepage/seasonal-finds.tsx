"use client";

import Image from "next/image";
import Link from "next/link";
import { seasonalFinds } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SeasonalFinds() {
  const products = getProductsBySlugs(seasonalFinds.productSlugs);

  return (
    <section className="bg-background py-14 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-md border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src={seasonalFinds.image}
                alt={seasonalFinds.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="label-caps text-secondary">This Season</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                {seasonalFinds.title}
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">{seasonalFinds.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    className="group flex gap-3 border border-border bg-background p-2 transition-colors hover:border-secondary/40"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 py-0.5">
                      <p className="truncate text-sm font-medium text-foreground">{product.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {formatPrice(product.salePrice ?? product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 w-fit bg-accent text-white hover:bg-accent/90">
                <Link href={seasonalFinds.ctaLink}>{seasonalFinds.ctaText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
