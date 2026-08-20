import { NavLink } from "@/types";

export const announcementBar = "CURATED FOR EVERYDAY LIVING";

export const navigationLinks: NavLink[] = [
  { label: "Shop All", href: "/shop" },
  { label: "Home", href: "/categories/home-kitchen" },
  { label: "Technology", href: "/categories/electronics" },
  { label: "Kitchen", href: "/categories/home-kitchen" },
  { label: "Family", href: "/categories/baby-products" },
  { label: "Beauty", href: "/categories/beauty" },
  { label: "Outdoor", href: "/categories/sports-outdoors" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Deals", href: "/shop?sale=true" },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals", href: "/shop?sale=true" },
  ],
  collections: [
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Technology", href: "/categories/electronics" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Outdoor", href: "/categories/sports-outdoors" },
    { label: "Family", href: "/categories/baby-products" },
  ],
  customerCare: [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Support", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Our Philosophy", href: "/about" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
