import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import GamificationElements from './components/GamificationElements'
import AiTechnology from './components/AiTechnology'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <HowItWorks/>
      <GamificationElements/>
      <AiTechnology/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
