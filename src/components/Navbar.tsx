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

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between px-[40px] py-[13px] items-center">
        <div className="flex items-center justify-start gap-[20px] w-1/3">
          {navLinks.map(({ id, name, href }) => (
            <Link key={id} href={href}>
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center w-1/3">
          <Image src={navLogo} alt="Artio Logo" className="w-[70px] h-auto" />
        </div>
        <div className="flex items-center justify-end gap-[20px] w-1/3">
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
      </nav>
    </header>
  );
}
