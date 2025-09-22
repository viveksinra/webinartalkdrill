"use client";

import { useState } from "react";
import Container from "@/components/Container";

type Faq = {
  q: string;
  a: string;
};

const faqs: Faq[] = [
  {
    q: "Who is this webinar for?",
    a: "This webinar is for working professionals, job seekers, managers, and students who want to improve their English fluency to secure promotions, higher packages, and better career opportunities.",
  },
  {
    q: "Do I need to be fluent in English already to attend?",
    a: "No. You only need basic understanding. We focus on practical methods to speak clearly and confidently regardless of your current level.",
  },
  {
    q: "How long will the session last?",
    a: "The live session is approximately 90 minutes, including a short Q&A at the end.",
  },
  {
    q: "What will I learn in this webinar?",
    a: "You will learn workplace‑ready speaking frameworks, email and writing best practices, confidence hacks, and a simple plan to improve fast.",
  },
  {
    q: "Is the webinar really worth it?",
    a: "Yes. Thousands of learners have used these techniques to interview better, perform in meetings, and negotiate stronger packages.",
  },
  {
    q: "How do I join the webinar?",
    a: "Register with your email and you will receive the meeting link and calendar invite immediately.",
  },
  {
    q: "Why should I trust this webinar?",
    a: "The host has conducted 200+ workshops with an average 8.9/10 rating and has guided 10,000+ learners worldwide.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative w-full bg-white py-10 sm:py-14">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-semibold text-black sm:mb-10 sm:text-3xl">
          Frequently Asked Question
        </h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-button-${index}`;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-black"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-sm font-semibold sm:text-base">{item.q}</span>
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4537e6] text-white transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${isOpen ? "block" : "hidden"} border-t border-black/10 bg-gray-50/60 px-5 py-4 text-sm text-black/70`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


