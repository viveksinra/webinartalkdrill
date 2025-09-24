"use client";

import Link from "next/link";
import { useCallback } from "react";
import { WEBINAR_EVENT, buildGoogleCalendarUrl, buildOutlookWebUrl, buildICS } from "@/lib/event";

export default function AddToCalendar() {
  const handleDownloadICS = useCallback(() => {
    const ics = buildICS();
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "webinar-event.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <Link
        href={WEBINAR_EVENT.meetingUrl}
        target="_blank"
        className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
        </svg>
        Join Meeting
      </Link>

      <a
        href={buildGoogleCalendarUrl()}
        target="_blank"
        className="inline-flex items-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v12a2 2 0 002 2z" />
        </svg>
        Add to Google
      </a>

      <a
        href={buildOutlookWebUrl()}
        target="_blank"
        className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
        Add to Outlook
      </a>

      <button
        type="button"
        onClick={handleDownloadICS}
        className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H9l-4 4v10a2 2 0 002 2z" />
        </svg>
        Download .ics
      </button>
      {WEBINAR_EVENT.whatsappInviteUrl ? (
        <a
          href={WEBINAR_EVENT.whatsappInviteUrl}
          target="_blank"
          className="inline-flex items-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12.04 2.25c-5.39 0-9.78 4.39-9.78 9.78 0 1.72.46 3.41 1.33 4.9L2.25 21.75l4.95-1.29c1.44.78 3.07 1.19 4.84 1.19h.01c5.39 0 9.78-4.39 9.78-9.78s-4.39-9.78-9.78-9.78zm0 17.68h-.01c-1.47 0-2.9-.39-4.15-1.12l-.3-.18-2.94.77.79-2.87-.19-.3a8.06 8.06 0 01-1.25-4.3c0-4.46 3.63-8.09 8.09-8.09s8.09 3.63 8.09 8.09-3.63 8.1-8.13 8.1zm4.61-5.89c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.58.13-.17.25-.66.81-.81.98-.15.17-.3.19-.56.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.42-.43-.58-.44l-.5-.01c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67.13.17 1.82 2.78 4.41 3.9.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3z" />
          </svg>
          Join WhatsApp
        </a>
      ) : null}
    </div>
  );
}


