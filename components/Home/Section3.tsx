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

        <div className="mt-10 text-center text-xs text-black/70 sm:mt-12 sm:text-sm">
          <p>
            Goal Breakdown Worksheet (₹1,499), Notion Vocabulary Tracker (₹2,499), Checklist Template (₹999),
            Extra Resources Bundle (₹3,499), Vocabulary Excel Lists (₹1,999), Smart Tools access
          </p>
          <a href="#register" className="mt-6 inline-block text-lg font-semibold text-[#4537e6] hover:underline">
            Register now
          </a>
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
