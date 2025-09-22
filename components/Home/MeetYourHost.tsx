import Image from "next/image";
import Container from "@/components/Container";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "10k+", label: "Learners Guided" },
  { value: "200+", label: "Workshops & Talks" },
  { value: "8.9/10", label: "Avg. Session Rating" },
];

export default function MeetYourHost() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-2xl p-[3px] shadow-xl bg-[linear-gradient(135deg,#8a6b00_0%,#ffd700_25%,#ffcc33_50%,#b8860b_75%,#8a6b00_100%)]">
              <div className="relative overflow-hidden rounded-xl bg-white p-4">
                <Image
                  src="/assets/images/home/vishayMain.png"
                  alt="Host portrait"
                  width={560}
                  height={640}
                  className="mx-auto h-auto w-full max-w-[420px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4537e6]">Meet Your Host</p>
            <h2 className="mb-3 text-3xl font-extrabold text-black sm:text-4xl">Vishay — Communication Coach</h2>
            <p className="mb-4 text-black/80">
              Vishay helps professionals speak with clarity, confidence, and impact. Through practical frameworks and
              workplace‑ready English, he has enabled thousands of learners to perform better in interviews, meetings,
              and client conversations.
            </p>
            <ul className="mb-6 space-y-2">
              {["Industry‑tested speaking templates", "Email and writing best practices", "Mindset and confidence hacks"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black/80 sm:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 text-[#4537e6]"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.278a.75.75 0 1 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-black/10 p-4 text-center">
                  <div className="text-xl font-extrabold text-[#4537e6] sm:text-2xl">{s.value}</div>
                  <div className="mt-1 text-xs text-black/70 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


