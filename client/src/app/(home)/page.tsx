import CategorySection from "@/components/CategorySection";
import GetHiredQuickSteps from "@/components/GetHiredQuickSteps";
import HemoJobSearch from "@/components/HeroJobSearch";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HemoJobSearch />
      <CategorySection />
      <GetHiredQuickSteps />
    </main>
  );
}
