"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lifestyleCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function LifestyleCollection() {
  return (
    <section className="border-y border-border bg-card py-14 md:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="label-caps text-secondary">Collections</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            FOR THE WAY YOU LIVE
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
          {lifestyleCollections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative w-[72vw] shrink-0 overflow-hidden rounded-md sm:w-[42vw] md:w-auto"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 70vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-primary-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-primary-foreground/75">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="mb-1 h-4 w-4 shrink-0 text-primary-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
