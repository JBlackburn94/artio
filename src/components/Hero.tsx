"use client";
import Button from "./Button";
import Image from "next/image";
import hero from "../../public/hero.png";

export default function Hero() {
    return (
        <section
            className="h-screen w-full overflow-hidden relative flex justify-start items-center px-[50px] md:px-[75px] lg:px-[150px]"
            id="hero"
        >
            <div className="z-10 flex flex-col gap-5 justify-end items-center h-full w-full mb-10 text-center">
                <h1 className="text-5xl lg:text-7xl artio-font">The devil you know</h1>
                <Button href={"https://ffm.to/artiothedevilyouknow"} content={"Stream Now"}/>
            </div>
            <div className="absolute inset-0">
                <Image src={hero} alt={"A promo image of Artio"} className="w-full h-full object-cover object-center"/>
            </div>
        </section>
    );
}
