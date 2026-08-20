"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-caps text-secondary">Just In</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              NEW TO THE COLLECTION
            </h2>
            <p className="mt-2 text-muted-foreground">Fresh finds worth discovering.</p>
          </div>
          <Link
            href="/new-arrivals"
            className="text-sm font-medium text-primary underline-offset-4 hover:text-secondary hover:underline"
          >
            View all →
          </Link>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
