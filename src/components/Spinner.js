import React from 'react';
import "./Spinner.css"

export const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
      <div className='spinner'></div>
      <p className='text-lg font-semibold text-white bg-bgDark'>Loading...</p>
    </div>
  )
}
