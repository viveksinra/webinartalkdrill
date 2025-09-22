import Container from "@/components/Container";

type BulletPoint = {
  text: string;
};

const bulletPoints: BulletPoint[] = [
  { text: "Top insights into English mistakes that cost you promotions" },
  { text: "Practical frameworks to speak fluently in workplace" },
  { text: "Email & writing tips to sound clear and confident" },
  { text: "Confidence hacks for professional discussions" },
  { text: "Career-ready checklist of English skills" },
  { text: "Free bonuses" },
];

export default function AboutEvent() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left visuals */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative h-80 sm:h-96">
              {/* main card */}
              <div className="absolute inset-0 rounded-[28px] border border-black/5 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl" />

              {/* outline connector */}
              <div className="absolute -left-3 top-8 h-12 w-6 rounded-full border-2 border-indigo-300" />
              <div className="absolute right-8 top-1/2 h-2 w-14 -translate-y-1/2 rounded-full bg-indigo-200" />

              {/* floating small card */}
              <div className="absolute -bottom-4 right-8 h-36 w-52 rounded-2xl border border-black/5 bg-white/80 backdrop-blur-md shadow-lg" />

              {/* tiny square with play icon */}
              <div className="absolute -bottom-6 left-6 h-24 w-24 rounded-2xl border border-black/5 bg-white shadow-lg">
                <div className="flex h-full items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-7 w-7 text-pink-500"
                  >
                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.5v9l8-4.5-8-4.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-black sm:text-4xl">Know More About Event</h2>
            <p className="mb-4 text-black/80">
              Are you working hard but still missing out on that well‑deserved promotion or salary hike? The truth is,
              English fluency plays a bigger role in your career growth than you realize.
            </p>
            <p className="mb-6 text-black/80">
              This free webinar, "Unlock Higher Package with Fluent English", is designed to help professionals like you
              identify the communication mistakes holding you back and give you practical tools to speak with confidence,
              clarity, and impact. Led by an expert who has trained 10,000+ professionals and spoken on national and
              international stages, this session will equip you with the exact strategies to fast‑track your career.
            </p>

            <div>
              <p className="mb-3 font-semibold text-black">Here’s what you’ll get from the event:</p>
              <ul className="space-y-2">
                {bulletPoints.map((b) => (
                  <li key={b.text} className="flex items-start gap-3 text-sm text-black/80 sm:text-base">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-indigo-500" />
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


