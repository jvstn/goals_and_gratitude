import { NextPage } from 'next'
import React from 'react'
import FeatureSection from '../components/landing/FeatureSection'
import Hero from '../components/landing/Hero'
import Nav from '../components/Nav'


const LandingPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureSection />
    </div>
  )
}

export default LandingPage
