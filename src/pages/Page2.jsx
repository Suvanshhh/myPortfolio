import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Use `useGSAP` to initialize animations
  useGSAP(() => {
    gsap.from(".rotateText", {
      rotateX: -80, // Rotate the text along the X-axis
      opacity: 0, // Start with 0 opacity
      duration: 1, // Animation duration
      stagger: 1, // Time gap between each element's animation
      scrollTrigger: {
        trigger: ".rotateText", // Trigger animation when `.rotateText` enters the viewport
        markers: false, // Enable debug markers
        start: "top 60%", // Animation starts when top of `.rotateText` reaches 75% of the viewport
        end: "top -100%", // Animation ends when bottom of `.rotateText` reaches 25% of the viewport
        scrub: 2, // Smooth scrolling effect
      },
    });
  });

  return (
    <div id="section2" className="bg-white text-center p-0 text-black">
      <h3 className="text-gray-500 text-xl pb-10 font-[font2]">
        © anzo.studio 2024 | designed and developed
      </h3>

      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[font5] uppercase pt-0 leading-[33vw]">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[font5] uppercase leading-[30vw]">
          Design
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[font5] uppercase leading-[33vw]">
          Is the
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[font5] uppercase leading-[30vw]">
          Design
        </h1>
      </div>
      <div className="rotateText bg-white">
        <h1 className="text-[40vw] text-black font-[font5] uppercase leading-[33vw]">
          that
        </h1>
      </div>
      <div className="rotateText relative bg-white">
        
        <h1 className="text-[40vw] text-black font-[font5] pb-10 uppercase leading-[30vw]">
          works
        </h1>
      </div>

    </div>
  );
};

export default Page2;
