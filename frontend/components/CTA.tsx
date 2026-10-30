"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-slate-800 px-8 py-16 text-center shadow-xl md:px-16">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            AJR TRANS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Siap Memulai
            <br />
            Perjalanan Anda?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Percayakan kebutuhan transportasi Anda kepada AJR Trans.
            Armada selalu terawat, harga transparan, serta didukung
            oleh pelayanan profesional untuk setiap perjalanan.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://wa.me/6281286033440"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Booking Sekarang
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+6281286033440"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-slate-200 transition hover:border-white hover:text-white"
            >
              <PhoneCall size={18} />
              Hubungi Kami
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}