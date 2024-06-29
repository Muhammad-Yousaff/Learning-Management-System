import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContex';
import CourseCard from '../../Components/students/CourseCard';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);
  const coursesToDisplay = Array.isArray(allCourses) ? allCourses.slice(0, 4) : [];

  return (
    <div className='px-8 md:px-40'>
      <h2 className='text-3xl font-medium text-black text-center mb-4'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 text-center mb-10'>
        Discover our top rated courses across various categories.
        From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
        {coursesToDisplay.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className='flex justify-center'>
      <Link
  to={'/course-list'}
  onClick={() => scrollTo(0, 0)}
  className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded mb-10'
>
  Show all Courses
</Link>

      </div>
    </div>
  );
};

export default CoursesSection;
