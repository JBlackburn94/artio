import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../public/new-contact.webp";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutubeSquare,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center max-h-screen my-20 lg:my-0 lg:min-h-screen px-[50px] md:px-[75px] lg:px-[250px]">
      <div className="">
        <h2 className="text-[70px] font-black text-artioRed uppercase">
          Artio
        </h2>
        <p className="uppercase font-black text-artioRed text-xl">Contacts:</p>
        <ul>
          <h3 className="font-black uppercase">Booking:</h3>
          <li className="mb-5">lola.castillomurphy@caa.com</li>
          <h3 className="font-black uppercase">Press & General Enquiries:</h3>
          <li className="mb-5">katherine@5bam.com</li>
        </ul>
        <div className="flex mt-4 mb-20">
          <Link
            href={"https://music.apple.com/gb/artist/artio/585230648"}
            target="_blank"
          >
            <SiApplemusic size={20} className="social-link" />
          </Link>
          <Link
            href={"https://www.tiktok.com/@artiomusic?lang=en"}
            target="_blank"
          >
            <FaTiktok size={20} className="social-link" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCN6Em1EiZtA_YR37VXprdYg"}
            target="_blank"
          >
            <FaYoutubeSquare size={20} className="social-link" />
          </Link>
          <Link
            href={"https://open.spotify.com/artist/0l2QxnR8KJQT4m2Ax8rhh5"}
            target="_blank"
          >
            <FaSpotify size={20} className="social-link" />
          </Link>
          <Link
            href={"https://www.instagram.com/artiomusic/?hl=en"}
            target="_blank"
          >
            <FaInstagram size={20} className="social-link" />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={aboutImg} alt="A promo shot of Artio" />
      </div>
    </section>
  );
}
