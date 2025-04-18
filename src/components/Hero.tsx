import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="h-screen w-full relative flex justify-start items-center px-[50px] md:px-[75px] lg:px-[150px]"
      id="hero"
    >
      <div className="h-screen w-full bg-black bg-opacity-40 z-10 absolute top-0 left-0"></div>
      <div className="flex flex-col justify-start items-start z-20">
        <h1 className="uppercase text-[50px] md:text-[80px] lg:text-[100px] font-black leading-tight">
          Split Soul
        </h1>
        <h2 className="text-[40px] font-black text-artioRed leading-tight">
          02/05/2025
        </h2>
        <Button href="https://kycker.ffm.to/splitsoul" content="Pre Save" />
      </div>
    </section>
  );
}
