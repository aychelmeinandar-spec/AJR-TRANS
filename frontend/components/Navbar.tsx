"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Armada",
    href: "#armada",
  },
  {
    name: "Tentang",
    href: "#tentang",
  },
  {
    name: "Layanan",
    href: "#layanan",
  },
  {
    name: "Testimoni",
    href: "#testimoni",
  },
  {
    name: "Kontak",
    href: "#kontak",
  },
];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <img
            src="/images/logo/ajr-logo.png"
            alt="AJR Trans"
            className="h-50 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative font-semibold text-slate-700 transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Booking */}

        <div className="hidden lg:block">
          <a
            href="#booking"
            className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-700
            to-slate-900
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            transition
            duration-300
            hover:scale-105
            hover:shadow-blue-300/40
            "
          >
            <CalendarDays
              size={20}
              className="transition group-hover:rotate-12"
            />

            Booking Sekarang
          </a>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-200 p-3 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white">

          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 px-6 py-5 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}

          <div className="p-5">

            <a
              href="#booking"
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-blue-700
              to-slate-900
              py-4
              font-semibold
              text-white
              "
            >
              <CalendarDays size={20} />

              Booking Sekarang
            </a>

          </div>

        </div>
      </div>

    </header>
  );
}