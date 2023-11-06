import React from "react";
import Navbar from './components/Navbar';
import{useEffect} from "react";
import {useState} from 'react';
import Cards from './components/Cards';
import Filter from './components/Filter';
import {toast} from "react-toastify";
import Spinner from './components/Spinner';
import {apiUrl,filterData} from'./data';



 function App(){

const[courses,setCourses] = useState(null);
const[loading, setLoading] = useState(true);
const[category, setCategory] =useState(filterData[0].title);

 

// async function fetchData (){

    const fetchData = async() =>{
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const outPut = await response.json();
        //save data into a variable
        // console.log(outPut.data);
        setCourses(outPut.data);
      }
      catch(error){
        toast.error("somthing went wrong");
      }
      setLoading(false);
      
    }


useEffect( ()=>{
    fetchData();
 
 },[]);


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar/> 
      </div>
      
      <div className="bg-bgDark2">
      <div>
      <Filter
            filterData ={filterData}
            category ={category}
            setCategory={setCategory}/> 
      </div>

   




       <div  className="w-11/12 max-w[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses ={courses} category={category}/>)
        }
       </div>
    
      </div>
   
       
    </div>
  );
};

export default App;
