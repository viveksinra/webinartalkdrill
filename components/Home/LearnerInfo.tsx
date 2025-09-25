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
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
      
      <Container className="relative z-10">
        {/* Logos */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Trusted by Professionals</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Proud to See Our Learners At
          </h3>
        </div>
        
        <ul className="mx-auto mb-16 grid max-w-6xl grid-cols-2 items-center gap-8 text-black/70 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo, index) => (
            <li 
              key={logo.name} 
              className="flex items-center justify-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 p-4 rounded-xl hover:bg-white hover:shadow-lg">
                <LogoItem logo={logo} />
              </div>
            </li>
          ))}
        </ul>

        {/* About */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              TalkDrill
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming English communication skills for professionals worldwide
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((s, index) => (
            <div
              key={s.value}
              className={`group relative rounded-2xl ${s.bg} ${s.text} p-6 text-center shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating icon effect */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
              
              <div className="relative z-10">
                <div className="text-2xl font-extrabold sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-sm sm:text-base">
                  <div className="font-semibold">{s.title}</div>
                  <div className="opacity-90 mt-1">{s.description}</div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl px-8 py-6 border border-gray-200 shadow-lg">
            <p className="text-lg font-semibold text-gray-800">
              Join 15,000+ Learners Today
            </p>
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <span className="text-sm font-medium">Start Your Journey Now</span>
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    ✓
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#register"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


