import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/TopBar'
import Footer from './components/Footer'



const page = () => {
  return (
    <div className='w-full max-h-screen  overflow-x-hidden scroll-smooth'>
      <Navbar></Navbar>
      <section className="relative bg-blue-400 overflow-hidden">
        {/* Hero Content */}
        <HeroSection />

        {/* Bottom Wave Divider */}
        <svg
          className="w-full h-[120px] block leading-none -mb-1"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BFDBFE" // Match this with the next section (About's bg)
            d="
        M0,80 
        C120,40 240,120 360,80 
        C480,40 600,120 720,80 
        C840,40 960,120 1080,80 
        C1200,40 1320,110 1440,80 
        L1440,150 L0,150 Z"
          />
        </svg>
        <AboutSection />
      </section>




      <section className="relative bg-blue-400  overflow-hidden">
        {/* Top Wave */}
        <svg
          className="w-full h-[100px] block leading-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BFDBFE"
            d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,0L0,0Z"
          />
        </svg>


        <ServicesSection />

      </section>


      <div className="relative  bg-blue-400 -mt-1">
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