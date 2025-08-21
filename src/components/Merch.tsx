import Image from "next/image";
import Button from "../components/Button";
import merchImage from "../../public/new-merch.webp";
import BackgroundVideo from "./BackgroundVideo";
import BlackOverlay from "./BlackOverlay";

export default function Merch() {
  return (
    <section
      className="min-h-screen w-full relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[50px] py-10 px-[50px] md:px-[75px] lg:px-[150px]"
      id="merch"
    >
      <BlackOverlay />
      <div className="z-30 w-full lg:w-1/2 flex flex-col gap-30 items-center">
        <h2 className="text-artioRed font-black uppercase leading-tight text-[70px]">
          Merch
        </h2>
        <Button
          href="https://apm.allotment.pro/artist/artio/"
          content="Shop Now"
        />
      </div>
      <div className="z-30 w-full md:w-3/4 lg:w-1/2 overflow-hidden">
        <Image src={merchImage} alt="An image of Artio merch" />
      </div>
      <BackgroundVideo source="/merch-video.m4v" />
    </section>
  );
}
