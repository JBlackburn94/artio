"use client";
import Image from "next/image";
import hero from "/public/hero.webp";
import spiralIcon from "/public/spiral.png";
import albumTitle from "/public/hero-text.png";
import Link from "next/link";


export default function Hero() {
    return (
        <section
            className="min-h-screen flex flex-col justify-end items-center relative z-10"
        >
            <Link href="https://ffm.to/soulrot" target="_blank">
                <div className="z-10 relative flex w-screen justify-start items-center">
                    <div className="w-1/4 p-5">
                        <Image src={spiralIcon} alt={"A spiral icon"} className="h-auto w-auto"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image src={albumTitle} alt={"Artio's album title"} className="h-auto w-auto"/>
                        <h2 className="text-2xl text-black -translate-y-10 max-md:-translate-y-5 uppercase font-bold">Out Now</h2>
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <Image src={hero} alt={"A promo image of Artio"} className="w-full h-full object-cover object-top"/>
                </div>
            </Link>
        </section>
    );
}
