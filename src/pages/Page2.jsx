import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".rotateText", {
      rotateX: -80,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        markers: false,
        start: "top 60%",
        end: "top -100%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="section2" className="bg-white text-center p-0 text-black">
      <h3 className="text-gray-500 text-base md:text-xl pb-6 md:pb-10 font-[font2]">
        © designed and developed | by Suvansh 
      </h3>

      {["IMPACTFUL", "Design", "Is the", "Design", "that", "works"].map((text, index) => (
        <div key={index} className="rotateText bg-white">
          <h1 className={`text-[15vw] md:text-[40vw] text-black font-[font5] uppercase ${
            index === 0 ? "pt-0" : ""
          } ${
            index === 5 ? "pb-6 md:pb-10" : ""
          } leading-[15vw] md:leading-[33vw] ${
            index % 2 === 1 ? "md:leading-[30vw]" : "md:leading-[33vw]"
          }`}>
            {text}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Page2;