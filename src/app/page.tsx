"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";
import Orders from "@/components/Orders";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Merch/>
            <Orders />
            <Tickets/>
            <About/>
        </main>
    );
}
