'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative md:h-[100vh] h-[50vh] w-screen overflow-hidden bg-blue-200 flex items-center justify-center">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pt-10">
                <div className="relative w-full h-full">
                    <Image
                        src="/hospital.png"
                        alt="Background"
                        fill
                        className="object-fit object-center opacity-90 mix-blend-overlay"
                        priority
                    />
                </div>

                {/* Optional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70  to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-blue-100 text-center px-6  max-w-7xl mx-auto  pt-15  gap-10 md:gap-15  ">
                <h1 className="text-3xl md:text-9xl font-extrabold leading-tight">
                    805 Cleaning Crew
                </h1>
                <p className="text-lg md:text-3xl">
                    Trust 805 Cleaning Crew for reliable, top-quality residential and commercial cleaning across the Central Coast.
                </p>
                <Link
                    href="/get-a-quote"
                    className="inline-block bg-blue-100 text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
                >
                    Get a Free Quote
                </Link>
            </div>
        </section>
    );
}
