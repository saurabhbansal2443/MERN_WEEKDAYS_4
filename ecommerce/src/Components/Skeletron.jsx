import React from 'react'

const Skeletron = () => {
    console.log( " skeletrob called ")
  return (
    <div className='flex flex-wrap justify-around '>
        {/* <h1> Showing Skeleton </h1> */}
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>

      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>

      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
      <div className="skeleton h-[50vh] w-[20vw] m-2 "></div>
    </div>
  )
}

export default Skeletron
