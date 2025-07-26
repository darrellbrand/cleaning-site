import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/TopBar'
import Footer from './components/Footer'



const page = () => {
  return (
    <div className='w-full max-h-screen'>
      <Navbar></Navbar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
    </div>
  )
}

export default page