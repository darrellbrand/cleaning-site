

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-blue-200  px-6 marker-font -mt-1  " id="about" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-bold text-blue-600 mb-6 text-center">
            About 805 Cleaning Crew
          </h2>
          <p className="text-blue-500 text-xl md:text-2xl mb-4">
            805 Cleaning Crew is your trusted partner for residential, commercial, and move-in/move-out cleaning across California’s Central Coast.
          </p>
          <p className="text-blue-500 text-xl md:text-2xl mb-4">
            We use eco-friendly products and tailor every service to your needs—delivering spotless results with care and attention to detail.
          </p>
          <p className="text-blue-500 text-xl md:text-2xl">
            Experience reliable, caring, local cleaning with 805 Cleaning Crew.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-80 md:h-full ">
          <Image
            src="/lady-cleaner.png" // Replace with your team or workspace image
            alt="805 Cleaning Crew team"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
