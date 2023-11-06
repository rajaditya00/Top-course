 import React from "react";

 const Filter = (props) =>{
    let filterData = props.filterData;
    let category =props.category;
    let setCategory =props.setCategory;

//  }

//  function Filter ({filterData}){
function filterHandeler(title){
    setCategory(title);
}



    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-6 gap-y-6 mx-auto py-6 justify-center">
           {
           filterData.map((data ) =>{
          
          return(<button 
          
            className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-90 border-2  ${
                category === data.title
                ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"
            } transition-all duration-400`}
          
          
          key={data.id}
          
          onClick={() => filterHandeler(data.title)}
          >
                {data.title}
            </button>)
           })
           }
        </div>
    )
}
export default Filter;