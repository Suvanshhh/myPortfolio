import React from "react";
import { useNavigate } from "react-router-dom";
import Page1Bottom from "../components/Page1Bottom";
import bg3 from "/src/assets/new background_fn_vertical.avif";

const Page8 = () => {
  const navigate = useNavigate();
  const handleRedirect = () => navigate("/hireme");

  return (
    <div className="h-screen relative p-3 sm:p-4 md:p-10 bg-white">
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-full bg-black rounded-[15px] sm:rounded-[20px] md:rounded-[30px]">
        <img
          className="h-full w-full object-cover"
          src={bg3}
          alt="Background"
        />

        <div className="absolute bottom-40 xxs:bottom-72 xs:pl-16 xs:bottom-44 md:bottom-24 lg:bottom-24 xl:bottom-24 2xl:bottom-24 sm:bottom-76 lg: bottom-10 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex flex-col items-start space-y-1 sm:space-y-3 md:space-y-4 p-4 sm:p-8 md:pb-32 bg-opacity-0 bg-black rounded-[10px] sm:rounded-[15px] md:rounded-[20px]">
          <h1 className="font-[font5] text-white text-[18vw] sm:text-[22vw] md:text-[10vw] leading-3 text-left pl-2 sm:pl-4 md:pl-8">
            GOT
          </h1>
          <h1 className="font-[font5] text-white text-[18vw] sm:text-[22vw] md:text-[10vw] leading-12 text-left pl-2 sm:pl-4 md:pl-8">
            AN
          </h1>
          <h1 className="font-[font5] text-gray-400 text-[18vw] sm:text-[22vw] md:text-[10vw] leading-8 text-left pl-2 sm:pl-4 md:pl-8">
            IDEA
          </h1>

          
        </div>
        <i
            className="ri-arrow-right-circle-fill text-4xl sm:text-5xl md:text-7xl text-white bg-transparent hover:text-yellow-500 transition-colors cursor-pointer"
            onClick={handleRedirect}
          ></i>

        <div className="p-4 sm:p-6 md:p-10">
          <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Page8;
