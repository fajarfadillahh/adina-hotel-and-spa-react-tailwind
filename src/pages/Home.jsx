import React from "react";

// import components
import HeroSlider from "../components/HeroSlider";
import BookForm from "../components/BookForm";
import Rooms from "../components/Rooms";
import DarkMode from "../components/DarkMode";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <BookForm />
      <Rooms />
      <DarkMode />
    </>
  );
};

export default Home;
