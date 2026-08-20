"use client";

import Image from "next/image";
import Link from "next/link";
import { hansenEdit } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";

export function HansenEdit() {
  const product = getProductBySlug(hansenEdit.productSlug);

  return (
    <section className="border-y border-border bg-card py-14 md:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="label-caps text-secondary">{hansenEdit.label}</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            THE HANSEN EDIT
          </h2>
          <p className="mt-3 text-muted-foreground">{hansenEdit.description}</p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md lg:col-span-7 lg:aspect-auto lg:min-h-[520px]">
            <Image
              src={hansenEdit.image}
              alt={hansenEdit.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="flex flex-col justify-center border border-border bg-background p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <p className="label-caps text-secondary">Featured Piece</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-primary md:text-3xl">
              {hansenEdit.title}
            </h3>
            {product && (
              <>
                <div className="relative mt-6 aspect-square w-full max-w-[220px] overflow-hidden rounded-md border border-border">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
                <p className="mt-5 text-sm font-medium text-foreground">{product.name}</p>
                <div className="mt-2">
                  <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  {product.salePrice ? (
                    <>
                      <span className="text-lg font-semibold text-accent">
                        {formatPrice(product.salePrice)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-semibold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </>
            )}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A catalog favorite — chosen for everyday cooking and the quiet beauty of a well-set table.
            </p>
            <Button asChild className="mt-6 w-fit" size="lg">
              <Link href={hansenEdit.ctaLink}>{hansenEdit.ctaText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
