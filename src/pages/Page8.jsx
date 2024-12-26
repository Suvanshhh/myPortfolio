import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Page1Bottom from "../components/Page1Bottom";
import bg3 from "/src/assets/new background_fn_vertical.avif"

const Page8 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the redirection when the arrow icon is clicked
  const handleRedirect = () => {
    navigate("/hireme"); // Use navigate to redirect to /hireme route
  };

  return (
    <div className="h-screen relative pt-10 pb-5 pr-5 pl-5 bg-white">
      <div className="h-full overflow-hidden w-full bg-black rounded-[30px]">
        <img
          className="h-full w-full object-cover"
          src= {bg3}
          alt="Background"
        />

        <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start space-y-4 p-16 mt-20 bg-opacity-0 bg-black rounded-[20px]">
          <h1 className="font-[font5] text-white text-[20vw] md:text-[8vw] leading-tight text-center">
            GOT
          </h1>
          <h1 className="font-[font5] text-white text-[20vw] md:text-[8vw] leading-3 text-center">
            AN
          </h1>
          <h1 className="font-[font5] text-white text-[20vw] md:text-[8vw] leading-tight text-center">
            IDEA
          </h1>

          {/* Redirect icon */}
          <i
            className="ri-arrow-right-circle-fill text-6xl text-white bg-transparent hover:text-yellow-500 transition-colors cursor-pointer"
            onClick={handleRedirect} // Trigger the redirection on click
          ></i>
        </div>

        <div className="p-10">
          <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Page8;
