export type WebinarEvent = {
  title: string;
  description: string;
  startISOWithTZ: string; // ISO string with timezone offset, e.g., 2025-09-28T13:00:00+05:30
  durationMinutes: number;
  meetingUrl: string;
  whatsappInviteUrl?: string;
};

export const WEBINAR_EVENT: WebinarEvent = {
  title: "English Mastery Webinar",
  description:
    "Join our live English Mastery Webinar. Practical frameworks, confidence hacks, and a plan to speak clearly at work.",
  // Friday, 28 September 2025 at 1:00 PM IST (UTC+05:30)
  startISOWithTZ: "2025-09-28T13:00:00+05:30",
  durationMinutes: 90,
  meetingUrl:
    "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZmE4ZDc2NDItYzZiNi00OWEyLTkwZGYtMGJjODkzOTI1YzUz%40thread.v2/0?context=%7b%22Tid%22%3a%222ceb0a17-84fe-4816-b4af-3f27f9f75e2a%22%2c%22Oid%22%3a%229efd660f-7ef1-4d2d-b467-8e0b711b4846%22%7d",
  whatsappInviteUrl:
    "https://chat.whatsapp.com/HDbCCeLWoz7JT4iFr3jEym?mode=ems_share_c",
};

export function getEventTimes() {
  const start = new Date(WEBINAR_EVENT.startISOWithTZ);
  const end = new Date(start.getTime() + WEBINAR_EVENT.durationMinutes * 60 * 1000);
  return { start, end };
}

function toCalDateUTC(d: Date) {
  // Format YYYYMMDDTHHMMSSZ
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

export function buildGoogleCalendarUrl() {
  const { start, end } = getEventTimes();
  const dates = `${toCalDateUTC(start)}/${toCalDateUTC(end)}`;
  const base = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: WEBINAR_EVENT.title,
    dates,
    details: WEBINAR_EVENT.description + "\\n\\nJoin: " + WEBINAR_EVENT.meetingUrl,
    location: WEBINAR_EVENT.meetingUrl,
  });
  return `${base}?${params.toString()}`;
}

export function buildOutlookWebUrl() {
  const { start, end } = getEventTimes();
  const base = "https://outlook.live.com/calendar/0/action/compose";
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: WEBINAR_EVENT.title,
    body: WEBINAR_EVENT.description + "\n\nJoin: " + WEBINAR_EVENT.meetingUrl,
    startdt: start.toISOString(),
    enddt: end.toISOString(),
    location: WEBINAR_EVENT.meetingUrl,
    allday: "false",
  });
  return `${base}?${params.toString()}`;
}

export function buildICS(): string {
  const { start, end } = getEventTimes();
  const dtStart = toCalDateUTC(start);
  const dtEnd = toCalDateUTC(end);
  const uid = `${Date.now()}@talkdrill.com`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Talkdrill//Webinar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStart}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeICS(WEBINAR_EVENT.title)}`,
    `DESCRIPTION:${escapeICS(WEBINAR_EVENT.description + "\\n\\nJoin: " + WEBINAR_EVENT.meetingUrl)}`,
    `LOCATION:${escapeICS(WEBINAR_EVENT.meetingUrl)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return ics;
}

function escapeICS(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}


