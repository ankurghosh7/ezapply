import HemoJobSearch from "@/components/HeroJobSearch";
// import Image from "next/image";
import CategorySection from "@/components/CategorySection";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <HemoJobSearch />
      <CategorySection />
    </main>
  );
}
