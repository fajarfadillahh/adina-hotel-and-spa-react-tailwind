import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

// import useColorMode hooks
import useColorMode from "../hooks/useColorMode";

const DarkMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 inline-flex cursor-pointer rounded-full p-3 text-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] lg:bottom-12 lg:right-10 ${
        colorMode === "light" ? "bg-white text-accent" : "bg-accent text-white"
      }`}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </div>
  );
};

export default DarkMode;
