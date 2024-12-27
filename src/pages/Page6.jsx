import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import su2 from "/src/assets/su2.jpg"; // Import the image
import bgVideo2 from "/src/assets/bg2.mp4"

const Page6 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/aboutme"); // Navigate to the '/aboutme' route
  };

  return (
    <div className="h-screen relative p-10 bg-white" onClick={handleClick}>
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-full bg-black rounded-[50px]">
        <video
          loop
          muted
          autoPlay="true"
          className="h-full w-full object-cover"
          src= {bgVideo2}
        ></video>

        <h1 className="font-[font5] text-[20vw] flex flex-row items-center absolute uppercase left-32 bottom-2 space-x-4">
          About Me
          <i className="ri-arrow-right-circle-fill text-6xl bg-white pl-8 text-black rounded-full"></i>
        </h1>

        <img
          src={su2}
          alt="Profile"
          className="absolute top-40 right-32 w-[22vw] h-[60vh] rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default Page6;
