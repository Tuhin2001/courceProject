import React from 'react'; 

 const Filter = (props) => {
  let filterData = props.filterData;
  let setCategory = props.setCategory;
  let category =props.category;
  function filterHandler(title){
    setCategory(title);
  }
  return (
    <div className="flex flex-wrap justify-center w-11/12 py-4 mx-auto space-x-4 text-3xl text-center text-black max-w-max gap-y-4 al">
        {filterData.map( (data) =>{
          return(
            <button className={
              `text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-55 border-2 
              ${category === data.title ? "bg-opacity-70 border-white" : "bg-opacity-40 border-transparent" }
               transition-all duration-300`
            } 
            key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>
        )
            
        })}
    </div>
  )
}
export default Filter;
