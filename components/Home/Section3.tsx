import Container from "@/components/Container";

export default function Section3() {
  return (
    <section className="relative w-full bg-white py-12 text-black sm:py-16">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl">
          What You&apos;ll Gain by Attending
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            emoji="📝"
            title={"Discover Career-\nCosting Mistakes"}
            description="Learn the most common English errors and how to fix them instantly"
          />
          <BenefitCard
            emoji="🎙️"
            title={"Master Confident\nCommunication"}
            description="Learn how to speak fluently with workplace‑ready global English expressions"
          />
          <BenefitCard
            emoji="💼"
            title={"Boost  Your Promotion\nChances"}
            description="Proven strategies to showcase leadership and clarity"
          />
          <BenefitCard
            emoji="🎁"
            title={"FREE Bonus Worth\n₹10,000"}
            description="Fast‑track your journey with expert tutors, global learners and AI‑based practice"
          />
        </div>

        <div className="mt-10 sm:mt-12">
          {/* Bonus Content Grid */}
          <div className="mb-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8">
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
          <div className="text-center">
            <a
              href="#register"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#4537e6] to-[#6366f1] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#4537e6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
            <p className="mt-3 text-sm text-gray-600">
              🔥 Limited seats available • Join 500+ professionals
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

type BenefitCardProps = {
  emoji: string;
  title: string;
  description: string;
};

function BenefitCard({ emoji, title, description }: BenefitCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 text-black shadow-sm">
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-[28px] bg-yellow-400 text-3xl ring-4 ring-[#4537e6]">
        <span aria-hidden>{emoji}</span>
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug whitespace-pre-line">{title}</h3>
      <p className="text-sm text-black/70">{description}</p>
    </div>
  );
}

type BonusItemProps = {
  title: string;
  price: string;
};

function BonusItem({ title, price }: BonusItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/60 p-3 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#4537e6]"></div>
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
      <span className="text-sm font-semibold text-[#4537e6]">{price}</span>
    </div>
  );
}
