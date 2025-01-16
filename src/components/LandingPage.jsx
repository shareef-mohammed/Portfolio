import React, { useEffect, useState } from "react";
import FireFliesBackground from "./FireFliesBackground";
import Navigation from "./Navigation";
import { styles } from "../styles";

const LandingPage = ({}) => {
  const [intro, setIntro] = useState("");
  const [designation, setDesignation] = useState("");
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  let text1 = "Hi, I'm Shareef";
  let text2 = "I'm a skilled Full Stack Developer.";
  const infinite = true;
  useEffect(() => {
    let timeout;

    if (firstIndex < text1.length) {
      timeout = setTimeout(() => {
        setIntro((prevText) => prevText + text1[firstIndex]);
        setFirstIndex((prevIndex) => prevIndex + 1);
      }, 200);
    } else if (infinite) {
      // ADD THIS CHECK
      timeout = setTimeout(() => {
        setIntro(""); // Clear text
        setFirstIndex(0); // Restart animation
        setDesignation("");
        setSecondIndex(0);
      }, 20000);
    }

    return () => clearTimeout(timeout);
  }, [firstIndex, infinite, text1]);

  useEffect(() => {
    let timeout;
    if (firstIndex === text1.length) {
      if (secondIndex < text2.length) {
        timeout = setTimeout(() => {
          setDesignation((prev) => prev + text2[secondIndex]);
          setSecondIndex((prev) => prev + 1);
        }, 150);
      } 
    }
    return () => clearTimeout(timeout);
  }, [secondIndex, firstIndex, text2]);

  return (
    <div className="relative">
      <div className="absolute top-20 left-6">
        <h1 className={`${styles.heroHeadText} text-[#915eff]`}>{intro}</h1>
        <p
          className={`${styles.heroSubText} mt-2 text-white-100 hidden lg:block`}
        >
          {designation}
        </p>
      </div>
      <img
        src="./background/home-background.png"
        alt="background-image"
        fill
        className="-z-50 h-96 w-full md:h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <FireFliesBackground />
        <Navigation />
        {/* <RenderModel>
                <Wizard />
              </RenderModel> */}
      </div>
    </div>
  );
};

export default LandingPage;
