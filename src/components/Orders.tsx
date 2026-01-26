"use client";

import Image from "next/image";
import Link from "next/link";
import orderBackground from "/public/order-background.webp";
import cd from "/public/CD.png";
import vinyl from "/public/vinyl.png";
import rocksound from "/public/rocksound.png";

export default function Orders() {
    return (
        <section className="h-fit w-screen flex flex-col justify-center relative p-5" id="merch">
            <Link href="https://artio.tmstor.es" target="_blank" className="hidden max-lg:flex flex-col justify-center items-center text-5xl max-lg:text-3xl artio-font z-10 text-center">
                <p className="overflow-hidden">Order now</p>
                <p className="overflow-hidden">Artio official merch store</p>
            </Link>
            <div className="z-10 flex justify-between items-center gap-10 pt-10 w-screen max-lg:flex-col px-10">
                <div className="flex justify-center items-center">
                    <Image src={vinyl} alt={"Vinyl bundle"} className="h-auto order-image"/>
                </div>
                <div className="flex justify-center items-center max-lg:w-screen max-lg:h-fit">
                    <Image src={cd} alt={"CD Image"} className="h-auto order-image"/>
                </div>
            </div>
                <div className="z-10 pt-10 flex flex-col justify-center items-center text-5xl artio-font max-lg:hidden">
                    <p className="overflow-hidden">Order now</p>
                    <p className="overflow-hidden">Artio official merch store</p>
                </div>
                <div className="z-10 pt-10 flex flex-col justify-center items-center gap-5 text-5xl max-lg:text-3xl artio-font text-center">
                    <Image src={rocksound} alt={"Rocksound bundle"} className="h-auto order-image"/>
                    <p>Rocksound exclusive variant</p>
                </div>
                <div className="absolute inset-0 z-0">
                    <Image src={orderBackground} alt={"A decorative background"} role="presentation" className="opacity-80 w-full h-full object-cover object-top"/>
                </div>
        </section>
    )
};