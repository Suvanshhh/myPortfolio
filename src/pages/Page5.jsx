import React from "react";
import rocket from "/src/assets/rocket.jpg";

const Page5 = () => {
  return (
    <div className="h-screen p-4 md:p-10 bg-white relative">
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-full md:w-[60%] bg-black rounded-[25px] md:rounded-[50px]">
        <img className="h-full w-full object-cover" src={rocket} alt="Rocket" />
      </div>

      <div className="absolute uppercase left-4 md:left-20 bottom-10 md:bottom-28 z-10 w-full h-20 flex items-center">
        <a
          href="https://github.com/Suvanshhh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[font5] text-black text-[15vw] md:text-[20vw] pl-4 md:pl-12"
        >
          <span className="font-[font5] text-white mr-1 md:mr-3 " >PROJECTS</span>
          
        </a>

        <a
          href="https://github.com/Suvanshhh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-arrow-right-circle-fill pl-2 md:pl-6 text-4xl md:text-6xl bg-white text-black rounded-full"></i>
        </a>
      </div>
    </div>
  );
};

export default Page5;
