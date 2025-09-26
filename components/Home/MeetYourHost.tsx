"use client";

import Image from "next/image";
import Container from "@/components/Container";

type Stat = {
  value: string;
  label: string;
  icon: string;
};

const stats: Stat[] = [
  { value: "10k+", label: "Learners Guided", icon: "👥" },
  { value: "200+", label: "Workshops & Talks", icon: "🎤" },
  { value: "8.9/10", label: "Avg. Session Rating", icon: "⭐" },
];

const expertise = [
  { 
    title: "Industry‑tested speaking templates", 
    description: "Proven frameworks used by Fortune 500 companies",
    icon: "📋"
  },
  { 
    title: "Email and writing best practices", 
    description: "Professional communication that gets results",
    icon: "✉️"
  },
  { 
    title: "Mindset and confidence hacks", 
    description: "Psychology-backed techniques for self-assurance",
    icon: "🧠"
  }
];

export default function MeetYourHost() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-16 sm:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-4">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium text-purple-800">Meet Your Expert</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-2">
              Your Communication Coach
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn from someone who has transformed thousands of careers through better communication
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Enhanced Photo Section */}
            <div className="relative mx-auto w-full max-w-lg group order-2 lg:order-1">
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 z-20 animate-float">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-purple-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">10k+ Students</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-8 z-20 animate-float-delay">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-2 shadow-lg text-sm font-medium">
                  ⭐ 4.9/5 Rating
                </div>
              </div>

              {/* Main image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl transform rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-[3px] shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25 group-hover:scale-[1.02]">
                  <div className="relative overflow-hidden rounded-[22px] bg-white p-6 transition-all duration-300">
                    <Image
                      src="/assets/images/home/vishayMain.png"
                      alt="Vishay Kaushik - Communication Coach"
                      width={560}
                      height={640}
                      className="mx-auto h-auto w-full max-w-[400px] transition-all duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Floating elements with better positioning */}
                    <div className="absolute top-4 right-4 w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-6 left-4 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/3 left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-8 order-1 lg:order-2 animate-fade-in-up">
              {/* Header */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Vishay Kaushik
                  <span className="block text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    Communication Expert
                  </span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Vishay empowers professionals to communicate with <strong className="text-gray-900">clarity, confidence, and impact</strong>. 
                  Through proven frameworks and workplace-ready English, he has transformed careers across industries.
                </p>
              </div>

              {/* Enhanced expertise list */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  What You&apos;ll Master
                </h4>
                {expertise.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="group relative p-4 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-purple-200 hover:bg-white hover:-translate-y-1 cursor-pointer animate-slide-up"
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                    </div>
                  </div>
                ))}
              </div>

      
            </div>
            
          </div>
                  {/* Enhanced Stats Grid */}
                  <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Track Record
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-5 text-center transition-all duration-300 hover:shadow-xl hover:border-purple-200 hover:bg-white hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      {/* Floating icon */}
                      <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                        {stat.icon}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                      
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4">
                <a href="https://rzp.io/rzp/f0HDYyn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 block">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Ready to transform your communication?</p>
                    <p className="text-xs text-gray-600">Join the webinar and start your journey today!</p>
                  </div>
                </a>
              </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}


