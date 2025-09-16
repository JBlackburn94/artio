import Script from "next/script";
import Image from "next/image";
import ticket from "/public/tickets.png";
import contact from "*.jpg";

export default function Tickets() {
    return (
        <section
            className="relative min-h-screen bg-black/40 px-5 md:px-20 py-32"
            id="tickets"
        >
            <div className="z-30">
                <h2 className="artio-font text-6xl lg:text-7xl text-center">
                    Tickets
                </h2>
            </div>
            <div className="ticket-container mt-5 z-30">
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
                    style={{display: "none"}}
                ></a>
                <Script src="//widget-app.songkick.com/injector/10060465"></Script>
            </div>
            <div className="absolute inset-0 overflow-hidden h-full w-full -z-10">
                <Image src={ticket} alt="Contact image background" fill={true}
                       className="object-cover object-center"/>
            </div>
        </section>
    );
}

{
    /* <h2 className="text-artioRed text-[70px] text-center font-black uppercase">
    Tickets
  </h2>
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
  </div> */
}
