import Link from "next/link";
import Image from "next/image";
import logo from '/public/logo.png';
import contact from '/public/contact.jpg';

export default function About() {
    return (
        <section id="contact" className="relative min-h-screen bg-black/40 px-5 md:px-20 py-32">
            <div className="z-30 artio-font">
                <Image src={logo} alt="Artio logo" className="h-40 lg:h-52 w-auto"/>
                <div className="space-y-4 break-all">
                    <h2 className="text-4xl lg:text-5xl">Contacts</h2>
                    <h3 className="text-3xl lg:text-4xl">Booking</h3>
                    <Link className="text-lg md:text-xl lg:text-2xl"
                          href="mailto:Lola.castillomurphy@caa.com">Lola.castillomurphy@caa.com</Link>
                    <h3 className="text-3xl lg:text-4xl">Management</h3>
                    <Link className="text-lg md:text-xl lg:text-2xl"
                          href="mailto:Katherine@5bam.com">Katherine@5bam.com</Link>
                    <h3 className="text-3xl lg:text-4xl">Press</h3>
                    <Link className="text-lg md:text-xl lg:text-2xl"
                          href="mailto:mark@turnthepageldn.com">mark@turnthepageldn.com</Link>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden h-full w-full -z-10">
                <Image src={contact} alt="Contact image background" fill={true}
                       className="object-cover object-center"/>
            </div>
        </section>
    );
}
