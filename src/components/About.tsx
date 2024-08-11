import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/artio-about.webp";
import Button from "./Button";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function About() {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[22px] lg:px-[135px] gap-[38px] mb-10">
      <div
        className="flex flex-col justify-center items-center w-full h-auto lg:w-1/2 gap-[20px]"
        id="about"
      >
        <h2
          className={`${optil.className} uppercase text-[170px] text-artioRed`}
        >
          Artio
        </h2>
        <span className="flex flex-col justify-center items-center border-2 border-artioRed p-2">
          <h3 className="uppercase font-black text-artioRed">
            Alt rock from up north
          </h3>
          <span className="flex items-center gap-x-[20px] gap-y-[10px] justify-center flex-wrap">
            <p>Rae (they/them)</p>
            <p>Jai (they/them)</p>
            <p>Rob (he/him)</p>
            <p>Ieuan (he/him)</p>
          </span>
        </span>
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
          <Button href="/" content="TikTok" />
          <Button href="/" content="Instagram" />
          <Button href="/" content="YouTube" />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-[20px]">
        <Image
          className="hidden lg:block"
          src={aboutImg}
          alt="Promo Shot of Artio"
        />
        <span className="flex flex-col justify-start items-start w-full gap-[10px]">
          <h3 className="uppercase font-black text-artioRed">Contacts</h3>
          <p>
            <span className="font-semibold">Booking:</span>
            <br />
            lola.castillomurphy@caa.com
          </p>
          <p>
            <span className="font-semibold">Press & General Enquiries</span>
            <br />
            ealdwinkleevents@gmail.com
          </p>
        </span>
      </div>
    </section>
  );
}
