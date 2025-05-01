"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <Hero />
        <ParallaxBanner
          layers={[{ image: "/parallax-1.webp", speed: -15 }]}
          className="aspect-[2/1 h-screen"
        />
        <Merch />
        <ParallaxBanner
          layers={[{ image: "/parallax-2.webp", speed: -15 }]}
          className="aspect-[2/1 h-screen"
        />
        <Tickets />
        <ParallaxBanner
          layers={[{ image: "/parallax-3.webp", speed: -15 }]}
          className="aspect-[2/1] h-screen"
        />
        <About />
        <ParallaxBanner
          layers={[{ image: "/parallax-4.webp", speed: -15 }]}
          className="aspect-[2/1] h-screen"
        />
        <Footer />
      </ParallaxProvider>
    </main>
  );
}
