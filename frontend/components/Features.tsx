"use client";

import {
  CarFront,
  BadgeCheck,
  Wallet,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: CarFront,
    title: "Armada Terbaru",
    desc: "Semua kendaraan kami selalu dalam kondisi prima, bersih, dan siap digunakan untuk berbagai kebutuhan perjalanan.",
  },
  {
    icon: BadgeCheck,
    title: "Driver Profesional",
    desc: "Didukung oleh pengemudi yang berpengalaman, ramah, disiplin, dan mengutamakan keselamatan pelanggan.",
  },
  {
    icon: Wallet,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi. Seluruh harga yang kami tawarkan jelas, kompetitif, dan sesuai layanan.",
  },
  {
    icon: Clock3,
    title: "Layanan 24 Jam",
    desc: "Tim AJR Trans siap melayani pemesanan dan kebutuhan perjalanan Anda kapan pun dibutuhkan.",
  },
];

export default function Features() {
  return (
    <section
      id="layanan"
        className="bg-white py-24 scroll-mt-24"
>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Keunggulan Kami
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Kenapa Memilih AJR Trans?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kami berkomitmen memberikan layanan rental mobil yang nyaman,
            aman, dan profesional dengan armada terbaik serta pelayanan
            yang selalu mengutamakan kepuasan pelanggan.
          </p>

        </div>

        {/* Card */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                group
                rounded-3xl
                bg-white
                p-8
                border
                border-slate-200
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div className="
                mb-6
                inline-flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
                transition
                group-hover:bg-blue-600
                ">

                  <Icon
                    size={30}
                    className="
                    text-blue-600
                    transition
                    group-hover:text-white
                    "
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}