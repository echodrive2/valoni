"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Update these with your real contact details ──────────────────────────────
const COMPANY_NAME = "Valoni";
const PHONE = "+383 44 403 332";
const WHATSAPP = "+38344403332"; // no spaces — used in wa.me link
const WHATSAPP_DISPLAY = "+383 44 403 332";
// ─────────────────────────────────────────────────────────────────────────────

const t = {
  en: {
    tagline: "Your reliable ride, anytime",
    callNow: "Call Now",
    services: "Our Services",
    workingHours: "Working Hours",
    bookRide: "Book a Ride",
    contactSub: "Reach us instantly by phone or WhatsApp.",
    phone: "Phone",
    allRights: "All rights reserved.",
    schedule: [
      { day: "Monday – Friday", hours: "06:00 – 22:00" },
      { day: "Saturday",        hours: "07:00 – 23:00" },
      { day: "Sunday",          hours: "08:00 – 21:00" },
    ],
    services_list: [
      { icon: "🚖", title: "City Rides",         desc: "Fast, comfortable transfers anywhere in the city." },
      { icon: "✈️", title: "Airport Transfers",  desc: "On-time pickups and drop-offs at all major airports." },
      { icon: "🏙️", title: "Long Distance",      desc: "Intercity trips with fixed, transparent pricing." },
      { icon: "📅", title: "Pre-Booking",        desc: "Schedule your ride in advance — no surprises." },
    ],
  },
  sq: {
    tagline: "Udhëtimi juaj i besueshëm, çdo kohë",
    callNow: "Telefono Tani",
    services: "Shërbimet Tona",
    workingHours: "Orari i Punës",
    bookRide: "Rezervo një Udhëtim",
    contactSub: "Na kontaktoni menjëherë me telefon ose WhatsApp.",
    phone: "Telefon",
    allRights: "Të gjitha të drejtat e rezervuara.",
    schedule: [
      { day: "E Hënë – E Premte", hours: "06:00 – 22:00" },
      { day: "E Shtunë",          hours: "07:00 – 23:00" },
      { day: "E Diel",            hours: "08:00 – 21:00" },
    ],
    services_list: [
      { icon: "🚖", title: "Udhëtime në Qytet",    desc: "Transfere të shpejta dhe komode kudo në qytet." },
      { icon: "✈️", title: "Transfere Aeroporti",  desc: "Marrje dhe lënie në kohë në të gjitha aeroportet kryesore." },
      { icon: "🏙️", title: "Distanca të Gjata",   desc: "Udhëtime ndër-qytetëse me çmime fikse dhe transparente." },
      { icon: "📅", title: "Rezervim Paraprak",    desc: "Rezervoni udhëtimin tuaj paraprakisht — pa surpriza." },
    ],
  },
} as const;

type Lang = keyof typeof t;

export default function Home() {
  const [lang, setLang] = useState<Lang>("sq");
  const tr = t[lang];
  const waLink  = `https://wa.me/${WHATSAPP}`;
  const telLink = `tel:${PHONE.replace(/\s/g, "")}`;

  return (
    <div className="font-sans text-gray-900">

      {/* ── Language switcher ────────────────────────────────────────────── */}
      <div className="fixed right-4 top-4 z-50 flex overflow-hidden rounded-full border border-gray-200 bg-white shadow-md">
        {(["sq", "en"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 text-sm font-semibold transition ${
              lang === l
                ? "bg-yellow-400 text-gray-900"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {l === "sq" ? "🇦🇱 SQ" : "🇬🇧 EN"}
          </button>
        ))}
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-yellow-400 px-6 text-center">
        <div className="mb-6">
          <Image
            src="/car.png"
            alt="Valoni taxi car"
            width={420}
            height={280}
            className="drop-shadow-2xl"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          {COMPANY_NAME}
        </h1>
        <p className="mt-4 text-xl text-gray-800">{tr.tagline}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-700"
          >
            📞 {tr.callNow}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-green-600"
          >
            💬 WhatsApp
          </a>
        </div>

        <a
          href="#contact"
          className="absolute bottom-8 animate-bounce text-gray-700"
          aria-label="Scroll down"
        >
          ↓
        </a>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">{tr.services}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tr.services_list.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <span className="mb-3 text-4xl">{s.icon}</span>
                <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────────────────────── */}
      <section className="bg-yellow-50 px-6 py-20">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-10 text-center text-3xl font-bold">{tr.workingHours}</h2>
          <div className="overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm">
            {tr.schedule.map((row, i) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < tr.schedule.length - 1 ? "border-b border-yellow-100" : ""
                }`}
              >
                <span className="font-medium text-gray-700">{row.day}</span>
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-gray-900">
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{tr.bookRide}</h2>
          <p className="mb-10 text-gray-400">{tr.contactSub}</p>

          <div className="flex flex-col gap-5 sm:flex-row sm:justify-center">
            <a
              href={telLink}
              className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-yellow-400 px-8 py-6 text-gray-900 shadow-lg transition hover:bg-yellow-300"
            >
              <span className="text-3xl">📞</span>
              <span className="mt-1 text-lg font-bold">{tr.phone}</span>
              <span className="text-sm">{PHONE}</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-green-500 px-8 py-6 text-white shadow-lg transition hover:bg-green-400"
            >
              <span className="text-3xl">💬</span>
              <span className="mt-1 text-lg font-bold">WhatsApp</span>
              <span className="text-sm">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {COMPANY_NAME}. {tr.allRights}
      </footer>
    </div>
  );
}
