"use client";
import Button from "./Button";
import Image from "next/image";
import hero from "../../public/hero-bg.png";
import soulRot from '../../public/soul rot text.png';
import bundleOne from '../../public/bundle-1.png';
import rocksound from '../../public/rocksound.png';
import BlackOverlay from "@/components/BlackOverlay";

export default function Hero() {
    return (
        <section
            className="min-h-screen w-full overflow-hidden relative flex flex-col pt-60 max-md:pt-40 justify-center items-center px-[50px] md:px-[75px] lg:px-[150px]"
            id="merch"
        >
            <div className="flex flex-col justify-center items-center z-20 gap-5">
                <Button href={"https://ffm.to/soulrot"} content={"Pre-Save"}/>
                <Image src={soulRot} alt={"Soul Rot pre-order information"}/>
                <Image src={bundleOne} alt={"Artio merch bundle"} className="h-auto max-w-full mt-10 mb-5"/>
                <Button href={"https://artio.tmstor.es/"} content={"Pre-Order Bundles"}/>
                <Button href={"https://apm.allotment.pro/artist/artio/"} content={"Artio Official Merch Store"}
                />
            </div>

            <div className="flex justify-center items-end gap-20 max-md:flex-col z-20 mt-10 mb-20">

                <div className="flex flex-col gap-5">
                    <Image src={rocksound} alt={"Rocksound Bundle"} className="max-h-96 w-auto mt-10"/>
                    <Button
                        href={"https://shop.rocksound.tv/products/soul-rot-exclusive-canal-variant-lp-exclusive-signed-artio-poster"}
                        content={"Rocksound Exclusive"}/>
                </div>
            </div>


            <div className="absolute inset-0 z-0">
                <BlackOverlay/>
                <Image src={hero} alt={"A promo image of Artio"} className="w-full h-full object-cover object-top"/>
            </div>
        </section>
    );
}
