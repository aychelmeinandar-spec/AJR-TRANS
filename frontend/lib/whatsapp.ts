export function bookingWhatsapp(car: string) {
  const phone = "6281286033440";

  const message = `Halo AJR Trans,

Saya ingin booking kendaraan berikut.

🚗 Armada: ${car}

📅 Tanggal:
⏰ Durasi:
📍 Lokasi Penjemputan:

Mohon informasi harga dan ketersediaannya.

Terima kasih.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}