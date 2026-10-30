"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6281286033440"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-[999]
      flex
      items-center
      gap-3
      rounded-full
      bg-green-500
      px-6
      py-4
      text-white
      shadow-2xl
      transition
      hover:scale-110
      hover:bg-green-600
      "
    >
      <MessageCircle size={24} />

      <span className="hidden md:block font-semibold">
        Chat WhatsApp
      </span>
    </a>
  );
}