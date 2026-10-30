import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Fleet from "@/components/Fleet";
import Stats from "@/components/Stats";
import BookingSteps from "@/components/BookingSteps";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
 <Navbar />

<Hero />

<About />

<Features />

<Fleet />

<Stats />

<BookingSteps />

<Testimonial />

<CTA />

<FloatingWhatsapp />

<Footer />
</>
  );
}