import Script from "next/script";
import BackgroundVideo from "./BackgroundVideo";
import BlackOverlay from "./BlackOverlay";

export default function Tickets() {
  return (
    <section
      className="h-screen w-full relative flex flex-col justify-center items-center gap-30 px-[50px] md:px-[75px] lg:px-[150px]"
      id="tickets"
    >
      <BlackOverlay />
      <div className="z-30">
        <h2 className="text-artioRed text-[70px] text-center font-black uppercase">
          Tickets
        </h2>
      </div>
      <div className="ticket-container z-30">
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
      <BackgroundVideo source="/tickets-video.m4v" />
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
