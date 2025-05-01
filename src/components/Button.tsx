import { ButtonProps } from "@/types";
import Link from "next/link";

export default function Button({ href, content }: ButtonProps) {
  return (
    <Link
      href={href}
      className="bg-artioRed px-5 py-4 mt-10 text-[20px] font-black uppercase text-center hover:bg-opacity-40 transition duration-300 ease-in-out"
      target="_blank"
    >
      {content}
    </Link>
  );
}
