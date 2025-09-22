import HeroSection from "@/components/Home/HeroSection";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import TimerComponent from "@/components/Home/TimerComponent";
import AboutEvent from "@/components/Home/AboutEvent";
import MeetYourHost from "@/components/Home/MeetYourHost";
import LearnerInfo from "@/components/Home/LearnerInfo";
import LearnerReview from "@/components/Home/LearnerReview";
import HomeFaq from "@/components/Home/HomeFaq";
export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <Section2 />
      <Section3 />
      <TimerComponent />
      <AboutEvent />
      <MeetYourHost />
      <LearnerInfo />
      <LearnerReview />
      <HomeFaq />
    </div>
  );
}
