import Image from "next/image";
import albumArt from "../../public/artwork.webp";
import Link from "next/link";
import localFont from "next/font/local";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function Hero() {
  return (
    <section
      className="w-full px-[40px] flex flex-col justify-center lg:flex-row lg:justify-between items-center py-10 gap-[40px]"
      id="hero"
    >
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <h1
          className={`${optil.className} uppercase text-[60px] lg:text-[80px]`}
        >
          Debut Album
        </h1>
        <Image
          src={albumArt}
          alt="Artwork for Babyface Album"
          className="md:h-[300px] lg:h-[400px] w-[250px] md:w-[300px] lg:w-[400px]"
        />
        <Link
          className="mt-[20px] bg-artioRed font-black py-[8px] px-[20px] text-[20px] lg:text-[28px] uppercase"
          href="https://fairsound.com/product/artio-babyface/"
          target="_blank"
        >
          Get Here
        </Link>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <iframe
          className="aspect-video  w-[400px] lg:w-[600px]"
          src="https://www.youtube.com/embed/hqC2oGEPdvI"
        ></iframe>
      </div>
    </section>
  );
}
