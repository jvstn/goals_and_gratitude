import { NextPage } from 'next'
import React from 'react'
import Hero from '../components/landing/Hero'
import Nav from '../components/Nav'


const LandingPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  )
}

export default LandingPage
