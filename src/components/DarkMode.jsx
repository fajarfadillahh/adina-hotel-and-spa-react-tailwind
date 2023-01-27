import React from "react";
import { BsMoonFill } from "react-icons/bs";

const DarkMode = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50 inline-flex cursor-pointer rounded-full bg-white p-3 text-xl text-accent shadow-[0_4px_16px_rgba(0,0,0,0.2)] lg:bottom-12 lg:right-10">
      <BsMoonFill />
    </div>
  );
};

export default DarkMode;
