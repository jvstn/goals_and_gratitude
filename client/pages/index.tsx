import { NextPage } from 'next'
import React from 'react'
import Nav from '../components/Nav'
import WithSubnavigation from '../components/Nav'


const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      Hello world;
    </div>
  )
}

export default Home
