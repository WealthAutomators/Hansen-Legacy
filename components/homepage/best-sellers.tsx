"use client";

import Link from "next/link";
import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);
  const [featured, ...rest] = products;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-caps text-secondary">Bestsellers</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              MOST LOVED
            </h2>
          </div>
          <Link
            href="/best-sellers"
            className="text-sm font-medium text-primary underline-offset-4 hover:text-secondary hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-12 md:gap-5 md:overflow-visible">
          {featured && (
            <div className="w-[70vw] shrink-0 sm:w-[45vw] md:col-span-5 md:w-auto">
              <ProductCard product={featured} className="h-full" />
            </div>
          )}
          <div className="flex gap-4 md:col-span-7 md:grid md:grid-cols-3 md:gap-4">
            {rest.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className={cn("w-[55vw] shrink-0 sm:w-[36vw] md:w-auto")}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
