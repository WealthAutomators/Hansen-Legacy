import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCategories } from "@/components/homepage/featured-categories";
import { HansenEdit } from "@/components/homepage/hansen-edit";
import { BestSellers } from "@/components/homepage/best-sellers";
import { LifestyleCollection } from "@/components/homepage/lifestyle-collection";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { SeasonalFinds } from "@/components/homepage/seasonal-finds";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Philosophy } from "@/components/homepage/philosophy";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <HansenEdit />
      <BestSellers />
      <LifestyleCollection />
      <NewArrivals />
      <SeasonalFinds />
      <CustomerReviews />
      <Philosophy />
      <Newsletter />
    </>
  );
}
