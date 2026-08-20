import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-semibold tracking-[0.06em]">
              {company.name.toUpperCase()}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {company.description}
            </p>
            <div className="mt-6 space-y-1 text-sm text-primary-foreground/70">
              <p className="font-medium text-primary-foreground">{company.name}</p>
              <a href={`mailto:${company.email}`} className="block transition-colors hover:text-primary-foreground">
                {company.email}
              </a>
              <p className="pt-2">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
            </div>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-[11px] text-primary-foreground/50">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-[11px] text-primary-foreground/50">Collections</h3>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-[11px] text-primary-foreground/50">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="label-caps mb-4 mt-8 text-[11px] text-primary-foreground/50">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-[11px] text-primary-foreground/50">Policies</h3>
            <ul className="space-y-2.5">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/50">{company.copyright}</p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.icon}
                alt={method.name}
                width={40}
                height={28}
                className="opacity-70 brightness-0 invert"
              />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
