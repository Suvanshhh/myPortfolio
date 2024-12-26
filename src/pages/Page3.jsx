import React from "react";
import projectVideo from "/src/assets/CureIt-Draft1 - Made with Clipchamp.mp4"

const Page3 = () => {
  return (
    <div className="pt-[50px] relative flex items-center justify-center h-screen bg-white">
      {/* Laptop frame */}
      <img
        className="h-[80vh] w-[85vw] absolute items-center"
        src="https://i.postimg.cc/6QxDrtQT/try.avif"
        alt="Laptop frame"
      />

      {/* Video inside the frame with redirect */}
      <a
        href="https://github.com/Suvanshhh/CureIt_frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <video
          loop
          muted
          autoPlay
          className="relative h-[66vh] mb-[5vh] rounded-lg w-[65vw] object-cover"
          src={projectVideo}
          alt="CureIt Demo"
        ></video>
      </a>
    </div>
  );
};

export default Page3;
