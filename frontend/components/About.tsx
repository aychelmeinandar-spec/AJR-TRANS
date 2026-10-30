"use client";

import Image from "next/image";
import {
  ShieldCheck,
  CarFront,
  Clock3,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-slate-50 py-28 scroll-mt-24"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[130px] opacity-50" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-200 blur-[130px] opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Tentang AJR Trans
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Rental Mobil Premium
            <br />
            yang
            <span className="text-blue-600"> Terpercaya</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            AJR Trans hadir memberikan layanan rental mobil premium
            untuk perjalanan bisnis, keluarga, wisata maupun perusahaan
            dengan armada terbaik, driver profesional, serta pelayanan
            yang ramah dan tepat waktu.
          </p>

          {/* Statistik */}

          <div className="mt-12 flex gap-14">

            <div>

              <h3 className="text-4xl font-bold text-blue-600">
                30+
              </h3>

              <p className="mt-2 text-slate-500">
                Armada
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>

              <p className="mt-2 text-slate-500">
                Support
              </p>

            </div>

          </div>

          {/* Card */}

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="rounded-2xl bg-blue-100 p-4">

                <ShieldCheck className="text-blue-600" />

              </div>

              <div>

                <h4 className="text-lg font-bold text-slate-900">
                  Driver Profesional
                </h4>

                <p className="text-slate-500">
                  Berpengalaman, sopan, dan mengutamakan keselamatan.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="rounded-2xl bg-blue-100 p-4">

                <CarFront className="text-blue-600" />

              </div>

              <div>

                <h4 className="text-lg font-bold text-slate-900">
                  Armada Bersih & Terawat
                </h4>

                <p className="text-slate-500">
                  Selalu siap digunakan kapan pun Anda butuhkan.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="rounded-2xl bg-blue-100 p-4">

                <Clock3 className="text-blue-600" />

              </div>

              <div>

                <h4 className="text-lg font-bold text-slate-900">
                  Layanan 24 Jam
                </h4>

                <p className="text-slate-500">
                  Siap membantu perjalanan Anda kapan saja.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-2xl">

            {/* Blur */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-slate-100 blur-3xl opacity-70" />

            {/* Mobil */}

            <Image
              src="/images/hero/hiace-premio.png"
              alt="Toyota Hiace Premio"
              width={900}
              height={700}
              priority
              className="
                relative
                z-10
                mx-auto
                w-full
                max-w-[520px]
                transition-all
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}