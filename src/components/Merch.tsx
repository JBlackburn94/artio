import Image from "next/image";
import Button from "../components/Button";
import merchImage from "../../public/new-merch.webp";

export default function Merch() {
  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-[50px] md:px-[100px]"
      id="merch"
    >
      <div className="flex flex-col justify-center items-center h-[42%] w-full lg:h-full lg:w-1/2 text-center gap-2">
        <h2 className="text-[70px] leading-tight uppercase text-artioRed font-black">
          Merch
        </h2>
        <h3 className="uppercase font-black">Get the latest Artio merch</h3>
        <Button href="https://artio.bigcartel.com/" content="Shop Now" />
        <p className="text-xs w-3/4">
          Limited batches, biodegradable packaging and printed with eco friendly
          water based ink
        </p>
      </div>
      <div className="h-[58%] w-full lg:h-full lg:w-1/2 flex justify-center items-center">
        <Image src={merchImage} alt="An image of Artio merch" />
      </div>
    </section>
  );
}
