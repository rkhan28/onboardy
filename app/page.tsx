import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
