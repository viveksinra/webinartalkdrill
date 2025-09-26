import Image from "next/image";
import Container from "@/components/Container";

type Review = {
  name: string;
  text: string;
  avatar: string;
  rating: number;
  role: string;
};

const reviews: Review[] = [
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    text:
      "Before TalkDrill, I struggled in client calls. After practicing daily, I finally cracked my dream MNC interview with confidence. Truly life‑changing!",
    avatar: "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    text:
      "The webinar gave me practical tips, not theory. The free demo session and TalkDrill practice coins made it so easy to continue my learning journey.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-hispanic-woman-standing-with-arms-crossed-gesture-street_839833-27487.jpg",
   
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Business Analyst",
    text:
      "In just 30 days, my fluency improved drastically. I now handle presentations and negotiations without fear. TalkDrill made me believe in myself again.",
    avatar: "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Team Lead",
    text:
      "The webinar helped me prepare for my promotion interview. The confidence hacks and workplace‑ready English templates made all the difference.",
    avatar: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function LearnerReview() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-amber-500/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">Live Reviews</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Learners
            </span>{" "}
            Say
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real stories from real people who transformed their English speaking confidence
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-16">
          {reviews.map((review, index) => (
            <article 
              key={review.name} 
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Background with Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/25"></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-center h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 w-8 h-8 text-yellow-400/60 group-hover:text-yellow-400 transition-colors duration-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Avatar */}
                <div className="mx-auto mb-6 relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/30 group-hover:ring-yellow-400/50 transition-all duration-300">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      width={80} 
                      height={80} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Star Rating */}
                <StarRating rating={review.rating} />

                {/* Review Text */}
                <blockquote className="text-white/90 text-sm leading-relaxed mb-6 flex-grow italic group-hover:text-white transition-colors duration-300">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {review.name}
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/20">
            <p className="text-white/90 text-lg font-medium">
              Don&apos;t Just Read Reviews—Experience It Yourself
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <span className="text-sm font-semibold">Join 10,000+ Happy Learners</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-800">
                    {i < 4 ? '👤' : '+'}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://rzp.io/rzp/f0HDYyn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-3 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-7 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-300"
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

      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2s' }}></div>
    </section>
  );
}


