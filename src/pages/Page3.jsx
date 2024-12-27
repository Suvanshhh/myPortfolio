import React from "react";
import projectVideo from "/src/assets/CureIt-Draft1 - Made with Clipchamp.mp4";

const Page3 = () => {
  return (
    <div className="pt-[20px] md:pt-[50px] shadow-lg shadow-gray-700 relative flex flex-col items-center justify-center h-screen bg-white">
      {/* Laptop Frame */}
      <img
        className="h-[60vh] md:h-[80vh] w-[95vw] md:w-[85vw] absolute items-center"
        src="https://i.postimg.cc/6QxDrtQT/try.avif"
        alt="Laptop frame"
      />

      {/* Video with Resume/CV Link */}
      <div className="relative flex flex-col items-center">
        <a
          href="https://github.com/Suvanshhh/CureIt_frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video
            loop
            muted
            autoPlay
            className="relative h-[46vh] md:h-[66vh] mb-[3vh] md:mb-[5vh] rounded-lg w-[75vw] md:w-[65vw] object-cover"
            src={projectVideo}
            alt="CureIt Demo"
          ></video>
        </a>

        {/* Transparent Background Resume Link */}
        <a
          href="https://drive.google.com/drive/folders/1dRawxD4c7vXidAm5pxqylqcUwDKdonbS?"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[-50px] md:top-[-38px] text-center text-white font-[font4] bg-black bg-opacity-0 px-6 py-3 rounded-lg text-lg md:text-xl font-bold"
        >
          CureIt Frontend
        </a>
      </div>
    </div>
  );
};

export default Page3;
