import AiResumeWritting from "@/components/AiResumeWritting";
import CategorySection from "@/components/CategorySection";
import GetHiredQuickSteps from "@/components/GetHiredQuickSteps";
import HemoJobSearch from "@/components/HeroJobSearch";
import RecentJobPosts from "@/components/RecentJobPosts";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HemoJobSearch />
      <RecentJobPosts />
      <CategorySection />
      <AiResumeWritting />
      <GetHiredQuickSteps />
    </main>
  );
}
