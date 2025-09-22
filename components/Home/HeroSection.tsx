import Image from "next/image";
import Container from "@/components/Container";

type BulletPoint = {
  text: string;
  highlight?: string;
};

const bulletPoints: BulletPoint[] = [
  {
    text: "4x your salary by mastering",
    highlight: "communication skills",
  },
  { text: "Perform and negotiate better in interviews" },
  { text: "Feel more confident in meetings" },
  { text: "Get Bonus worth ₹10,000 for FREE" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full text-white">
      {/* full-bleed background image (optional) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/home/herobackground.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container className="py-10 sm:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <p className="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
            Live Webinar
          </p>

          <h1 className="mb-4 font-extrabold leading-tight">
            <span className="block text-4xl sm:text-5xl">Unlock higher</span>
            <span className="block text-4xl sm:text-5xl">package with</span>
            <span className="block text-4xl sm:text-5xl">fluent English</span>
          </h1>

          <p className="mb-4 text-sm text-white/90">
            Friday, <span className="text-yellow-300">28 September 2025</span>, at
            <span className="ml-1 text-yellow-300">1:00 PM</span>
          </p>

          <ul className="mb-6 space-y-2">
            {bulletPoints.map((b) => (
              <li key={b.text} className="flex items-start gap-3 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-5 w-5 text-yellow-300"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.278a.75.75 0 1 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {b.text}
                  {b.highlight ? (
                    <>
                      {" "}
                      <span className="font-semibold text-yellow-300">
                        {b.highlight}
                      </span>
                    </>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200">
            Register Now @ ₹21
          </button>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-2xl p-[3px] shadow-xl bg-[linear-gradient(135deg,#8a6b00_0%,#ffd700_25%,#ffcc33_50%,#b8860b_75%,#8a6b00_100%)]">
            <div className="relative overflow-hidden rounded-xl bg-white p-4">
              <Image
                src="/assets/images/home/vishayMain.png"
                alt="Speaker portrait"
                width={560}
                height={640}
                className="mx-auto h-auto w-full max-w-[420px]"
                priority
              />
            </div>   

   
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}


