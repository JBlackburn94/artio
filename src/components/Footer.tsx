import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-[30px] bg-black w-full flex items-center justify-center font-semibold text-[12px]">
            <p>
                Website by{" "}
                <Link
                    href={"mailto:jblackburndeveloper@gmail.com"}
                    className="underline"
                    target="_blank"
                >
                    jblackburndeveloper@gmail.com
                </Link>
            </p>
        </footer>
    );
}
