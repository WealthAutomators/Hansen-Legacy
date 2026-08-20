"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredCategories } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function FeaturedCategories() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="label-caps text-secondary">Collection</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            EXPLORE THE COLLECTION
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-5">
          {featuredCategories.map((cat, i) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={cn(
                "group relative overflow-hidden rounded-md",
                cat.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
                i === 0 && "md:col-span-2 md:row-span-1 md:aspect-[16/9]",
                i === 5 && "md:col-span-2 md:aspect-[16/9]"
              )}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/20 transition-colors duration-500 group-hover:bg-primary/40" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                <span className="font-serif text-lg font-medium text-primary-foreground sm:text-xl">
                  {cat.title}
                </span>
                <motion.span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
