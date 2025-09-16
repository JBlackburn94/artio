import Image from "next/image";
import merch from '/public/merch.jpg';
import Button from "@/components/Button";
import contact from "*.jpg";

export default function Merch() {
    return (
        <section
            className="relative flex justify-center items-center min-h-screen bg-black/40 px-5 md:px-20 py-32"
            id="merch"
        >
            <div className="flex flex-col justify-center items-center gap-5 z-30 h-full w-full">
                <h1 className="text-6xl lg:text-7xl artio-font">Merch</h1>
                <div className="flex flex-col gap-5">
                    <Button href={"https://www.impericon.com/collections/artio"} content={"Impericon Exclusive Merch"}/>
                    <Button href={"https://apm.allotment.pro/artist/artio/"} content={"Artio Official Merch Store"}/>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image src={merch} alt="Contact image background" fill
                       className="object-cover object-center"/>
            </div>
        </section>
    );
}
