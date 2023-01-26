import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import images
import HeroImg1 from "../assets/images/heroSlider/1.jpg";
import HeroImg2 from "../assets/images/heroSlider/2.jpg";
import HeroImg3 from "../assets/images/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px] lg:h-[860px]"
      >
        {slides.map((slide, index) => {
          // destructure slide
          const { title, background, btnText } = slide;

          return (
            <SwiperSlide
              className="relative flex h-full items-center justify-center bg-pink-200"
              key={index}
            >
              {/* hero data */}
              <div className="container z-20 mx-auto text-center text-white">
                <div className="mb-5 font-tertiary uppercase tracking-[6px]">
                  Just Enjoy & Relax
                </div>
                <h1 className="mx-auto mb-6 max-w-[920px] font-primary text-[32px] uppercase tracking-[2px] lg:text-[68px]">
                  {title}
                </h1>
                <button className="btn btn-primary btn-lg mx-auto">
                  {btnText}
                </button>
              </div>

              {/* hero background */}
              <div className="absolute top-0 left-0 h-full w-full">
                <img
                  src={background}
                  alt="hero slide image"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* hero overlay */}
              <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
