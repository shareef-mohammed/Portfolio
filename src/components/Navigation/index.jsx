"use client";
import { BtnList } from "../../constants/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="w-full h-auto md:h-screen flex items-center mt-56 md:mt-2 justify-center">
      <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          // const radius = "calc(20vw - 1rem)";
          const radius = `calc(min(30vw, 30vh) - 1rem)`;
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;
          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
      <img
        className="absolute w-24 h-36 md:w-64 md:h-96 opacity-60 animate-up-down clip-path-slop"
        src="./wizardwithlap2.png"
        alt=""
      />
    </div>
  );
};

export default Navigation;
