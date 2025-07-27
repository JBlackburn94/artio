"use client";
import Button from "./Button";
import BackgroundVideo from "./BackgroundVideo";
import BlackOverlay from "./BlackOverlay";

export default function Hero() {
  return (
    <section
      className="h-screen w-full relative flex justify-start items-center px-[50px] md:px-[75px] lg:px-[150px]"
      id="hero"
    >
      <BlackOverlay />
      <div
        className="flex flex-col justify-center items-center md:justify-start md:items-start z-20"
        id="heading"
      >
        <h1 className="uppercase text-[100px] md:text-[80px] lg:text-[100px] text-center md:text-left font-black leading-tight">
          Split Soul
        </h1>
        <Button
          href="https://www.youtube.com/watch?v=-UaA8c-mt2k"
          content="Listen"
        />
      </div>
      <BackgroundVideo source="/hero.m4v" />
    </section>
  );
}
