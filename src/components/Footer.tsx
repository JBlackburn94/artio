import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[30px] bg-artioRed w-full flex items-center justify-center font-semibold text-[12px]">
      <p>
        Website by{" "}
        <Link
          href={"https://jasonblackburn.co.uk/"}
          className="underline"
          target="_blank"
        >
          jasonblackburn.co.uk
        </Link>
      </p>
    </footer>
  );
}
