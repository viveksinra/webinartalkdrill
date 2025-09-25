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
  { text: "Get" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full text-white motion-safe:animate-fade-in">
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
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-red-500/60" aria-hidden />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden />
            </span>
            Live Webinar
          </p>

          <h1 className="mb-4 font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-white bg-clip-text text-4xl text-transparent sm:text-5xl">Unlock Higher</span>
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-white bg-clip-text text-4xl text-transparent sm:text-5xl">Package With</span>
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-white bg-clip-text text-4xl text-transparent sm:text-5xl">Fluent English</span>
          </h1>

          <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 backdrop-blur-sm ring-1 ring-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-yellow-300"
              aria-hidden
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75ZM5.25 6A1.5 1.5 0 0 0 3.75 7.5v11.25A1.5 1.5 0 0 0 5.25 20.25h13.5A1.5 1.5 0 0 0 20.25 18.75V7.5A1.5 1.5 0 0 0 18.75 6H5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm">
              <span className="text-white/90">Friday, </span>
              <span className="font-semibold text-yellow-300">28 September 2025</span>
              <span className="text-white/90"> at </span>
              <span className="font-semibold text-yellow-300">1:00 PM</span>
            </div>
          </div>

          <ul className="mb-6 space-y-3">
            {bulletPoints.map((b, index) => (
              <li 
                key={b.text} 
                className="group flex items-start gap-3 text-sm transition-all duration-300 motion-safe:hover:translate-x-1 sm:text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-5 w-5 text-yellow-300 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.278a.75.75 0 1 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-relaxed">
                  {b.text}
                  {b.highlight ? (
                    <>
                      {" "}
                      <span className="font-semibold text-yellow-300 transition-colors duration-300 group-hover:text-yellow-200">
                        {b.highlight}
                      </span>
                    </>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 ease-out motion-safe:hover:scale-[1.03] hover:bg-yellow-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-200/50 motion-safe:active:scale-[0.98] sm:w-auto sm:text-sm md:px-8 md:py-3.5">
              <span className="relative z-[1] flex items-center gap-2">
                <span>Register Now @ <span className="font-bold">₹21</span></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 md:h-5 md:w-5"
                  aria-hidden
                >
                  <path d="M13.5 4.5a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H3.75a.75.75 0 0 1 0-1.5h14.47l-4.72-4.72a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-full">
                <span className="absolute -left-1/2 top-0 h-full w-1/3 -translate-x-full rotate-12 bg-white/40 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[250%]" aria-hidden />
              </span>
            </button>
            
            <div className="flex items-center gap-2 text-xs text-white/70 sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 text-green-400"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>147+ people registered today</span>
            </div>
          </div>
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


