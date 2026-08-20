"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background">
      <div className="relative min-h-[78vh] w-full md:min-h-[85vh]">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, scale: imageScale }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          <Image
            src={slide.image}
            alt={slide.headline.replace("\n", " ")}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-primary/10" />
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 sm:px-8 md:pb-12 lg:px-12">
          <motion.div
            className="max-w-lg border border-border bg-card/95 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="label-caps text-secondary">THE HANSEN EDIT</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl whitespace-pre-line">
              {slide.headline}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {slide.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                <Link
                  href={slide.secondaryCtaLink}
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-secondary hover:underline"
                >
                  {slide.secondaryCtaText}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
