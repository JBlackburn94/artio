import Image from "next/image";
import merch from '/public/video.png';

export default function Merch() {
    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen bg-black/40 px-5 md:px-20 py-32"
            id="listen"
        >
            <h1 className="artio-font text-5xl max-md:text-3xl text-center my-5">The Devil You Know feat. Cody
                Frost</h1>
            <h2 className="artio-font text-3xl max-md:text-2xl">Out now</h2>
            <iframe
                className="w-[calc(100%-48px)] max-w-[1000px] aspect-video mx-auto bg-black"
                src="https://www.youtube.com/embed/UVC2QEprJUo?si=k6X-FWHNpTUHW2uv"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image src={merch} alt="Contact image background" fill
                       className="object-cover object-center"/>
            </div>
        </section>
    );
}
