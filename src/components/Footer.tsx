import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[30px] bg-artioRed w-full flex items-center justify-center font-semibold text-[12px]">
      <p className="capitalize">
        Website by{" "}
        <Link
          href={"https://www.instagram.com/jblackburn.creates"}
          className="underline"
          target="_blank"
        >
          @jblackburn.creates
        </Link>
      </p>
    </footer>
  );
}
