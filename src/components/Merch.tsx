import localFont from "next/font/local";
import Image from "next/image";
import merchImg from "../../public/artio-tee.webp";
import Button from "./Button";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function Merch() {
  return (
    <section
      className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[31px] lg:px-[216px] gap-[20px] lg:gap-[133px] py-[50px] lg:py-[150px]"
      id="merch"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-[20px]">
        <h2
          className={`${optil.className}  uppercase text-[170px] text-artioRed`}
        >
          Merch
        </h2>
        <h3 className="font-bold text-[28px] text-center capitalize">
          Get the latest official Artio merch.
        </h3>
        <Button href="/" content="Shop Now" />
        <span className="flex flex-col justify-center items-center border-2 border-artioRed p-2">
          <p>
            Limited batches, biodegradable packaging and printed on eco friendly
            water based ink.
          </p>
        </span>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <Image src={merchImg} alt="An image of an artio t-shirt" />
      </div>
    </section>
  );
}
