"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { company } from "@/data/company";
import { announcementBar, navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { SearchBar } from "@/components/navbar/search-bar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-primary py-1.5 text-center">
        <p className="label-caps text-[10px] text-primary-foreground sm:text-[11px]">
          {announcementBar}
        </p>
      </div>
      <CatalogHeader />
    </div>
  );
}

function CatalogHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="relative flex h-16 items-center justify-between lg:h-[4.5rem]">
          <div className="flex w-20 items-center sm:w-28">
            <button
              type="button"
              className="flex h-10 items-center gap-2 text-foreground transition-colors hover:text-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="label-caps hidden text-[10px] text-muted-foreground lg:inline">Menu</span>
            </button>
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="font-serif text-xl font-semibold tracking-[0.08em] text-primary sm:text-2xl lg:text-[1.75rem]">
              {company.name.toUpperCase()}
            </span>
          </Link>

          <div className="flex w-20 items-center justify-end gap-0.5 sm:w-36 sm:gap-1">
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-secondary lg:flex"
              onClick={() => setDesktopSearchOpen(!desktopSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="/wishlist"
              className="relative hidden h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-secondary sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-secondary"
              aria-label="Cart"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {itemCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </Container>

      <nav className="hidden border-t border-border lg:block">
        <Container>
          <ul className="flex items-center justify-center gap-1 py-3">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="label-caps px-3 py-1.5 text-[11px] text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Mobile: full-width search under header */}
      <div className="border-t border-border lg:hidden">
        <SearchBar compact />
      </div>

      {/* Desktop: expandable search */}
      {desktopSearchOpen && (
        <div className="hidden border-t border-border lg:block">
          <SearchBar compact onClose={() => setDesktopSearchOpen(false)} />
        </div>
      )}

      {mobileOpen && (
        <div className="absolute left-0 right-0 z-50 border-b border-border bg-card shadow-md">
          <Container className="py-4">
            <ul className="space-y-0.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:text-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/wishlist"
                  className="block px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:text-secondary sm:hidden"
                  onClick={() => setMobileOpen(false)}
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="block px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  All Categories
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
