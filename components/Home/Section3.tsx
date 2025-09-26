"use client";

import Container from "@/components/Container";
import Image from "next/image";

type BenefitData = {
  imageSrc: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

const benefits: BenefitData[] = [
  {
    imageSrc: "/assets/images/home/discover.png",
    title: "Discover Career-\nCosting Mistakes",
    description: "Learn the most common English errors and how to fix them instantly",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50"
  },
  {
    imageSrc: "/assets/images/home/master.png",
    title: "Master Confident\nCommunication",
    description: "Learn how to speak fluently with workplace‑ready global English expressions",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    imageSrc: "/assets/images/home/boost.png",
    title: "Boost Your\nPromotion Chances",
    description: "Proven strategies to showcase leadership and clarity",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    imageSrc: "/assets/images/home/bonus.png",
    title: "FREE Bonus Worth\n₹10,000",
    description: "Fast‑track your journey with expert tutors, global learners and AI‑based practice",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50"
  }
];

const bonusItems = [
  { title: "Goal Breakdown Worksheet", price: "₹1,499", icon: "📋", description: "Step-by-step career planning guide" },
  { title: "Notion Vocabulary Tracker", price: "₹2,499", icon: "📚", description: "Smart vocabulary building system" },
  { title: "Professional Checklist Template", price: "₹999", icon: "✅", description: "Communication readiness assessment" },
  { title: "Extra Resources Bundle", price: "₹3,000", icon: "📦", description: "Comprehensive learning materials" },
  { title: "Vocabulary Excel Lists", price: "₹1,999", icon: "📊", description: "Industry-specific word collections" },
  { title: "Smart Tools Access", price: "Free", icon: "🤖", description: "AI-powered practice platform" }
];

export default function Section3() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50/50 via-white to-indigo-50/30 py-16 sm:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-16 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-2xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200/50 mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-medium text-indigo-800">Your Learning Outcomes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-4">
              What You&apos;ll Gain
              <span className="block text-3xl sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                by Attending
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your communication skills with these powerful learning outcomes
            </p>
          </div>

          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} {...benefit} delay={index * 150} />
            ))}
          </div>

          {/* Enhanced Bonus Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-indigo-100/50 p-8 sm:p-12 shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-10"></div>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="bonus-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.1" />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#bonus-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold shadow-lg mb-4">
                    <span className="text-2xl">🎁</span>
                    <span className="text-lg">FREE BONUS BUNDLE</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    Exclusive Resources Worth
                    <span className="block text-4xl sm:text-5xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹10,000
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600">
                    Get instant access to premium resources that accelerate your learning
                  </p>
                </div>

                {/* Enhanced Bonus Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                  {bonusItems.map((item, index) => (
                    <BonusItem key={item.title} {...item} delay={index * 100} />
                  ))}
                </div>

                {/* Value proposition */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-lg">
                    <div className="text-3xl">💎</div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Premium Value</div>
                      <div className="text-sm text-gray-600">Usually sold separately for thousands</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">FREE</div>
                      <div className="text-sm text-gray-500 line-through">₹10,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="relative inline-block">
              {/* Floating elements around button */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-xl animate-bounce">
                🚀
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                ✨
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white text-sm animate-bounce" style={{animationDelay: '1s'}}>
                💎
              </div>

              {/* Main CTA Button */}
              <a
                href="https://rzp.io/rzp/f0HDYyn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-indigo-500/50 focus:outline-none focus:ring-4 focus:ring-purple-300 animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Reserve My Spot Now
                  <svg className="h-6 w-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>

            {/* Enhanced Social Proof */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">500+ Professionals Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Limited Seats Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">100% Free Access</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold text-gray-800">4.9/5</span>
                <span className="text-gray-600">from 2,500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(129, 140, 248, 0.5); }
          50% { box-shadow: 0 0 40px rgba(129, 140, 248, 0.8), 0 0 80px rgba(129, 140, 248, 0.3); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

type BenefitCardProps = BenefitData & {
  delay: number;
};

function BenefitCard({ imageSrc, title, description, color, bgColor, delay }: BenefitCardProps) {
  return (
    <div 
      className="group relative animate-fade-in-up rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 cursor-pointer border border-gray-100/50 h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Floating decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon container with enhanced styling */}
        <div className={`mb-6 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${color} shadow-lg overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl`}>
          <Image
            src={imageSrc}
            alt={title}
            width={56}
            height={56}
            className="object-contain transition-all duration-500 group-hover:scale-125"
          />
        </div>
        
        {/* Content */}
        <h3 className="mb-4 text-xl font-bold leading-tight whitespace-pre-line transition-colors duration-300 group-hover:text-indigo-700 text-gray-900 min-h-[52px] line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 min-h-[72px]">
          {description}
        </p>

      </div>
    </div>
  );
}

type BonusItemProps = {
  title: string;
  price: string;
  icon: string;
  description: string;
  delay: number;
};

function BonusItem({ title, price, icon, description, delay }: BonusItemProps) {
  return (
    <div 
      className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100/50 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 leading-tight">
                {title}
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 ml-3">
            <div className={`text-lg font-bold transition-all duration-300 group-hover:scale-110 ${price === 'Free' ? 'text-green-600' : 'text-indigo-600'}`}>
              {price}
            </div>
            {price !== 'Free' && (
              <div className="text-xs text-gray-500 text-right">Value</div>
            )}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-full transition-all duration-1000 w-0 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
}
