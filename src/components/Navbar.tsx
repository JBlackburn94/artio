"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SiApplemusic } from "react-icons/si";
import {
  FaInstagram,
  FaTiktok,
  FaYoutubeSquare,
  FaSpotify,
} from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav className="px-[40px] ${isOpen ? h-auto : h-screen} py-[30px] bg-transparent">
        <div className="flex justify-between items-center">
          <div className="z-50">
            <Image
              src={"/nav-logo-new.webp"}
              alt="Artio Logo"
              height={30}
              width={148}
            />
          </div>
          <div className="hidden lg:flex flex-col items-end z-40">
            <div>
              {navLinks.map(({ id, href, name }) => (
                <Link
                  href={href}
                  key={id}
                  className="mx-2 text-artioRed text-[16px] font-bold uppercase hover:underline transition-all duration-200 ease-in-out"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex mt-4">
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
                href={
                  "https://www.youtube.com/channel/UCN6Em1EiZtA_YR37VXprdYg"
                }
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
          <div className="block lg:hidden z-50">
            <Hamburger toggled={open} toggle={setOpen} />
          </div>
        </div>
        {open && (
          <div className="h-screen w-full absolute top-0 left-0 bg-black bg-opacity-80 z-40 backdrop-blur-md flex flex-col pt-[100px] px-10">
            {navLinks.map(({ id, href, name }) => (
              <Link
                key={id}
                href={href}
                className="text-[40px] mb-[20px] font-black uppercase text-artioRed"
                onClick={handleNav}
              >
                {name}
              </Link>
            ))}
            <hr />
            <div className="flex mt-[50px]">
              <Link
                href={"https://music.apple.com/gb/artist/artio/585230648"}
                target="_blank"
                onClick={handleNav}
              >
                <SiApplemusic size={40} className="social-link" />
              </Link>
              <Link
                href={"https://www.tiktok.com/@artiomusic?lang=en"}
                target="_blank"
                onClick={handleNav}
              >
                <FaTiktok size={40} className="social-link" />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCN6Em1EiZtA_YR37VXprdYg"
                }
                target="_blank"
                onClick={handleNav}
              >
                <FaYoutubeSquare size={40} className="social-link" />
              </Link>
              <Link
                href={"https://open.spotify.com/artist/0l2QxnR8KJQT4m2Ax8rhh5"}
                target="_blank"
                onClick={handleNav}
              >
                <FaSpotify size={40} className="social-link" />
              </Link>
              <Link
                href={"https://www.instagram.com/artiomusic/?hl=en"}
                target="_blank"
                onClick={handleNav}
              >
                <FaInstagram size={40} className="social-link" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
