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
    <div className="mt-10 animate-fade-in-up delay-400">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg">
        <h3 className="mb-4 text-center text-lg font-bold text-gray-800">Save Your Spot</h3>
        
        {/* Primary action - Join Meeting */}
        <div className="mb-4 flex justify-center">
          <Link
            href={WEBINAR_EVENT.meetingUrl}
            target="_blank"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 focus:ring-offset-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Join Meeting Now</span>
            </div>
          </Link>
        </div>
        
        {/* Calendar options */}
        <p className="mb-3 text-center text-sm text-gray-600">Add to your calendar:</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <a
            href={buildGoogleCalendarUrl()}
            target="_blank"
            className="group flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 transition-transform group-hover:scale-110">
              <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700">Google</span>
          </a>

          <a
            href={buildOutlookWebUrl()}
            target="_blank"
            className="group flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 transition-transform group-hover:scale-110">
              <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700">Outlook</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadICS}
            className="group flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 transition-transform group-hover:scale-110">
              <svg className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700">Download</span>
          </button>

          {WEBINAR_EVENT.whatsappInviteUrl ? (
            <a
              href={WEBINAR_EVENT.whatsappInviteUrl}
              target="_blank"
              className="group flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 transition-transform group-hover:scale-110">
                <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12.04 2.25c-5.39 0-9.78 4.39-9.78 9.78 0 1.72.46 3.41 1.33 4.9L2.25 21.75l4.95-1.29c1.44.78 3.07 1.19 4.84 1.19h.01c5.39 0 9.78-4.39 9.78-9.78s-4.39-9.78-9.78-9.78zm0 17.68h-.01c-1.47 0-2.9-.39-4.15-1.12l-.3-.18-2.94.77.79-2.87-.19-.3a8.06 8.06 0 01-1.25-4.3c0-4.46 3.63-8.09 8.09-8.09s8.09 3.63 8.09 8.09-3.63 8.1-8.13 8.1zm4.61-5.89c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.58.13-.17.25-.66.81-.81.98-.15.17-.3.19-.56.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.9-.21-.5-.42-.43-.58-.44l-.5-.01c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67.13.17 1.82 2.78 4.41 3.9.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700">WhatsApp</span>
            </a>
          ) : null}
        </div>
      </div>
      
    </div>
  );
}


