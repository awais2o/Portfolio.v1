import React, { useState, useEffect } from "react";
import me from "./mahona.png";
const Home = () => {
  const fullText = "Full-Stack";
  const [stackText, setStackText] = useState("");

  const animateText = (currentIndex) => {
    if (currentIndex <= fullText.length) {
      setStackText(fullText.slice(0, currentIndex));
      setTimeout(() => animateText(currentIndex + 1), 100); // Adjust the interval time as needed
    } else {
      // Animation complete, reset to initial state
      setTimeout(() => {
        setStackText("");
        animateText(0); // Start the animation again
      }, 1000); // Adjust the delay time as needed
    }
  };

  useEffect(() => {
    animateText(0); // Start the animation initially
  }, []);
  return (
    <>
      <div className=" bg-black bg-img h-screen w-screen     py-20  ">
        <div className=" font-bold text-yellow-50 h-3/6 relative left-0 top-0 h-full flex flex-col gap-auto p-8  z-10">
          <p className="px-10 text-2xl ">
            <span className=" text-red-600 text-4xl">Hello</span>, my name is
          </p>
          <p className=" py-4 px-12 text-red-50 font-bold text-7xl ">
            Awais <span className=" text-red-600">Qamar</span>
          </p>
          <p className="py-4 px-20">
            I am a {"\u00A0"}
            <span className="text-red-600 text-2xl">{stackText}</span>
            {"\u00A0"} Developer
          </p>
        </div>
        <div className="absolute right-0 top-0 z-0   h-screen overflow-hidden ">
          <img className="width scale-x-[-1]" src={me} alt="kch nahi"/>
        </div>
      </div>
    </>
  );
};

export default Home;
