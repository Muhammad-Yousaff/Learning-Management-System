import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContex';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency ,calculaterating } = useContext(AppContext);

  if (!course) return null;

  return (
    <Link
      to={`/course${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-300 rounded-lg overflow-hidden pb-6 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <img
        className="w-full h-48 object-cover"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />

      <div className="p-3 text-left space-y-1">
        <h3 className="text-base font-semibold text-gray-800">{course.courseTitle}</h3>
        <p className="text-gray-500 text-sm">{course.educator.name}</p>

        <div className="flex items-center space-x-2 text-sm">
          <p className="text-yellow-600 font-medium">{calculaterating(course)}</p>
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={assets.star}
                alt={i< Math.floor(calculaterating(course)) ? assets.star :assets.star_blank }
                className="w-4 h-4"
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.leng}</p>
        </div>

        <p className="text-base font-semibold text-gray-900">
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
