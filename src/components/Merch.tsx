import Image from "next/image";
import merch from "/public/video.webp";
import Button from "@/components/Button";

export default function Merch() {
  return (
    <section
      id="listen"
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center min-h-screen relative py-10"
    >
      <Image
        src={merch}
        alt="Artio merch video"
        className="absolute inset-0 h-full w-full object-cover object-center -z-10 opacity-80"
      />
      <div className="flex flex-col items-center gap-4 artio-font text-2xl m-5">
        <h3 className="line-clamp-2 text-center leading-tight min-h-[2.5em]">
          The Devil You Know feat Cody Frost
        </h3>
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/UVC2QEprJUo?si=0hYNFEUbS5EiYuBA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-4 artio-font text-2xl m-5">
        <h3 className="line-clamp-2 text-center leading-tight min-h-[2.5em]">
          Let it be a void
        </h3>
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/DjN9ECFp8Bw?si=lCEGTPtGXAYyxASl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-4 artio-font text-2xl m-5">
        <h3 className="line-clamp-2 text-center leading-tight min-h-[2.5em]">
          Seven Suns
        </h3>
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/ehq-MWhittk?si=O4y9H8w7vV1CBksT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
