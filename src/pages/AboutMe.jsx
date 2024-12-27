import React from "react";

const AboutMe = () => {
  return (
    <div className="h-screen flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10">
      <h1 className="text-5xl font-extrabold font-[font4] text-white mb-10">
        About Me
      </h1>

      {/* Personal Info Section */}
      <div className="w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl transform transition-all hover:scale-105 duration-300">
        <div className="flex items-center mb-6">
          <img
            src="/src/assets/myprofile.jpeg"
            alt="Suvansh"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-800 mr-6"
          />
          <h2 className="text-4xl font-[font4] font-bold text-gray-800">
            Suvansh Choudhary
          </h2>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          I'm a B.Tech student passionate about development and machine
          learning, blending technical expertise with leadership. As a Core ML
          Team Member at UiPath and Senior Executive for Sponsorship & PR at
          FED-KIIT, I’ve honed skills in project management, strategic
          communication, and teamwork. My experience as Marketing Lead at KIIT
          Robotics Society further strengthened my ability to manage teams and
          execute impactful projects. Outside academics, I enjoy exploring tech
          trends and gaining fresh perspectives through podcasts. Always eager
          to collaborate on meaningful projects and connect with like-minded
          individuals in tech.
          <br />
          <a className="text-blue-500" href="https://linktr.ee/suvan.shh">
            Let’s connect! (LinkTree Profile)
          </a>
        </p>
{/* 
        <h3 className="text-xl font-bold text-gray-800 mt-6">
          Basic Information:
        </h3>
        <ul className="list-none text-gray-700 mt-4 space-y-2">
          <li>
            <b>Mail:</b> choudharysuvansh05@gmail.com
          </li>
          <li>
            <b>Phone:</b> +91 9555521339
          </li>
          <li>
            <b>LinkedIn:</b>{" "}
            <a
              href="https://www.linkedin.com/in/suvanshhh/"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/suvanshhh/
            </a>
          </li>
          <li>
            <b>GitHub:</b>{" "}
            <a
              href="https://github.com/Suvanshhh"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Suvanshhh
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default AboutMe;
