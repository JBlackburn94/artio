import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[30px] bg-artioRed w-full flex items-center justify-center font-semibold text-[12px]">
      <p className="capitalize">
        Website by{" "}
        <Link href={"/"} className="underline">
          @j.creates
        </Link>
      </p>
    </footer>
  );
}
