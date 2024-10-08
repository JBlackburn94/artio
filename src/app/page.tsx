import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Marquee autoFill={true} className="p-2 bg-artioRed" pauseOnHover={true}>
        <Link href={"#"} className="uppercase font-bold mx-4">
          BABYFACE out now via Slam Dunk Records
        </Link>
      </Marquee>
      <Hero />
      <About />
      <Tickets />
      <Merch />
      <Footer />
    </main>
  );
}
