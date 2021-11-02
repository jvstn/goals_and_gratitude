import { NextPage } from 'next'
import React from 'react'
import FeatureSection from '../components/landing/FeatureSection'
import Footer from '../components/landing/Footer'
import Hero from '../components/landing/Hero'
import TestimonialSection from '../components/landing/TestimonialSection'
import Nav from '../components/Nav'


const LandingPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default LandingPage
