import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/TopBar'
import Footer from './components/Footer'



const page = () => {
  return (
    <div className='w-full max-h-screen bg-blue-400 overflow-x-hidden'>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path fill="#60A5FA" d="M0,100 C720,0 720,0 1440,100 L1440,0 L0,0 Z"></path>
        </svg>
        <section className="bg-blue-200 pt-24">
          {/* Section content */}
        </section>
      </div>

      <AboutSection></AboutSection>
      <div className="relative -mt-1 bg-blue-400">
        <svg
          className="w-full h-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#93c5fd"
            d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>


      <ServicesSection></ServicesSection>

      <div className="relative -mt-1 bg-blue-400">
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
      </div>

      <ContactSection></ContactSection>

      <div className="relative -mt-1 bg-blue-300">
        <svg
          className="w-full h-[80px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1e3a8a" // Tailwind blue-900 for dark footer
            d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,160C840,149,960,139,1080,128C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default page