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
    name: "Amazon",
    logoPath: "/assets/images/home/product/amazon.png",
    alt: "Amazon Logo"
  },
  {
    name: "Microsoft",
    logoPath: "/assets/images/home/product/Microsoft.png",
    alt: "Microsoft Logo"
  },
  {
    name: "Oracle",
    logoPath: "/assets/images/home/product/Oracle.png",
    alt: "Oracle Logo"
  },
  {
    name: "Samsung",
    logoPath: "/assets/images/home/product/samsung.png",
    alt: "Samsung Logo"
  },
  {
    name: "TCS",
    logoPath: "/assets/images/home/product/Tcs.png",
    alt: "TCS Logo"
  },
  {
    name: "Salesforce",
    logoPath: "/assets/images/home/product/Salesforce.png",
    alt: "Salesforce Logo"
  },
  {
    name: "Infosys",
    logoPath: "/assets/images/home/product/infosys.png",
    alt: "Infosys Logo"
  },
  {
    name: "Wipro",
    logoPath: "/assets/images/home/product/wipro.png",
    alt: "Wipro Logo"
  },
  {
    name: "HCL",
    logoPath: "/assets/images/home/product/hcl.png",
    alt: "HCL Logo"
  },
  {
    name: "IBM",
    logoPath: "/assets/images/home/product/ibm.png",
    alt: "IBM Logo"
  },
  {
    name: "ICICI",
    logoPath: "/assets/images/home/product/ICICI.png",
    alt: "ICICI Logo"
  },
  {
    name: "Indigo",
    logoPath: "/assets/images/home/product/indigo.png",
    alt: "Indigo Logo"
  },
  {
    name: "Unilever",
    logoPath: "/assets/images/home/product/uniliver.png",
    alt: "Unilever Logo"
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
    value: "10,000+",
    title: "Learners already on",
    description: "our waitlist",
    bg: "bg-yellow-400",
    text: "text-black",
  },
  {
    value: "500k+",
    title: "Funding secured to",
    description: "scale globally",
    bg: "bg-[#4537e6]",
    text: "text-white",
  },
  {
    value: "40+",
    title: "Countries with",
    description: "active learners",
    bg: "bg-yellow-400",
    text: "text-black",
  },
  {
    value: "1M+",
    title: "English speaking",
    description: "minutes delivered",
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
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 overflow-hidden overflow-x-hidden">
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
        
        {/* Animated Logo Carousel */}
        <div className="relative overflow-hidden mb-16 w-full h-16 sm:h-20">
          <div className="absolute inset-y-0 left-0 flex items-center gap-12 whitespace-nowrap animate-logo-scroll will-change-transform">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div 
                key={`first-${logo.name}`}
                className="flex-shrink-0 flex items-center justify-center group px-4"
              >
                <div className="transform transition-all duration-300 hover:scale-110 p-4 rounded-xl hover:bg-white/80 hover:shadow-lg">
                  <LogoItem logo={logo} />
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {logos.map((logo) => (
              <div 
                key={`second-${logo.name}`}
                className="flex-shrink-0 flex items-center justify-center group px-4"
              >
                <div className="transform transition-all duration-300 hover:scale-110 p-4 rounded-xl hover:bg-white/80 hover:shadow-lg">
                  <LogoItem logo={logo} />
                </div>
              </div>
            ))}
          </div>
        </div>
        

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
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((s, index) => (
            <div
              key={s.value}
              className={`group relative rounded-xl sm:rounded-2xl ${s.bg} ${s.text} p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-102 sm:hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating icon effect */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
              
              <div className="relative z-10">
                <div className="text-xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 font-extrabold">
                  {s.value}
                </div>
                <div className="text-xs sm:text-base font-semibold">
                  <div>{s.title}</div>
                  <div className="mt-1">{s.description}</div>
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
              Join 10,000+ Learners Today
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
              href="https://rzp.io/rzp/f0HDYyn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now @<span className="font-bold">₹21</span>
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


