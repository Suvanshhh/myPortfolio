import React from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {
  const mouseMoving = (e) => {
    console.log(e);
  };

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-2 md:p-3 pb-6 md:pb-10 bg-white"
    >
      <div className="shadow-lg p-4 md:p-12 shadow-gray-700 h-full w-full rounded-[15px] md:rounded-[30px] bg-cover 2xl:bg-[url('https://i.postimg.cc/gJBxfC3v/imageeepp.png')] xl:bg-[url('https://i.postimg.cc/gJBxfC3v/imageeepp.png')] md:bg-[url('https://i.postimg.cc/gJBxfC3v/imageeepp.png')] sm:bg-[url('https://i.postimg.cc/ZYc3LQ9K/su2.jpg')] xs:bg-[url('https://i.postimg.cc/ZYc3LQ9K/su2.jpg')] xxs:bg-[url('https://i.postimg.cc/ZYc3LQ9K/su2.jpg')]">
        <img 
        
          className="pl-2 md:pl-5 h-10 md:h-16"
          src="https://i.postimg.cc/yYnwK1Jq/Frame-53.png"
          alt="logo"
        />
        
        <TiltText />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
