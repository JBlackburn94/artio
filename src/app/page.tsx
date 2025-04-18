import Hero from "@/components/Hero";
import About from "@/components/About";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Merch />
      <Tickets />
      <About />
      <Footer />
    </main>
  );
}
