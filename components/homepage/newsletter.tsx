"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-primary py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-accent" />
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-3 text-primary-foreground/70">{newsletter.description}</p>
          {submitted ? (
            <p className="mt-8 text-sm font-medium text-primary-foreground">Thank you for subscribing.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-md border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/45 focus-visible:ring-primary-foreground/30"
              />
              <Button
                type="submit"
                size="lg"
                className="shrink-0 bg-accent text-white hover:bg-accent/90"
              >
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
