"use client";
import {navLinks} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {SiApplemusic} from "react-icons/si";
import {
    FaInstagram,
    FaTiktok,
    FaYoutubeSquare,
    FaSpotify,
} from "react-icons/fa";
import {Sling as Hamburger} from "hamburger-react";
import {useState, useEffect} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import logo from "/public/logo.png";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [open]);

    return (
        <header className="absolute top-0 left-0 artio-font w-full">
            <nav className="px-5 md:px-[40px] py-[30px]">
                <div className="flex justify-between items-center">
                    <div className="z-50">
                        <Image
                            src={logo}
                            alt="Artio Logo"
                            className="h-16 md:h-24 w-auto"
                        />
                    </div>
                    <div className="hidden lg:flex flex-col items-end z-40">
                        <div>
                            {navLinks.map(({id, href, name}) => (
                                <Link
                                    href={href}
                                    key={id}
                                    className="mx-2 text-2xl font-bold uppercase"
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
                                <SiApplemusic size={30} className="social-link"/>
                            </Link>
                            <Link
                                href={"https://www.tiktok.com/@artiomusic?lang=en"}
                                target="_blank"
                            >
                                <FaTiktok size={30} className="social-link"/>
                            </Link>
                            <Link
                                href={
                                    "https://www.youtube.com/channel/UCN6Em1EiZtA_YR37VXprdYg"
                                }
                                target="_blank"
                            >
                                <FaYoutubeSquare size={30} className="social-link"/>
                            </Link>
                            <Link
                                href={"https://open.spotify.com/artist/0l2QxnR8KJQT4m2Ax8rhh5"}
                                target="_blank"
                            >
                                <FaSpotify size={30} className="social-link"/>
                            </Link>
                            <Link
                                href={"https://www.instagram.com/artiomusic/?hl=en"}
                                target="_blank"
                            >
                                <FaInstagram size={30} className="social-link"/>
                            </Link>
                        </div>
                    </div>
                    <div className="block lg:hidden z-50">
                        <Hamburger toggled={open} toggle={setOpen}/>
                    </div>
                </div>
            </nav>
            {open && (
                <div
                    className="h-screen inset-0 fixed artio-font bg-black bg-opacity-50 z-40 backdrop-blur-md flex flex-col pt-[100px] px-10">
                    {navLinks.map(({id, href, name}) => (
                        <Link
                            key={id}
                            href={href}
                            className="text-[40px] mb-[20px] font-black uppercase"
                            onClick={handleNav}
                        >
                            {name}
                        </Link>
                    ))}
                    <hr/>
                    <div className="flex mt-[50px]">
                        <Link
                            href={"https://music.apple.com/gb/artist/artio/585230648"}
                            target="_blank"
                            onClick={handleNav}
                        >
                            <SiApplemusic size={40} className="social-link"/>
                        </Link>
                        <Link
                            href={"https://www.tiktok.com/@artiomusic?lang=en"}
                            target="_blank"
                            onClick={handleNav}
                        >
                            <FaTiktok size={40} className="social-link"/>
                        </Link>
                        <Link
                            href={"https://www.youtube.com/channel/UCN6Em1EiZtA_YR37VXprdYg"}
                            target="_blank"
                            onClick={handleNav}
                        >
                            <FaYoutubeSquare size={40} className="social-link"/>
                        </Link>
                        <Link
                            href={"https://open.spotify.com/artist/0l2QxnR8KJQT4m2Ax8rhh5"}
                            target="_blank"
                            onClick={handleNav}
                        >
                            <FaSpotify size={40} className="social-link"/>
                        </Link>
                        <Link
                            href={"https://www.instagram.com/artiomusic/?hl=en"}
                            target="_blank"
                            onClick={handleNav}
                        >
                            <FaInstagram size={40} className="social-link"/>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
