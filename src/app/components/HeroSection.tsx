'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className=" min-h-[100vh] w-full flex-col overflow-hidden bg-gradient-to-t from-blue-400 from-0% via-blue-500 via-50% to-blue-600 to-100% flex items-center justify-center  gap-8 px-8 py-2" id="home">
            <div className=" marker-font text-blue-100 text-center   mx-auto pt-20    ">
                <h1 className="text-7xl md:text-9xl font-extrabold leading-tight animate-fade-in-up">
                    805 Cleaning Crew
                </h1>

            </div>


            <div className=" relative w-full  mx-auto flex flex-col md:flex-row justify-center items-center gap-6 ">
                <div className='relative w-[350px] md:w-[900px]  aspect-[4/3] flex-shrink-0 '>
                    <Image
                        src="/team.png"
                        alt="Background"
                        fill
                        className="object-contain object-center "
                        priority
                    />
                </div>
                <div className='flex flex-col items-center justify-center gap-5  w-full text-center'>
                    <p className="text-2xl md:text-5xl text-blue-100 marker-font">
                        Trust 805 Cleaning Crew for reliable, top-quality residential and commercial cleaning across the Central Coast.
                    </p>
                    <div className='flex flex-row items-center justify-center gap-4 w-full '>
                        <button>
                            <Link
                                href="#contact"
                                className=" hover:scale-105 transition duration-300   inline-block bg-blue-100 text-blue-600 font-semibold py-3 px-4 md:py-6 md:px-9 rounded-full hover:bg-blue-300  text-xl md:text-2xl marker-font "
                            >
                                Get a Free Quote
                            </Link>
                        </button>
                        <div className='relative w-[150px] md:w-[500px] aspect-[4/3] flex-shrink-0 animate-float'>
                            <Image
                                src="/spray.png"
                                alt="Background"
                                fill
                                className="object-contain object-center "
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
