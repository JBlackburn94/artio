"use client";

import Image from "next/image";
import Link from "next/link";
import orderBackground from "/public/order-background.webp";
import cd from "/public/CD.png";
import vinyl from "/public/vinyl.png";
import rocksound from "/public/rocksound.png";

export default function Orders() {
    return (
        <section className="h-fit w-screen relative p-5" id="merch">
            <div className="grid grid-rows-3 grid-cols-1 gap-5 z-10">
                <div className="grid grid-cols-2 row-span-1 z-10 bg-black/40 p-5 place-items-center max-lg:grid-rows-2 max-lg:grid-cols-1">
                    <div>
                        <Image src={vinyl} alt={"Vinyl bundle"} className="h-auto order-image"/>
                    </div>
                    <div className="w-1/2">
                        <h3 className="artio-font text-3xl">Soul Rot - Vinyl</h3>
                        <p className="mt-5">Includes an 8 page lyric and art booklet</p>
                        <p className="mb-5">All vinyl is uniquely pressed and shades of green may vary</p>
                        <Link href="https://artio.tmstor.es/product/soul-rot-rot-variant-eco-colour-signed-vinyl?cur=GBP" target="_blank" className="text-lg flex justify-center items-center bg-black text-white py-3 px-4">Order now</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 row-span-1 z-10 bg-black/40 p-5 place-items-center max-lg:grid-rows-2 max-lg:grid-cols-1">
                    <div>
                        <Image src={cd} alt={"CD bundle"} className="h-auto order-image"/>
                    </div>
                    <div className="w-1/2">
                        <h3 className="artio-font text-3xl mb-5">Soul Rot - CD</h3>
                        <Link href="https://artio.tmstor.es/product/soul-rot-signed-cd" target="_blank" className="text-lg flex justify-center items-center bg-black text-white py-3 px-4">Order now</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 row-span-1 z-10 bg-black/40 p-5 place-items-center max-lg:grid-rows-2 max-lg:grid-cols-1">
                    <div>
                        <Image src={rocksound} alt={"Vinyl bundle"} className="h-auto order-image"/>
                    </div>
                    <div className="w-1/2">
                        <h3 className="artio-font text-3xl">Soul Rot - Vinyl (Rocksound variant)</h3>
                        <p className="my-5">Exclusive Rocksound variant</p>
                        <Link href="https://shop.rocksound.tv/products/soul-rot-exclusive-canal-variant-lp-exclusive-signed-artio-poster?srsltid=AfmBOoqFSD6_-WZdMyWhLUZ_gT2g45GfGvUTG0RrTbOerVjjm1KaMlvA" target="_blank" className="text-lg flex justify-center items-center bg-black text-white py-3 px-4">Order now</Link>
                    </div>
                </div>
                <div className="z-10 flex flex-col justify-center items-center gap-5 bg-black/40 p-5">
                    <p className="text-xl uppercase font-semibold">More merch is available at our official merch store below</p>
                    <Link href="https://apm.allotment.pro/artist/artio/" target="_blank" className="text-lg flex justify-center items-center w-1/2 bg-black text-white py-3 px-4 z-10">All Merch</Link>
                </div>
            </div>

            <div className="absolute inset-0 z-0">
                <Image src={orderBackground} alt={"A decorative background"} role="presentation" className="opacity-80 w-full h-full object-cover object-top"/>
            </div>
        </section>
    )
};