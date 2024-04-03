import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Spinner } from "./components/Spinner";
import {filterData,apiUrl} from "./data"
import { toast } from "react-toastify";


const App = () => {

  const [cources, setCources] = useState("");
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const res= await fetch(apiUrl);
        
        const output =await res.json();

        setCources(output.data);

      }
      catch(err){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    fetchData();

  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">

      <div>
        {/* Navbar */}
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
          {/* Filter */}
          <Filter filterData={filterData} setCategory={setCategory} category={category}/>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap ">
          {
            loading ? (<Spinner></Spinner>) : ( <Cards cources={cources}  category={category} />)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
