import Container from "@/components/Container";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative w-full bg-white py-12 text-black sm:py-16">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl animate-fade-in">
          What You&apos;ll Gain by Attending
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            imageSrc="/assets/images/home/discover.png"
            title={"Discover Career-\nCosting Mistakes"}
            description="Learn the most common English errors and how to fix them instantly"
            delay="0"
          />
          <BenefitCard
            imageSrc="/assets/images/home/master.png"
            title={"Master Confident\nCommunication"}
            description="Learn how to speak fluently with workplace‑ready global English expressions"
            delay="100"
          />
          <BenefitCard
            imageSrc="/assets/images/home/boost.png"
            title={"Boost  Your Promotion\nChances"}
            description="Proven strategies to showcase leadership and clarity"
            delay="200"
          />
          <BenefitCard
            imageSrc="/assets/images/home/bonus.png"
            title={"FREE Bonus Worth\n₹10,000"}
            description="Fast‑track your journey with expert tutors, global learners and AI‑based practice"
            delay="300"
          />
        </div>

        <div className="mt-10 sm:mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {/* Bonus Content Grid */}
          <div className="mb-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
            <h3 className="mb-6 text-center text-lg font-semibold text-gray-800">
              🎁 FREE Bonus Bundle Worth ₹10,499
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <BonusItem title="Goal Breakdown Worksheet" price="₹1,499" />
              <BonusItem title="Notion Vocabulary Tracker" price="₹2,499" />
              <BonusItem title="Checklist Template" price="₹999" />
              <BonusItem title="Extra Resources Bundle" price="₹3,499" />
              <BonusItem title="Vocabulary Excel Lists" price="₹1,999" />
              <BonusItem title="Smart Tools Access" price="Free" />
            </div>
          </div>

          {/* Enhanced Register Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <a
              href="#register"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#4537e6] to-[#6366f1] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#4537e6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
            <p className="mt-3 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              🔥 Limited seats available • Join 500+ professionals
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

type BenefitCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  delay: string;
};

function BenefitCard({ imageSrc, title, description, delay }: BenefitCardProps) {
  return (
    <div 
      className="group animate-fade-in-up rounded-2xl bg-white p-6 text-black shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-yellow-300 to-yellow-500 ring-4 ring-[#4537e6] overflow-hidden transition-all duration-300 group-hover:ring-[#6366f1] group-hover:scale-110 group-hover:rotate-3">
        <Image
          src={imageSrc}
          alt={title}
          width={48}
          height={48}
          className="object-contain transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug whitespace-pre-line transition-colors duration-300 group-hover:text-[#4537e6]">{title}</h3>
      <p className="text-sm text-black/70 transition-colors duration-300 group-hover:text-black/80">{description}</p>
    </div>
  );
}

type BonusItemProps = {
  title: string;
  price: string;
};

function BonusItem({ title, price }: BonusItemProps) {
  return (
    <div className="group flex items-center justify-between rounded-lg bg-white/60 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:scale-[1.02] cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#4537e6] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#6366f1]"></div>
        <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-800">{title}</span>
      </div>
      <span className="text-sm font-semibold text-[#4537e6] transition-all duration-300 group-hover:text-[#6366f1] group-hover:scale-105">{price}</span>
    </div>
  );
}
