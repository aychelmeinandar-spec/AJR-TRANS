"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-slate-950 text-slate-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <Image
              src="/images/logo/ajr-logo.png"
              alt="AJR Trans"
              width={170}
              height={60}
              className="mb-6"
            />

            <p className="leading-8 text-slate-400">
              AJR Trans merupakan penyedia jasa rental mobil premium
              yang melayani perjalanan bisnis, wisata, keluarga,
              maupun kebutuhan perusahaan dengan armada yang
              nyaman, bersih, dan terawat.
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Navigasi
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#tentang" className="hover:text-blue-400 transition">
                  Tentang
                </a>
              </li>

              <li>
                <a href="#layanan" className="hover:text-blue-400 transition">
                  Layanan
                </a>
              </li>

              <li>
                <a href="#armada" className="hover:text-blue-400 transition">
                  Armada
                </a>
              </li>

              <li>
                <a href="#testimoni" className="hover:text-blue-400 transition">
                  Testimoni
                </a>
              </li>

              <li>
                <a href="#kontak" className="hover:text-blue-400 transition">
                  Kontak
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Hubungi Kami
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-4">

                

                 

              </div>

              <div className="flex gap-4">

                <Mail
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <div>

                  <p className="font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@ajrtrans.com"
                    className="transition hover:text-blue-400"
                  >
                    info@ajrtrans.com
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <div>

                  <p className="font-medium text-white">
                    Alamat
                  </p>

                  <a
                    href="https://www.google.com/maps/place/Jeva+Motor/@-6.28653,106.9998929,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698dfc42295d53:0xb58a8eadd41457a7!8m2!3d-6.2865353!4d107.0024678!16s%2Fg%2F1s04dqc9w?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="transition hover:text-blue-400"
                  >
                    Bekasi, Jawa Barat
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Operational */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Jam Operasional
            </h3>

            <div className="mt-6 flex gap-4">

              <Clock
                size={20}
                className="mt-1 text-blue-400"
              />

              <div>

                <p className="font-medium text-white">
                  Senin - Minggu
                </p>

                <p>
                  24 Jam Non Stop
                </p>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5">

              <h4 className="font-semibold text-white">
                AJR TRANS
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Siap melayani kebutuhan transportasi Anda
                dengan armada premium dan pelayanan profesional.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 AJR Trans. All Rights Reserved.
          </p>

          <p>
            Rental Mobil Premium • Bekasi • Indonesia
          </p>

        </div>

      </div>

    </footer>
  );
}