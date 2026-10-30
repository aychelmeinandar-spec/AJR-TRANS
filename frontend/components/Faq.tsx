"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah bisa lepas kunci?",
    answer:
      "Ya. Kami menyediakan layanan lepas kunci dengan syarat dan ketentuan yang berlaku.",
  },
  {
    question: "Apakah tersedia driver?",
    answer:
      "Tersedia. Anda dapat memilih paket rental dengan driver profesional yang berpengalaman.",
  },
  {
    question: "Bagaimana cara booking?",
    answer:
      "Pilih kendaraan yang diinginkan, klik tombol Booking, isi formulir, lalu tim kami akan menghubungi Anda untuk konfirmasi.",
  },
  {
    question: "Metode pembayaran?",
    answer:
      "Kami menerima Transfer Bank, QRIS, pembayaran tunai, serta pembayaran perusahaan (Corporate).",
  },
  {
    question: "Apakah mobil diasuransikan?",
    answer:
      "Ya. Seluruh armada kami telah dilengkapi dengan perlindungan asuransi demi keamanan dan kenyamanan pelanggan.",
  },
  {
    question: "Apakah kendaraan selalu bersih?",
    answer:
      "Tentu. Seluruh armada dibersihkan, dicek kondisi mesin, dan disanitasi sebelum digunakan pelanggan.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-8">

        <p className="text-center text-sm font-semibold uppercase tracking-[8px] text-blue-600">
          FAQ
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold text-slate-900">
          Pertanyaan Yang Sering Ditanyakan
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
          Temukan jawaban dari pertanyaan yang paling sering diajukan pelanggan
          sebelum melakukan booking kendaraan.
        </p>

        <div className="mt-16 space-y-6">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:shadow-xl"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                    ?
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                </div>

                <span className="text-3xl font-light text-blue-600">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-slate-200 bg-slate-50 px-7 py-6">

                  <p className="leading-8 text-slate-600">
                    {item.answer}
                  </p>

                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}