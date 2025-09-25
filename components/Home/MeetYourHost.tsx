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
          <div className="relative mx-auto w-full max-w-md group">
            <div className="relative rounded-2xl p-[3px] shadow-xl bg-[linear-gradient(135deg,#8a6b00_0%,#ffd700_25%,#ffcc33_50%,#b8860b_75%,#8a6b00_100%)] transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-pulse-slow">
              <div className="relative overflow-hidden rounded-xl bg-white p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/assets/images/home/vishayMain.png"
                  alt="Host portrait"
                  width={560}
                  height={640}
                  className="mx-auto h-auto w-full max-w-[420px] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Floating elements for extra visual appeal */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4537e6] rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#ffd700] rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fadeIn">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#4537e6] transition-all duration-300 hover:text-[#5d4cf7] hover:tracking-widest">Meet Your Host</p>
            <h2 className="mb-3 text-3xl font-extrabold text-black sm:text-4xl transition-colors duration-300 hover:text-[#4537e6]">Vishay Kaushik — Communication Coach</h2>
            <p className="mb-4 text-black/80 transition-colors duration-300 hover:text-black">
              Vishay helps professionals speak with clarity, confidence, and impact. Through practical frameworks and
              workplace‑ready English, he has enabled thousands of learners to perform better in interviews, meetings,
              and client conversations.
            </p>
            <ul className="mb-6 space-y-2">
              {["Industry‑tested speaking templates", "Email and writing best practices", "Mindset and confidence hacks"].map(
                (item, index) => (
                  <li key={item} className="group flex items-start gap-3 text-sm text-black/80 sm:text-base transition-all duration-300 hover:text-black hover:translate-x-2 hover:bg-[#4537e6]/5 hover:-ml-2 hover:pl-4 hover:py-2 hover:rounded-lg cursor-pointer" style={{animationDelay: `${index * 100}ms`}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 text-[#4537e6] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#5d4cf7]"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.278a.75.75 0 1 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="transition-all duration-300 group-hover:font-medium">{item}</span>
                  </li>
                )
              )}
            </ul>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, index) => (
                <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-black/10 p-4 text-center transition-all duration-300 hover:border-[#4537e6]/30 hover:bg-gradient-to-br hover:from-[#4537e6]/5 hover:to-[#ffd700]/10 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer animate-slideUp" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#4537e6]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#ffd700] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"></div>
                  
                  <div className="relative z-10">
                    <div className="text-xl font-extrabold text-[#4537e6] sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-[#5d4cf7]">{s.value}</div>
                    <div className="mt-1 text-xs text-black/70 sm:text-sm transition-colors duration-300 group-hover:text-black/90">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


