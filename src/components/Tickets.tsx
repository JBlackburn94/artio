import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

const optil = localFont({ src: "../font/OPTILency.otf" });
const archivo = Archivo({ subsets: ["latin"] });

export default function Tickets() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center px-[28px] lg:px-[250px] py-10"
      id="tickets"
    >
      <h2 className={`${optil.className} text-[100px]`}>Upcoming Shows</h2>
      <div className="ticket-container">
        <a
          href="https://www.songkick.com/artists/10060465"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="off"
          data-detect-style="off"
          data-background-color="none"
          data-font-color="rgb(240,238,234)"
          data-button-bg-color="rgb(240,238,234)"
          data-button-text-color="rgb(197,52,52)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="off"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="on"
          style={{ display: "none" }}
        ></a>
        <Script src="//widget-app.songkick.com/injector/10060465"></Script>
      </div>
    </section>
  );
}
