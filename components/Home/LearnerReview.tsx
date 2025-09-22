import Image from "next/image";
import Container from "@/components/Container";

type Review = {
  name: string;
  text: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    name: "Ravi Kumar",
    text:
      "Before TalkDrill, I struggled in client calls. After practicing daily, I finally cracked my dream MNC interview with confidence. Truly life‑changing!",
    avatar: "/assets/illustrations/characters/character-present.webp",
  },
  {
    name: "Priya Sharma",
    text:
      "The webinar gave me practical tips, not theory. The free demo session and TalkDrill practice coins made it so easy to continue my learning journey.",
    avatar: "/assets/illustrations/characters/character-study.webp",
  },
  {
    name: "Arjun Mehta",
    text:
      "In just 30 days, my fluency improved drastically. I now handle presentations and negotiations without fear. TalkDrill made me believe in myself again.",
    avatar: "/assets/illustrations/characters/character-happy-jump.webp",
  },
];

export default function LearnerReview() {
  return (
    <section className="relative w-full bg-[#4537e6] py-12 text-white sm:py-16">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl">
          What Our Learners Say About Us
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-xl bg-yellow-400 px-6 py-8 text-center text-black shadow-md">
              <div className="mx-auto mb-4 h-14 w-14 overflow-hidden rounded-full ring-4 ring-white/60">
                <Image src={r.avatar} alt={r.name} width={56} height={56} className="h-full w-full object-cover" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">{r.name}</h3>
              <p className="mx-auto max-w-[28ch] text-xs opacity-90 sm:max-w-none sm:text-sm">{r.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm opacity-90 sm:mt-12">
          Don't Just Read Reviews—Experience It Yourself
        </p>
      </Container>
    </section>
  );
}


