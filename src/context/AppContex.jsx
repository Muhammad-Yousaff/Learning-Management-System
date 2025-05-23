import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY;
 const navigate =useNavigate
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEucator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  const calculaterating =(course)=>{
if(course.courseRatings.length ===0){
  return 0;
}
let totalRating =0
course.courseRatings.forEach(rating=> {
  totalRating +=rating.rating
})
return totalRating / course.courseRatings.length
  }

const fetchEnrolledCourses = async () =>{
  setEnrolledCourses(dummyCourses)
}


  useEffect(() => {
    fetchAllCourses()
    fetchEnrolledCourses
  }, []);

  const value = {
    currency,
    allCourses,
    Navigate,
    calculaterating,
    isEducator,
  
    setIsEucator,
    enrolledCourses
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
