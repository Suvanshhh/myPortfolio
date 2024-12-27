import React from 'react'
import rocket from "/src/assets/rocket.jpg"

const Page5 = () => {
  return (
    <div className="h-screen p-10 bg-white relative">
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-[60%] bg-black rounded-[50px]">
        <img
          className="h-full  w-full object-fit"
          src= {rocket}
          alt="Rocket"
        />
      </div>
      
      <div className="absolute uppercase left-20 bottom-28 z-10 w-full h-20 flex items-center justify-center">
        {/* Project Text Link */}
        <a
          href="https://github.com/Suvanshhh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[font5] text-black text-[20vw]"
        >
          <span className="font-[font5] text-white text-[20vw] mr-4">PROJE</span>
          <span className="font-[font5] text-black text-[20vw] ml-auto">CTS</span>
        </a>
        
        {/* Arrow Icon Link */}
        <a
          href="https://github.com/Suvanshhh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-arrow-right-circle-fill pl-6 text-6xl bg-white text-black rounded-full"></i>
        </a>
      </div>
    </div>
  )
}

export default Page5
