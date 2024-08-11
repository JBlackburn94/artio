import localFont from "next/font/local";
import TicketContainer from "./TicketContainer";
import Script from "next/script";

const optil = localFont({ src: "../font/OPTILency.otf" });

export default function Tickets() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center px-[28px] lg:px-[250px] py-10"
      id="tickets"
    >
      <h2 className={`${optil.className} text-[100px]`}>Upcoming Shows</h2>
      <div className="w-full flex flex-col gap-[20px]">
        <a
          href="https://www.songkick.com/artists/10060465"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
          style={{ display: "none" }}
        ></a>
        <Script src="//widget-app.songkick.com/injector/1084890"></Script>
      </div>
    </section>
  );
}
