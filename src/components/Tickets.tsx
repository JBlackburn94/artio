import localFont from "next/font/local";
import TicketContainer from "./TicketContainer";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function Tickets() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center px-[28px] lg:px-[250px] py-10"
      id="tickets"
    >
      <h2 className={`${optil.className} text-[100px]`}>Upcoming Shows</h2>
      <div className="w-full flex flex-col gap-[20px]">
        <TicketContainer />
        <TicketContainer />
        <TicketContainer />
        <TicketContainer />
      </div>
    </section>
  );
}
