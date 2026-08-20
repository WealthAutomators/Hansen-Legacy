import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Technology",
    image: "/categories/electronics.jpg",
    description: "Thoughtful tech for home displays, charging, and everyday convenience.",
    productCount: 2,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Tools and tableware that make cooking and gathering feel intentional.",
    productCount: 3,
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Soft textiles and spa-minded essentials for daily rituals.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.jpg",
    description: "Play that teaches through discovery, craft, and curiosity.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet Supplies",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and care pieces designed for the animals we live with.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Clean formulas and quiet luxuries for skin and self-care.",
    productCount: 2,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Outdoor",
    image: "/categories/sports-outdoors.jpg",
    description: "Gear for movement, weekends outside, and life on the go.",
    productCount: 3,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Workspace",
    image: "/categories/office-supplies.jpg",
    description: "Desk companions that bring order and calm to focused work.",
    productCount: 2,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Travel",
    image: "/categories/fashion-accessories.jpg",
    description: "Bags, layers, and accessories ready for everyday journeys.",
    productCount: 2,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Family",
    image: "/categories/baby-products.jpg",
    description: "Gentle, practical pieces for little ones and family routines.",
    productCount: 2,
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.jpg",
    description: "Timeless play for rainy afternoons and family game nights.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Wellness",
    image: "/categories/health-wellness.jpg",
    description: "Small upgrades that support rest, recovery, and balance.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
