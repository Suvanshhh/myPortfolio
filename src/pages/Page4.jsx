import React from "react";
import bgVideo from "/src/assets/moon.mp4";

const Page4 = () => {
  return (
    <div className="h-screen relative p-4 md:p-10 bg-white">
      <div className="h-full shadow-lg shadow-gray-700 overflow-hidden w-full bg-black rounded-[25px] md:rounded-[50px]">
        <video
          loop
          muted
          autoPlay="true"
          className="h-full w-full object-cover"
          src={bgVideo}
        ></video>

        <div className="absolute left-4 md:left-32 bottom-2 flex items-center space-x-2 md:space-x-4">
          <a
            href="https://drive.google.com/drive/folders/1dRawxD4c7vXidAm5pxqylqcUwDKdonbS?"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[font5] text-[15vw] md:text-[25vw] pl-4 md:pl-4 uppercase"
          >
            RESUME/CV
          </a>

          <a
            href="https://drive.google.com/drive/folders/1dRawxD4c7vXidAm5pxqylqcUwDKdonbS?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-arrow-right-circle-fill pl-2 md:pl-8 text-4xl md:text-6xl bg-white text-black rounded-full"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page4;
