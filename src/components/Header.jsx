import React, { useState, useEffect } from "react";

// import header logo
import LogoWhite from "../assets/images/logo-white.svg";
import LogoDark from "../assets/images/logo-dark.svg";

// import useColorMode hooks
import useColorMode from "../hooks/useColorMode";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [colorMode] = useColorMode();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header className="header">
      <div
        className={`${
          header
            ? "bg-white py-6 shadow-lg dark:bg-primary"
            : "bg-transparent py-8"
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header logo */}
          <a href="/">
            {header ? (
              <img src={LogoDark} alt="header logo" className="w-[160px]" />
            ) : (
              <img src={LogoWhite} alt="header logo" className="w-[160px]" />
            )}
          </a>

          {/* header menu */}
          <div
            className={`${
              header ? "text-primary dark:text-white" : "text-white"
            }`}
          >
            <ul className="flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
              <a href="/about" className="transition hover:text-accent">
                About
              </a>
              <a href="/rooms" className="transition hover:text-accent">
                Rooms
              </a>
              <a href="/restaurants" className="transition hover:text-accent">
                Restaurants
              </a>
              <a href="/spa" className="transition hover:text-accent">
                Spa
              </a>
              <a href="/contact" className="transition hover:text-accent">
                Contact
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
