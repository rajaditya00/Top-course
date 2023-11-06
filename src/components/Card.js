 import React from "react";
 import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";


 function Card (props) {

    let course =props.course;
    let likedCourses =props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

function clickHandeler(){

    //logic

    if(likedCourses.includes(course.id)){
        //pahle se liked hua para tha 
          setLikedCourses((prev)=> prev.filter( ((cid)=>cid !== course.id)));
          toast.warning("liked removed");
    
        }

        else{
            // pahle se liked nhi h ye course 
            // insert krna hai ye course liked courses me 
            if(likedCourses.length === 0){
             
                setLikedCourses([course.id]);
            }
            else{
                // non empty pahle se
                setLikedCourses((prev) =>[...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }

}


    return(
       <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden relative">
         <div className="relative" >
            <img src={course?.image?.url} alt={course?.alt}></img>

            <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center absolute">
                <button onClick={clickHandeler}>
                     {
                        likedCourses.includes(course.id) ?

                        (<FcLike fontSize="1.75rpm"/>):
                        (<FcLikePlaceholder fontSize="1.75rpm"/>)
                         
                     }
                </button>
            </div>
          </div>



            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6" >{course?.title}</p>
                <p className="mt-2 text-white">
                
                {
                    course.description?.length >100 ? 
                    (course.description?.substring(0,100) +"...") :
                     (course?.description)
                }
                    
                    </p>
            </div>
       </div>

    );
}

export default Card;
