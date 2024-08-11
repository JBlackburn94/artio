import Link from "next/link";
import { TicketContainerProps } from "@/types";

export default function TicketContainer({
  date,
  city,
  venue,
}: TicketContainerProps) {
  return (
    <div className="bg-artioBlack h-[150px] rounded-xl flex justify-between items-center px-[15px]">
      <div className="flex flex-col gap-[10px]">
        <p className="font-semibold">{date}</p>
        <p className="font-black text-[20px]">{city}</p>
        <p className="font-thin text-artioRed">{venue}</p>
      </div>
      <Link
        href="/"
        className="px-4 py-2 bg-artioWhite text-artioRed font-semibold"
      >
        Tickets
      </Link>
    </div>
  );
}
