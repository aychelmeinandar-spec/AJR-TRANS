"use client";

import { CarFront, Users, BadgeCheck, Headset } from "lucide-react";

const stats = [
  {
    icon: CarFront,
    value: "30+",
    label: "Armada",
  },
  {
    icon: Users,
    value: "1.000+",
    label: "Pelanggan Terlayani",
  },
  {
    icon: BadgeCheck,
    value: "98%",
    label: "Tingkat Kepuasan",
  },
  {
    icon: Headset,
    value: "24 Jam",
    label: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            AJR Trans
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Dipercaya oleh Ribuan Pelanggan
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Kepercayaan pelanggan merupakan prioritas kami. Dengan armada yang
            terawat dan pelayanan profesional, AJR Trans terus menjadi pilihan
            untuk kebutuhan perjalanan pribadi maupun perusahaan.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 border-y border-slate-200 py-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="text-center transition duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}