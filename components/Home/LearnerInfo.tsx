import Container from "@/components/Container";

const logos = [
  "OpenZeppelin",
  "ORACLE",
  "MORPHEUS",
  "SAMSUNG",
  "monday.com",
  "segment",
  "PROTONET",
];

type Stat = {
  value: string;
  title: string;
  description: string;
  bg: string; // Tailwind bg color
  text: string; // Tailwind text color
};

const stats: Stat[] = [
  {
    value: "15,000+",
    title: "Learners already on",
    description: "our waitlist",
    bg: "bg-yellow-400",
    text: "text-black",
  },
  {
    value: "5,00,000+",
    title: "Funding secured to",
    description: "scale globally",
    bg: "bg-[#4537e6]",
    text: "text-white",
  },
  {
    value: "40+ Counties",
    title: "Learners practicing English",
    description: "with TalkDrill",
    bg: "bg-yellow-400",
    text: "text-black",
  },
  {
    value: "1,000,000+ Minutes",
    title: "Of English speaking practice",
    description: "delivered",
    bg: "bg-[#4537e6]",
    text: "text-white",
  },
];

export default function LearnerInfo() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14">
      <Container>
        {/* Logos */}
        <h3 className="mb-6 text-center text-lg font-semibold text-black sm:text-xl">
          Proud to See Our Learners At
        </h3>
        <ul className="mx-auto mb-10 grid max-w-5xl grid-cols-2 items-center gap-6 text-black/70 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((name) => (
            <li key={name} className="flex items-center justify-center">
              <span className="text-sm font-semibold uppercase tracking-wide sm:text-base">
                {name}
              </span>
            </li>
          ))}
        </ul>

        {/* About */}
        <h2 className="mb-6 text-center text-2xl font-semibold text-black sm:text-3xl">About TalkDrill</h2>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={s.value}
              className={`relative rounded-2xl ${s.bg} ${s.text} p-6 text-center shadow`}
            >
              {/* Overlapped avatars on the 3rd card for visual flair */}
         

              <div className="mt-2 text-xl font-extrabold sm:text-2xl">{s.value}</div>
              <div className="mt-2 text-xs sm:text-sm">
                <div>{s.title}</div>
                <div className="opacity-90">{s.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#register"
            className="text-base font-semibold text-[#4537e6] hover:underline"
          >
            Join 15,000+ Learners Today
          </a>
        </div>
      </Container>
    </section>
  );
}


