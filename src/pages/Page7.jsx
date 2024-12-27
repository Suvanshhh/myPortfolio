import React from "react";
import parallaxImage from "/src/assets/astronaut.avif";
import subtractImage from "/src/assets/Subtract.avif";

const Page7 = () => {
  const handleClick = () => {
    window.location.href = "https://linktr.ee/suvan.shh";
  };

  return (
    <div className="h-screen pt-8 sm:pt-12 md:pt-20 overflow-hidden bg-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="bg-white">
        <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <h1 className="uppercase font-[font6] text-[15vw] sm:text-[18vw] md:text-[20vw] leading-none text-transparent bg-clip-text">
            <img
              src={subtractImage}
              alt="Subtract Image"
              className="w-full h-full object-cover opacity-100 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleClick}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page7;