import React from 'react'
import Hero from '../../Components/students/Hero'
import Companies from '../../Components/students/Companies'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
    <Hero/>
    <Companies/>
    </div>
  )
}

export default Home
