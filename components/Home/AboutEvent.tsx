"use client";

import Container from "@/components/Container";

type BulletPoint = {
  text: string;
  icon: string;
  description: string;
};

const bulletPoints: BulletPoint[] = [
  { 
    text: "Top insights into English mistakes that cost you promotions", 
    icon: "🚫",
    description: "Identify and fix costly communication errors instantly"
  },
  { 
    text: "Practical frameworks to speak fluently in workplace", 
    icon: "💼",
    description: "Ready-to-use templates for meetings and presentations"
  },
  { 
    text: "Email & writing tips to sound clear and confident", 
    icon: "✍️",
    description: "Professional communication that gets results"
  },
  { 
    text: "Confidence hacks for professional discussions", 
    icon: "💪",
    description: "Psychology-backed techniques for self-assurance"
  },
  { 
    text: "Career-ready checklist of English skills", 
    icon: "✅",
    description: "Complete roadmap for communication excellence"
  },
  { 
    text: "Free bonuses worth ₹10,000", 
    icon: "🎁",
    description: "Exclusive resources and tools for accelerated learning"
  },
];

const stats = [
  { number: "10,000+", label: "Professionals Trained" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Countries Reached" },
];

export default function AboutEvent() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 py-16 sm:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-medium text-blue-800">About This Webinar</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Transform Your Career with
              <span className="block text-3xl sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fluent English Communication
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlock the secret to faster promotions and higher packages through masterful communication skills
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Enhanced Left Visual Section */}
            <div className="relative mx-auto w-full max-w-lg animate-fade-in-up">
              {/* Main content card */}
              <div className="relative group">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm group-hover:shadow-blue-500/25 transition-all duration-500">
                  {/* Header with live indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">LIVE Webinar</span>
                    </div>
                    <div className="text-2xl">🚀</div>
                  </div>

                  {/* Event details */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-gray-900">Unlock Higher Package with Fluent English</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          📅
                        </div>
                        <span className="text-sm">Live Interactive Session</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          🌍
                        </div>
                        <span className="text-sm">Global Accessibility</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          💎
                        </div>
                        <span className="text-sm">Premium Content - FREE</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats mini cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100/50 group-hover:shadow-lg transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                        <div className="text-lg font-bold text-blue-600">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-sm animate-bounce">
                  FREE
                </div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content Section */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Problem Statement */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/50 text-red-700 text-sm font-medium">
                  ⚠️ The Hidden Problem
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Are you working hard but <strong className="text-red-600">missing out on that well-deserved promotion</strong> or salary hike?
                  </p>
                  <p>
                    The truth is, <strong className="text-gray-900">English fluency plays a bigger role in your career growth</strong> than you realize. Small communication mistakes can cost you thousands in salary and years in career progress.
                  </p>
            </div>
          </div>

              {/* Solution */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200/50 text-green-700 text-sm font-medium">
                  ✨ The Solution
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    This <strong className="text-blue-600">FREE webinar</strong> is designed to help professionals like you identify the communication mistakes holding you back and give you practical tools to speak with <strong className="text-gray-900">confidence, clarity, and impact</strong>.
                  </p>
                  <p>
                    Led by an expert who has trained <strong className="text-purple-600">10,000+ professionals</strong> and spoken on national and international stages, this session will equip you with the exact strategies to fast-track your career.
                  </p>
                </div>
              </div>

              {/* What you'll learn */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    What You'll Master
                  </h3>
                  <p className="text-gray-600">Transform your communication with these proven strategies:</p>
                </div>

                <div className="space-y-3">
                  {bulletPoints.map((point, index) => (
                    <div 
                      key={point.text} 
                      className="group relative p-4 rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:bg-white hover:-translate-y-1 cursor-pointer animate-slide-up"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-start gap-4">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {point.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                            {point.text}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {point.description}
                          </p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 flex-shrink-0 mt-2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-6">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⏰</span>
            <div>
                        <h4 className="font-bold text-lg">Limited Time Offer!</h4>
                        <p className="text-blue-100 text-sm">Don't miss this career-changing opportunity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>500+ Already Registered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Limited Seats Available</span>
                      </div>
                    </div>
                  </div>
                  {/* Subtle animation overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


