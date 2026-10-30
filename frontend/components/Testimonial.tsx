"use client";

const testimonials = [
  {
    name: "Dimas Pratama",
    city: "Jakarta",
    review:
      "Pelayanan sangat memuaskan. Mobil bersih, driver profesional, proses booking cepat, dan admin sangat responsif. Sangat direkomendasikan untuk perjalanan bisnis maupun keluarga.",
  },
  {
    name: "Andry Setiawan",
    city: "Bandung",
    review:
      "Sudah beberapa kali menggunakan jasa AJR Trans. Harga transparan, armada baru, driver ramah, dan selalu datang tepat waktu.",
  },
  {
    name: "Andri Herman",
    city: "Bekasi",
    review:
      "Toyota Hiace yang saya sewa kondisinya seperti baru. Interior bersih, AC dingin, dan perjalanan menjadi jauh lebih nyaman.",
  },
];

export default function Testimonial() {
  return (
    <section
       id="testimoni"
         className="py-24 bg-slate-50 scroll-mt-24"
        > 
    
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold tracking-[5px] uppercase mb-4">
            Testimoni
          </span>

          <h2 className="text-5xl font-extrabold text-slate-900 mb-5">
            Apa Kata Pelanggan?
          </h2>

          <p className="text-slate-900 text-lg max-w-2xl mx-auto leading-8">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut beberapa
            pengalaman pelanggan yang telah mempercayakan perjalanan mereka
            kepada AJR Trans.
          </p>
        </div>

        {/* Card */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[340px]"
            >
              

              {/* Review */}
              <p className="text-slate-900 italic leading-8 flex-1">
                "{item.review}"
              </p>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-600 text-white rounded-full px-8 py-4 shadow-xl">
            <span className="text-2xl">⭐</span>

            <div className="text-left">
              <div className="font-bold text-lg">
                Rating 4.9 / 5.0
              </div>

              <div className="text-blue-100 text-sm">
                Berdasarkan ulasan pelanggan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}