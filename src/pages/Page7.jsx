import React from "react";
import parallaxImage from "/src/assets/astronaut.avif"; // Import your astronaut image
import subtractImage from "/src/assets/Subtract.avif"; // Import your subtract image

const Page7 = () => {
  // Handle click on the subtract image to redirect
  const handleClick = () => {
    window.location.href = "https://linktr.ee/suvan.shh"; // Redirect to the external link
  };

  return (
    <div className="h-screen pt-20 overflow-hidden bg-white relative">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Masked Image Section */}
      <div className="bg-white">
        <div className="relative h-screen flex flex-col justify-center items-center text-center">
          <h1 className="uppercase font-[font6] text-[20vw] leading-none text-transparent bg-clip-text">
            {/* Overlay image with opacity, add onClick handler to the image */}
            <img
              src={subtractImage}
              alt="Subtract Image"
              className="w-full h-full object-cover opacity-100 cursor-pointer"
              onClick={handleClick} // Add onClick to trigger redirect
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page7;
