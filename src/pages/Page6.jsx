import React from "react";
import { useNavigate } from "react-router-dom";
import su2 from "/src/assets/su2.jpg";
import bgVideo2 from "/src/assets/bg2.mp4";

const Page6 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/aboutme");

  return (
    <div
      className="h-screen relative p-4 sm:p-6 md:p-10 bg-white"
      onClick={handleClick}
    >
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-full bg-black rounded-[25px] sm:rounded-[35px] md:rounded-[50px]">
        <video
          loop
          muted
          autoPlay="true"
          className="h-full w-full object-cover"
          src={bgVideo2}
        ></video>

        <h1 className="font-[font5] text-[15vw] sm:text-[18vw] md:text-[20vw] flex flex-row items-center absolute uppercase left-4 sm:left-16 md:left-32 bottom-2 space-x-2 sm:space-x-3 md:space-x-4 pl-4 sm:pl-0">
          About Me
          <i className="ri-arrow-right-circle-fill text-3xl sm:text-4xl md:text-6xl bg-white pl-2 sm:pl-4 md:pl-8 text-black rounded-full"></i>
        </h1>

        <div className="flex justify-center sm:block">
          <img
            src={su2}
            alt="Profile"
            className="absolute top-32 
             left-1/2 transform -translate-x-1/2 
             sm:top-36 md:top-40 
             sm:left-auto sm:right-16 md:right-32 
             sm:translate-x-0 
             w-[40vw] sm:w-[32vw] md:w-[22vw] 2xl:w-[40vw] 
             h-[40vh] sm:h-[50vh] md:h-[60vh] 2xl:h-[70vh] 
             rounded-[10px] sm:rounded-[15px] md:rounded-[20px] 2xl:rounded-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page6;
