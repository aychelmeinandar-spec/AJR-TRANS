"use client";

import { CalendarDays, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
   <section id="home" className="relative overflow-hidden bg-white pt-24 pb-20">

    <div
        className="mx-auto max-w-7xl"
    >

    </div>

      {/* Background 
      Accent */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl opacity-60"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <h1 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
            Rental Mobil
            <br />

            <span className="text-blue-600">
              Premium
            </span>

            <br />

            untuk Bisnis &
            <br />

            Liburan
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
            AJR Trans menyediakan layanan rental mobil premium
            dengan armada terbaru, harga transparan, driver profesional,
            serta pelayanan terbaik untuk perjalanan bisnis,
            wisata, maupun keluarga.
          </p>

          {/* Button */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#booking"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              <span className="flex items-center gap-2">
                <CalendarDays size={20} />
                Booking Sekarang
              </span>
            </a>

            <a
              href="#armada"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <span className="flex items-center gap-2">
                Lihat Armada
                <ArrowRight size={18} />
              </span>
            </a>

          </div>

          {/* Benefit */}

          <div className="mt-12 grid grid-cols-2 gap-y-4">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={20}/>
              <span className="text-slate-700">
                Driver Profesional
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={20}/>
              <span className="text-slate-700">
                Harga Transparan
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={20}/>
              <span className="text-slate-700">
                Armada Terbaru
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={20}/>
              <span className="text-slate-700">
                Support 24 Jam
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-[32px] bg-white shadow-2xl border border-slate-200 p-8">

            <div className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-white">
              ⭐ Best Seller
            </div>

            <img
              src="/images/hero/hiace-premio.png"
              alt="Toyota Hiace Premio"
              className="mx-auto mt-4 w-full max-w-xl object-contain transition duration-300 hover:scale-105"
            />

            <div className="mt-8 flex items-end justify-between">

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Toyota Hiace
                </h3>

                <p className="text-slate-500">
                  Premio Luxury
                </p>

                <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                  Premium Van
                </div>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-500">
                  Mulai dari
                </p>

                <div className="text-4xl font-extrabold text-blue-600">
                  Rp1.500.000
                </div>

                <p className="text-slate-500">
                  / Hari
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}