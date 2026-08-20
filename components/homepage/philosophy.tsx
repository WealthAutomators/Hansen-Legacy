import { philosophy } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function Philosophy() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-caps text-secondary">Our Philosophy</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            {philosophy.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {philosophy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-12 md:grid-cols-3 md:gap-10">
          {philosophy.principles.map((item) => (
            <div key={item.mark} className="text-center md:text-left">
              <span className="font-serif text-3xl font-semibold text-secondary/60">{item.mark}</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
