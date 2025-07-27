

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-blue-200  px-6 marker-font -mt-2" id="about" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700  mb-6 text-center">
            About 805 Cleaning Crew
          </h2>
          <p className="text-slate-700 text-lg mb-4">
            At 805 Cleaning Crew, we’re more than just cleaners—we’re caretakers of your space. Based in the heart of the Central Coast, we specialize in residential, commercial, and move-in/move-out cleaning services that make your property shine.
          </p>
          <p className="text-slate-700  text-lg mb-4">
            With a focus on reliability, eco-friendly products, and customer satisfaction, our team is dedicated to delivering spotless results every time. Whether it’s a one-time deep clean or ongoing service, we tailor every job to your needs.
          </p>
          <p className="text-slate-700  text-lg">
            Experience the difference of a local crew that truly cares. Your clean, your way — with 805 Cleaning Crew.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src="/lady-cleaner.png" // Replace with your team or workspace image
            alt="805 Cleaning Crew team"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
