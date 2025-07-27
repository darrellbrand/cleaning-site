'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-[100vh] w-screen overflow-hidden bg-blue-200 flex items-center justify-center " id="home">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center ">
                <div className="relative w-full h-full">
                    <Image
                        src="/clean2.jpg"
                        alt="Background"
                        fill
                        className="object-cover object-center opacity-90 mix-blend-overlay"
                        priority
                    />
                </div>

                {/* Optional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-600/90  to-slate-600/10" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full marker-font text-blue-50 text-center px-6  max-w-7xl mx-auto  gap-8   pb-60 md:pb-80 ">
                <h1 className="text-4xl md:text-8xl font-extrabold leading-tight">
                    805 Cleaning Crew
                </h1>
                <p className="text-lg md:text-3xl">
                     Trust 805 Cleaning Crew for reliable, top-quality residential and commercial cleaning across the Central Coast.
                 </p>
               
                <Link
                    href="#contact"
                    className="inline-block bg-blue-100 text-blue-700 font-semibold py-2 px-2 md:py-6 md:px-9 rounded-full hover:bg-gray-200 transition duration-300 text-md md:text-2xl"
                >
                    Get a Free Quote
                </Link>
            </div>
        </section>
    );
}
