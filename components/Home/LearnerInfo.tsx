"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";

type CompanyLogo = {
  name: string;
  logoPath: string;
  alt: string;
};

const logos: CompanyLogo[] = [
  {
    name: "OpenZeppelin",
    logoPath: "/assets/logos/companies/openzeppelin.png",
    alt: "OpenZeppelin Logo"
  },
  {
    name: "ORACLE",
    logoPath: "/assets/logos/companies/oracle.png",
    alt: "Oracle Logo"
  },
  {
    name: "MORPHEUS",
    logoPath: "/assets/logos/companies/morpheus.png",
    alt: "Morpheus Logo"
  },
  {
    name: "SAMSUNG",
    logoPath: "/assets/logos/companies/samsung.png",
    alt: "Samsung Logo"
  },
  {
    name: "monday.com",
    logoPath: "/assets/logos/companies/monday.png",
    alt: "Monday.com Logo"
  },
  {
    name: "segment",
    logoPath: "/assets/logos/companies/segment.png",
    alt: "Segment Logo"
  },
  {
    name: "PROTONET",
    logoPath: "/assets/logos/companies/protonet.png",
    alt: "Protonet Logo"
  },
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

// Component to handle individual logo with fallback
function LogoItem({ logo }: { logo: CompanyLogo }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to text if image fails to load
    return (
      <span className="text-sm font-semibold uppercase tracking-wide sm:text-base text-gray-600">
        {logo.name}
      </span>
    );
  }

  return (
    <Image
      src={logo.logoPath}
      alt={logo.alt}
      width={120}
      height={60}
      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-h-12 w-auto"
      onError={() => setImageError(true)}
    />
  );
}

export default function LearnerInfo() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14">
      <Container>
        {/* Logos */}
        <h3 className="mb-6 text-center text-lg font-semibold text-black sm:text-xl">
          Proud to See Our Learners At
        </h3>
        <ul className="mx-auto mb-10 grid max-w-5xl grid-cols-2 items-center gap-6 text-black/70 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              <LogoItem logo={logo} />
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


