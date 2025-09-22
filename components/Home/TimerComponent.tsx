"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";

type TimeParts = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimePartsUntil(target: Date): TimeParts {
  const now = new Date();
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

function TimeBox({ value, label }: { value: number; label: string }) {
  const two = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg bg-white px-4 py-2 text-2xl font-extrabold leading-none text-black sm:px-5 sm:py-3 sm:text-3xl">
        {two}
      </div>
      <div className="mt-2 text-xs text-white/90 sm:text-sm">{label}</div>
    </div>
  );
}

export default function TimerComponent() {
  // Target: Friday, 28 September 2025 at 1:00 PM (local time)
  const targetDate = useMemo(() => {
    const d = new Date(2025, 8, 28, 13, 0, 0); // months are 0-indexed
    return d;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeParts>(() => getTimePartsUntil(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimePartsUntil(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <section className="relative w-full bg-[#4537e6] py-10 text-white sm:py-14">
      <Container>
        <div className="text-center">
          <p className="mb-6 text-base font-medium">
            Registration Fees <span className="font-extrabold text-yellow-300">increases</span> in
          </p>

          <div className="mb-6 flex items-center justify-center gap-6">
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          <p className="mb-10 text-sm text-white/95 sm:text-base">
            Don&apos;t miss out on 4x salary and <span className="font-extrabold text-yellow-300">FREE</span> Bonus worth <span className="font-extrabold text-yellow-300">₹10,000</span>
          </p>

          <div className="mx-auto grid max-w-xl grid-cols-3 items-center gap-4 sm:max-w-2xl">
            <div className="text-right text-lg font-semibold text-yellow-300 sm:text-xl">
              <div>Friday,</div>
              <div>28 September 2025</div>
            </div>
            <div className="mx-auto h-10 w-px bg-white/50 sm:h-12" />
            <div className="text-left text-lg font-semibold text-yellow-300 sm:text-xl">01:00 PM</div>
          </div>
        </div>
      </Container>
    </section>
  );
}


