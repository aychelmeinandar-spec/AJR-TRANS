"use client";

const steps = [
  {
    number: "01",
    title: "Pilih Armada",
    description:
      "Pilih kendaraan yang sesuai dengan kebutuhan perjalanan bisnis, wisata, maupun keluarga.",
  },
  {
    number: "02",
    title: "Hubungi Kami",
    description:
      "Lakukan pemesanan melalui WhatsApp atau telepon untuk mengecek jadwal dan ketersediaan armada.",
  },
  {
    number: "03",
    title: "Konfirmasi Booking",
    description:
      "Tim kami akan mengonfirmasi detail pemesanan, harga, serta jadwal keberangkatan.",
  },
  {
    number: "04",
    title: "Nikmati Perjalanan",
    description:
      "Armada siap digunakan sesuai jadwal dengan kondisi bersih, nyaman, dan pengemudi profesional.",
  },
];

export default function BookingSteps() {
  return (
    <section
      id="booking"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Cara Booking
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Proses Booking yang Mudah
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Kami membuat proses pemesanan menjadi sederhana agar Anda dapat
            memperoleh kendaraan dengan cepat dan nyaman.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative"
            >

              {/* Number */}

              <div className="text-5xl font-bold text-slate-800">
                {step.number}
              </div>

              {/* Line */}

              <div className="mt-3 h-1 w-16 rounded-full bg-blue-600"></div>

              {/* Content */}

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}