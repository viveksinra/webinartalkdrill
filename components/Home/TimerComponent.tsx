"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getDynamicTargetTime(): Date {
  const now = new Date();
  
  // Create a target time for today between 20 minutes and 3 hours from now
  const minMinutes = 20;
  const maxMinutes = 180; // 3 hours
  
  // Use current time to create a consistent daily seed
  const dayString = now.toDateString();
  const seed = dayString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Generate a consistent offset for this day (between min and max minutes)
  const offsetMinutes = minMinutes + (seed % (maxMinutes - minMinutes));
  
  const target = new Date(now.getTime() + offsetMinutes * 60 * 1000);
  return target;
}

function getTimePartsUntil(target: Date): TimeParts {
  const now = new Date();
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return { days, hours, minutes, seconds };
}

function TimeBox({ value, label, isHighlighted = false }: { value: number; label: string; isHighlighted?: boolean }) {
  const two = value.toString().padStart(2, "0");
  return (
    <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
      <div className={`
        relative overflow-hidden rounded-xl px-6 py-4 text-3xl font-black leading-none shadow-2xl transition-all duration-300 
        sm:px-8 sm:py-5 sm:text-4xl lg:px-10 lg:py-6 lg:text-5xl
        ${isHighlighted 
          ? 'bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 text-purple-900 shadow-yellow-300/50' 
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-purple-900 shadow-white/30'
        }
        group-hover:shadow-3xl group-hover:-translate-y-1
      `}>
        <div className="relative z-10">{two}</div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 transform -skew-x-12" />
      </div>
      <div className={`mt-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-yellow-200 sm:text-base ${
        isHighlighted ? 'text-yellow-200' : 'text-white/90'
      }`}>
        {label}
      </div>
    </div>
  );
}

export default function TimerComponent() {
  const targetDate = useMemo(() => getDynamicTargetTime(), []);
  
  const [timeLeft, setTimeLeft] = useState<TimeParts>(() => getTimePartsUntil(targetDate));
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const newTimeLeft = getTimePartsUntil(targetDate);
      setTimeLeft(newTimeLeft);
      
      // Set urgent state when less than 30 minutes left
      const totalMinutes = newTimeLeft.hours * 60 + newTimeLeft.minutes;
      setIsUrgent(totalMinutes < 30);
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const formatTargetDateTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return targetDate.toLocaleDateString('en-US', options);
  };

  return (
    <section className="relative w-full overflow-hidden py-12 text-white sm:py-16 lg:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#4537e6] to-indigo-900" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400/10 blur-2xl animate-pulse delay-1000" />
      
      <Container>
        <div className="text-center relative z-10">
          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="text-white/90">Registration Fees</span>{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-black">
                Increases
              </span>{" "}
              <span className="text-white/90">in</span>
            </h2>
            {isUrgent && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                <span className="text-red-300 font-semibold text-sm">URGENT - Limited Time!</span>
              </div>
            )}
          </div>

          {/* Timer Display */}
          <div className="mb-8 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {timeLeft.days > 0 && (
              <>
                <TimeBox value={timeLeft.days} label="Days" isHighlighted={timeLeft.days > 0} />
                <div className="text-3xl font-bold text-white/50 animate-pulse sm:text-4xl">:</div>
              </>
            )}
            <TimeBox value={timeLeft.hours} label="Hours" isHighlighted={isUrgent && timeLeft.hours === 0} />
            <div className="text-3xl font-bold text-white/50 animate-pulse sm:text-4xl">:</div>
            <TimeBox value={timeLeft.minutes} label="Minutes" isHighlighted={isUrgent} />
            <div className="text-3xl font-bold text-white/50 animate-pulse sm:text-4xl">:</div>
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Incentive Message */}
          <div className="mb-10 sm:mb-12">
            <p className="text-base text-white/95 sm:text-lg lg:text-xl">
              Don&apos;t miss out on{" "}
              <span className="font-black text-yellow-300 text-xl sm:text-2xl">4x salary</span> and{" "}
              <span className="font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                FREE
              </span>{" "}
              Bonus worth{" "}
              <span className="font-black text-yellow-300 text-xl sm:text-2xl">₹10,000</span>
            </p>
          </div>

          {/* Event Details */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-2xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                <div className="text-center sm:text-right">
                  <div className="text-lg font-bold text-yellow-300 sm:text-xl">
                    {formatTargetDateTime().split(' at ')[0]}
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <div className="text-center sm:text-left">
                  <div className="text-lg font-bold text-yellow-300 sm:text-xl">
                    {formatTargetDateTime().split(' at ')[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Hint */}
          {isUrgent && (
            <div className="mt-8 animate-bounce">
              <p className="text-yellow-300 font-bold text-lg">⚡ Act Fast - Price Increases Soon!</p>
            </div>
          )}

          {/* Call to Action Button */}
          <div className="mt-10">
            <a
              href="https://rzp.io/rzp/f0HDYyn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 px-6 py-3 font-black text-purple-900 shadow-2xl transition-all duration-300 hover:shadow-yellow-300/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-900"
            >
              Register Now <span className="ml-1 font-bold">₹21</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


