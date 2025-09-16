import {ButtonProps} from "@/types";
import Link from "next/link";

export default function Button({href, content}: ButtonProps) {
    return (
        <Link
            href={href}
            className="px-3 py-4 text-sm md:text-xl rounded-lg shadow-xl font-bold tracking-tight text-black bg-white uppercase text-center hover:bg-opacity-40 transition duration-300 ease-in-out"
            target="_blank"
        >
            {content}
        </Link>
    );
}
