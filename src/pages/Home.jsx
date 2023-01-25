import React from "react";

// import components
import HeroSlider from "../components/HeroSlider";
import BookForm from "../components/BookForm";
import Rooms from "../components/Rooms";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container relative mx-auto">
        <div className="mt-4 bg-accent/20 p-4 lg:absolute lg:inset-x-0 lg:-top-12 lg:z-30 lg:p-0 lg:shadow-xl">
          <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
