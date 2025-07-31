import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/TopBar'
import Footer from './components/Footer'
import Head from 'next/head'


const page = () => {
  return (



    <div className='w-full max-h-screen  overflow-x-hidden scroll-smooth'>
      <Head>
        <title>805 Cleaning Crew | Residential & Commercial Cleaning Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="805 Cleaning Crew offers top-rated residential, commercial, and deep cleaning services across California’s Central Coast. Reliable, eco-friendly, and detail-driven." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="805 Cleaning Crew" />
        <meta property="og:description" content="Professional cleaning services for homes and businesses in the 805 area. Eco-conscious and satisfaction guaranteed." />
        <meta property="og:image" content="/clean2.jpg" />
        <meta property="og:url" content="https://805cleaningcrew.com" />
        <link rel="canonical" href="https://805cleaningcrew.com" />
      </Head>
      <Navbar></Navbar>
      <section className="relative bg-blue-400 overflow-hidden ">
        {/* Hero Content */}
        <HeroSection />

   <svg
  className="w-full h-[120px] block leading-none"
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="heroToBlue200" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#60A5FA" />  {/* blue-400 */}
      <stop offset="100%" stopColor="#BFDBFE" /> {/* blue-200 */}
    </linearGradient>
  </defs>
  <path
    fill="url(#heroToBlue200)"
    d="
      M0,0 
      C360,80 1080,40 1440,100 
      L1440,120 
      L0,120 
      Z"
  />
</svg>

        <div className="relative z-10">

          <AboutSection />
        </div>
      </section>




      <section className="relative bg-blue-400 -mt-1 overflow-hidden">
        {/* Top Wave */}
        <svg
          className="w-full h-[120px] block leading-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BFDBFE"
            d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,0L0,0Z"
          />
        </svg>

        {/* Section Content */}
        <div className="relative z-10">
          <ServicesSection />
        </div>


      </section>


      <div className="relative -mt-1 bg-blue-400 ">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#93c5fd"  // Tailwind blue-300
            d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L0,320Z"
          />
        </svg>
        <ContactSection></ContactSection>
      </div>


      <div className="relative  bg-blue-300 -mt-1">
        <svg
          className="w-full h-[80px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#193cb8" // Tailwind blue-900 for dark footer
            d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,160C840,149,960,139,1080,128C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page