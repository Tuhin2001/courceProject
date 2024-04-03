import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';


 const Card = (props) => {
  let cource = props.cource;
  let likedCouces = props.likedCouces;
  let setLikeCources = props.setLikeCources;
  
  function clickHandler(){
    if(likedCouces.includes(cource.id)){
      setLikeCources((prev) => prev.filter(cid=> cid !== cource.id ));
      toast.warning("Like Removed");
    }
    else{
      if(likedCouces.length === 0){
          setLikeCources([cource.id]);
      }
      else{
        setLikeCources( (prev) => [...prev,cource.id]);
      }
      toast.success("Liked");
    }

  }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
    {/* image */}
      <div className='relative' >
        <img src={cource.image.url} alt={cource.title} />
        {/* Icon */}
          <div className='w-[38px] h-[38px] grid place-items-center rounded-full absolute bg-white right-2 bottom-[-12px]'>
            <button onClick={clickHandler}>
              {
                likedCouces.includes(cource.id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/> 
              }
            </button>
          </div>
        
      </div>
      
      

      {/* course title */}
      <div className='p-4'>
        <p className='text-lg font-semibold leading-6 text-white'>{cource.title}</p>
        <p className='mt-2 text-white'>{cource.description.length > 120 ? (cource.description.substr(0,100))+"..." : (cource.description)  }</p>
      </div>

    </div>
  )
}
export default Card; 