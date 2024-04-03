import React, { useState } from 'react';
import Card from './Card';

 const Cards = (props) => {
  const cources = props.cources;
  const category = props.category;
  let allCources=[];
  const [likedCouces,setLikeCources] = useState([]);

  const getCources = () =>{
    if(category === "All"){
      console.log(cources);
      Object.values(cources).forEach( (courceCategory) =>{
        courceCategory.forEach((cource)=>{
          allCources.push(cource);
        })
      })
    return allCources;
    }
    else{
      return cources[category]; 
    }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
          getCources().map( (cource) => {
          return (<Card key={cource.id} cource={cource} likedCouces={likedCouces} setLikeCources={setLikeCources }/>) 
        })
        }
    </div>
  )
}

export default Cards;