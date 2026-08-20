import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "EVERYDAY,\nDONE BETTER.",
    description:
      "Thoughtfully selected products for home, work, family and everything in between.",
    ctaText: "SHOP THE COLLECTION",
    ctaLink: "/shop",
    secondaryCtaText: "Explore New Arrivals →",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const featuredCategories = [
  {
    id: "1",
    title: "Home",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
    aspect: "landscape" as const,
  },
  {
    id: "2",
    title: "Kitchen",
    href: "/categories/home-kitchen",
    image: "/banners/featured.jpg",
    aspect: "portrait" as const,
  },
  {
    id: "3",
    title: "Technology",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
    aspect: "portrait" as const,
  },
  {
    id: "4",
    title: "Workspace",
    href: "/categories/office-supplies",
    image: "/categories/office-supplies.jpg",
    aspect: "landscape" as const,
  },
  {
    id: "5",
    title: "Beauty",
    href: "/categories/beauty",
    image: "/categories/beauty.jpg",
    aspect: "portrait" as const,
  },
  {
    id: "6",
    title: "Family",
    href: "/categories/baby-products",
    image: "/categories/baby-products.jpg",
    aspect: "landscape" as const,
  },
  {
    id: "7",
    title: "Outdoor",
    href: "/categories/sports-outdoors",
    image: "/categories/sports-outdoors.jpg",
    aspect: "landscape" as const,
  },
  {
    id: "8",
    title: "Travel",
    href: "/categories/fashion-accessories",
    image: "/categories/fashion-accessories.jpg",
    aspect: "portrait" as const,
  },
  {
    id: "9",
    title: "Pets",
    href: "/categories/pet-supplies",
    image: "/categories/pet-supplies.jpg",
    aspect: "portrait" as const,
  },
  {
    id: "10",
    title: "Wellness",
    href: "/categories/health-wellness",
    image: "/categories/health-wellness.jpg",
    aspect: "landscape" as const,
  },
];

export const hansenEdit = {
  label: "THE HANSEN EDIT",
  title: "A quiet upgrade for the everyday table.",
  description:
    "A considered selection of products that make everyday living a little easier — starting with pieces you’ll reach for every week.",
  image: "/banners/about.jpg",
  productSlug: "ceramic-dutch-oven",
  ctaText: "Shop Now",
  ctaLink: "/product/ceramic-dutch-oven",
};

export const lifestyleCollections = [
  {
    id: "1",
    title: "At Home",
    description: "Warm layers, kitchen staples, and comforts for the rooms you live in.",
    image: "/categories/home-kitchen.jpg",
    href: "/categories/home-kitchen",
  },
  {
    id: "2",
    title: "At Work",
    description: "Desk essentials that keep focus calm and the day organized.",
    image: "/categories/office-supplies.jpg",
    href: "/categories/office-supplies",
  },
  {
    id: "3",
    title: "On The Go",
    description: "Bags, bottles, and travel-ready pieces for life between places.",
    image: "/categories/fashion-accessories.jpg",
    href: "/categories/fashion-accessories",
  },
  {
    id: "4",
    title: "For The Family",
    description: "Thoughtful finds for little ones, shared routines, and play.",
    image: "/categories/baby-products.jpg",
    href: "/categories/baby-products",
  },
  {
    id: "5",
    title: "For The Weekend",
    description: "Outdoor gear and easy upgrades for slower days ahead.",
    image: "/categories/sports-outdoors.jpg",
    href: "/categories/sports-outdoors",
  },
];

export const philosophy = {
  title: "BUILT AROUND THE EVERYDAY.",
  description:
    "Hansen Legacy brings together practical, thoughtful and beautifully selected products for the spaces, routines and moments that make up everyday life.",
  principles: [
    {
      mark: "01",
      title: "Thoughtful Selection",
      description: "Every product is chosen for usefulness, quality, and lasting appeal.",
    },
    {
      mark: "02",
      title: "Everyday Value",
      description: "Beautiful design shouldn’t mean compromising on what you can afford.",
    },
    {
      mark: "03",
      title: "Products Worth Keeping",
      description: "We favor pieces you’ll keep using — not ones you’ll replace next season.",
    },
  ],
};

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Fast Shipping",
    description: "Free shipping on orders over $75. Delivered in 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment information is protected with industry-standard encryption.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Customer Support",
    description: "Our friendly team is available Mon–Fri to help with orders and questions.",
  },
  {
    id: "5",
    icon: "star",
    title: "Trusted Quality",
    description: "Every product is carefully selected for quality, value, and reliability.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "ceramic-dutch-oven",
  "bath-towel-set",
  "canvas-weekender-tote",
  "digital-photo-frame",
  "natural-body-oil",
  "compact-picnic-blanket",
] as const;

export const homepageBestsellerSlugs = [
  "ceramic-dutch-oven",
  "dog-bed",
  "canvas-weekender-tote",
  "bath-towel-set",
  "insulated-water-bottle",
  "clay-face-mask-set",
  "coffee-grinder",
  "wooden-train-set",
] as const;

export const homepageFeaturedSlugs = [
  "ceramic-dutch-oven",
  "digital-photo-frame",
  "leather-desk-tray",
  "bath-towel-set",
  "organic-swaddle-set",
  "canvas-weekender-tote",
] as const;

export const homepageNewArrivalSlugs = [
  "digital-photo-frame",
  "bamboo-cutting-board",
  "linen-spa-robe",
  "natural-body-oil",
  "leather-desk-tray",
  "organic-swaddle-set",
  "weighted-sleep-mask",
  "strategy-card-games",
] as const;

export const seasonalFinds = {
  title: "SEASONAL FINDS",
  description: "Discover useful products and thoughtful upgrades for the season ahead.",
  image: "/banners/featured.jpg",
  ctaText: "SHOP SEASONAL PICKS",
  ctaLink: "/shop?sale=true",
  productSlugs: ["compact-picnic-blanket", "merino-wool-beanie", "natural-body-oil", "insulated-water-bottle"] as const,
};

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "SEASONAL FINDS",
  description: "Discover useful products and thoughtful upgrades for the season ahead.",
  buttonText: "SHOP SEASONAL PICKS",
  buttonLink: "/shop?sale=true",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "BUILT AROUND THE EVERYDAY.",
  description:
    "Hansen Legacy brings together practical, thoughtful and beautifully selected products for the spaces, routines and moments that make up everyday life.",
  checklist: [
    "Thoughtfully curated across every category",
    "Products chosen for lasting everyday use",
    "Reliable shipping nationwide",
    "Dedicated customer care",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "THE HANSEN EDIT",
  description: "A considered selection of products that make everyday living a little easier.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home-kitchen",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Outdoor", slug: "sports-outdoors" },
  { label: "Family", slug: "baby-products" },
];

export const newsletter = {
  title: "KEEP IN TOUCH.",
  description: "New arrivals, seasonal finds and occasional offers, delivered straight to your inbox.",
  placeholder: "Enter your email",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
