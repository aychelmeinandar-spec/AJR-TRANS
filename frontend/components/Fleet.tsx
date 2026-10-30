"use client";

import Image from "next/image";
import { Users, Star, Fuel, Settings } from "lucide-react";
import { bookingWhatsapp } from "@/lib/whatsapp";

const cars = [
  {
    name: "Toyota Hiace Premio",
    image: "/images/cars/hiace.png",
    price: "Rp2.500.000",
    passengers: "14 Seat",
    transmission: "Manual",
    fuel: "Diesel",
    rating: 5,
    badge: "Best Seller",
  },
  {
    name: "Toyota Innova Reborn",
    image: "/images/cars/reborn.png",
    price: "Rp3.000.000",
    passengers: "7 Seat",
    transmission: "Automatic",
    fuel: "Diesel",
    rating: 5,
    badge: "Favorite",
  },
  {
    name: "Toyota Innova Zenix",
    image: "/images/cars/zenix.png",
    price: "Rp3.000.000",
    passengers: "7 Seat",
    transmission: "Automatic",
    fuel: "Bensin/Hybrid",
    rating: 5,
    badge: "Premium",
  },
  {
    name: "Toyota Rush",
    image: "/images/cars/rush.png",
    price: "Rp3.000.000",
    passengers: "7 Seat",
    transmission: "Automatic",
    fuel: "Bensin",
    rating: 5,
    badge: "Premium",
  },
  {
    name: "Toyota Nav1",
    image: "/images/cars/Nav1.png",
    price: "Rp3.000.000",
    passengers: "7 Seat",
    transmission: "Automatic",
    fuel: "Bensin",
    rating: 5,
    badge: "Premium",
  },
  {
    name: "Hyundai Stargazer ",
    image: "/images/cars/Stargazer.png",
    price: "Rp1.200.000",
    passengers: "7 Seat",
    transmission: "Automatic",
    fuel: "Hybrid",
    rating: 5,
    badge: "Premium",
  },
];

export default function Fleet() {
  return (
         <section
          id="armada"
            className="bg-slate-50 py-24 scroll-mt-24"
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
            Armada Kami
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Pilihan Mobil Premium
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Semua armada selalu bersih, nyaman,
            terawat dan siap digunakan kapan saja.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (

            <div
              key={car.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="relative">

                <span className="absolute left-5 top-5 z-10 rounded-full bg-yellow-400 px-4 py-2 font-semibold text-white">
                  ⭐ {car.badge}
                </span>

                <Image
                  src={car.image}
                  alt={car.name}
                  width={700}
                  height={450}
                  className="h-64 w-full object-contain transition duration-300 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                {car.name}
                  </h3>

                <div className="mt-6 grid grid-cols-3 gap-3 text-sm">

                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-4">

                    <Users className="mb-2 text-blue-600" />

                    {car.passengers}

                  </div>

                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-4">

                    <Settings className="mb-2 text-blue-600" />

                    {car.transmission}

                  </div>

                  <div className="flex flex-col items-center rounded-xl bg-slate-100 p-4">

                    <Fuel className="mb-2 text-blue-600" />

                    {car.fuel}

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-slate-5000">
                    Mulai dari
                  </p>

                  <p className="text-xl font-extrabold text-blue-600">
                  {car.price}
                  </p>

                <p className="text-slate-5000">
                / Hari
                </p>

                  </div>

                  <a
                    href={bookingWhatsapp(car.name)}
                     target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                     Booking Sekarang
                    </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}