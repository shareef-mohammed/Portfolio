import React, { useEffect, useState } from "react";
import FireFliesBackground from "./FireFliesBackground";
import Navigation from "./Navigation";
import { styles } from "../styles";
import splitStringUsingRegx from "../utils/splitStringUsingRegx";
import { motion } from "framer-motion";

const intro = "Hi, I'm Shareef";
const designation = "I'm a skilled Full Stack Developer.";

const LandingPage = ({}) => {
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const introChars = splitStringUsingRegx(intro);
  const designationChars = splitStringUsingRegx(designation);
  return (
    <div className="relative">
      <div className="absolute top-20 left-6">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: .05}}
          className={`${styles.heroHeadText} `}
        >
          {introChars.map((char) => (
            <motion.span
              key={char}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: .05}}
          className={`${styles.heroSubText} mt-2 text-white-100 hidden lg:block`}
        >
          {designationChars.map((char) => (
            <motion.span
              key={char}
              transition={{ duration: 0.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
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
