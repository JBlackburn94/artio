"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import navLogo from "../../public/nav-logo.svg";
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
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    gsap.to("#mobile-nav", {
      x: nav ? "-100%" : 0,
      opacity: nav ? 0 : 1,
      duration: 0.2,
    });

    const navLink = document.querySelectorAll("#nav-link");
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        setNav(false);
        gsap.to("#mobile-nav", {
          x: "-100%",
          opacity: 0,
          duration: 0.2,
        });
      });
    });
  };
  return (
    <header>
      <nav className="flex justify-between px-[40px] py-[13px] items-center">
        <div className="hidden lg:flex items-center justify-start gap-[20px] w-1/3">
          {navLinks.map(({ id, name, href }) => (
            <Link key={id} href={href}>
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-start lg:justify-center w-1/2 lg:w-1/3 z-20">
          <Image
            src={navLogo}
            alt="Artio Logo"
            className="w-[70px] h-auto"
            priority
          />
        </div>
        <div className="hidden lg:flex items-center justify-end gap-[20px] w-1/3">
          <Link href={"#"}>
            <FaInstagram className="text-[30px]" />
          </Link>
          <Link href={"#"}>
            <FaTiktok className="text-[30px]" />
          </Link>
          <Link href={"#"}>
            <FaYoutubeSquare className="text-[30px]" />
          </Link>
          <Link href={"#"}>
            <FaSpotify className="text-[30px]" />
          </Link>
          <Link href={"#"}>
            <SiApplemusic className="text-[30px]" />
          </Link>
        </div>
        <div
          className="flex w-1/2 justify-end items-center lg:hidden z-30"
          onClick={handleNav}
        >
          <Hamburger toggled={nav} toggle={setNav} />
        </div>
        <div
          className="absolute flex flex-col items-center justify-center gap-[40px] text-[28px] uppercase font-black h-screen w-full bg-artioRed top-0 left-0 z-10 translate-x-[-100%] opacity-0"
          id="mobile-nav"
        >
          {navLinks.map(({ id, name, href }) => (
            <Link key={id} href={href} id="nav-link">
              {name}
            </Link>
          ))}
          <div className="flex gap-[35px]">
            <Link href={"#"}>
              <FaInstagram className="text-[40px]" />
            </Link>
            <Link href={"#"}>
              <FaTiktok className="text-[40px]" />
            </Link>
            <Link href={"#"}>
              <FaYoutubeSquare className="text-[40px]" />
            </Link>
            <Link href={"#"}>
              <FaSpotify className="text-[40px]" />
            </Link>
            <Link href={"#"}>
              <SiApplemusic className="text-[40px]" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
