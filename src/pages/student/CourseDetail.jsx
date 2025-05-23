import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContex'
import Loading from '../../Components/students/Loading'
import Footer from '../../Components/students/Footer'


const CourseDetail = () => {
const {id} = useParams()
const [courseData, setCourseData] =useState(null)
const {allCourses} =useContext(AppContext)
 

const fetchCourseData = async ()=>{
 const findCourses=allCourses.find(course=>course.id_id === id)
 setCourseData(findCourses);
}

useEffect(()=>{
  fetchCourseData()
},[])


return courseData ?(
  <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
      
      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bh-gradient-to-b from-cyan-100/70'></div>

      {/* left colum */}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1>{courseData.coursetitle}</h1>
        <p className='pt-4 md:text-base' dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>
      </div>
      {/* right colum */}
      <Footer/>
    </div>
    </>
  ) : <Loading/>
}

export default CourseDetail


