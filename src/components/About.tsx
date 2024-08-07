import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/artio-about.webp";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function About() {
  return (
    <section className="h-screen w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[22px] lg:px-[135px] gap-[38px]">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-[20px]">
        <h2
          className={`${optil.className} uppercase text-[170px] text-artioRed`}
        >
          Artio
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga natus
          ea temporibus omnis minima reprehenderit impedit mollitia quidem
          voluptate magnam corporis, quis voluptates at laborum magni, veritatis
          ad cupiditate laboriosam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fuga natus ea temporibus omnis minima reprehenderit
          impedit mollitia quidem voluptate magnam corporis, quis voluptates at
          laborum magni, veritatis ad cupiditate laboriosam.
        </p>
        <h3 className="font-black text-[20px] text-artioRed">Find Us!</h3>
        <span className="flex gap-[20px] flex-wrap">
          <Link
            href={"/"}
            className="bg-artioWhite text-artioRed px-[19px] py-[8px] font-black uppercase"
          >
            TikTok
          </Link>
          <Link
            href={"/"}
            className="bg-artioWhite text-artioRed px-[19px] py-[8px] font-black uppercase"
          >
            Instagram
          </Link>
          <Link
            href={"/"}
            className="bg-artioWhite text-artioRed px-[19px] py-[8px] font-black uppercase"
          >
            YouTube
          </Link>
        </span>
      </div>
      <div className="lg:flex flex-col justify-center items-center w-full lg:w-1/2 hidden">
        <Image src={aboutImg} alt="Promo Shot of Artio" />
      </div>
    </section>
  );
}
