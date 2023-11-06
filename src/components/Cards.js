import React from "react";
import Card from "./Card";
import {useState} from 'react'

function Cards (props) {
    let courses = props.courses;
    let category = props.category;
  
     

const [likedCourses, setLikedCourses] = useState([]);

 

 
 
    // it returns you alist of all courses received from api responses
 const getCourses =() =>{

    if(category === "All"){
    let allcourses =[];
    Object.values(courses).forEach((courseCategory)=>{
        courseCategory.forEach((course)=>{
            allcourses.push(course);
        })
    })
   return allcourses;
 
}

else{
    // mai sirf specific category ka data array karunga
    return courses[category];
}
 }
   return(
<div className="flex flex-wrap justify-center gap-4 mb-4">
 
   {
    getCourses().map( (course) => (
        <Card key={course.id}
        course ={course}
        likedCourses={likedCourses}
        setLikedCourses ={setLikedCourses}/>
    ))
   }  
        
 
</div>

   )
}

export default Cards;




 