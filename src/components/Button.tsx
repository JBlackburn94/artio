import { ButtonProps } from "@/types";
import Link from "next/link";

export default function Button({ href, content }: ButtonProps) {
  return (
    <Link
      href={href}
      className="bg-artioWhite text-artioRed px-[19px] py-[8px] text-[20px] font-black uppercase"
    >
      {content}
    </Link>
  );
}
