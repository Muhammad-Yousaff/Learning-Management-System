import React from 'react'
import Hero from '../../Components/students/Hero'
import Companies from '../../Components/students/Companies'
import CoursesSection from '../../Components/students/CoursesSection'
import CourseCard from '../../Components/students/CourseCard'
import TestimonialsSection from '../../Components/students/TestimonialsSection'
import CallToAction from '../../Components/students/CallToAction'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
    <Hero/>
    <Companies/>
    <CoursesSection/>
    <CourseCard/>
    <TestimonialsSection/>
    <CallToAction/>
    </div>
  )
}

export default Home
