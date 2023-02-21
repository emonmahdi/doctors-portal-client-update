import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import bgImg from "../../assets/images/bg-1.jpg";
import chairImg from "../../assets/images/chair.png";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const bannerStyle = {
  background:' #fff',
  // background:
  //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%), url(bgImg)",

  color: "#fff",
};

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{delay: 4000}}
        effect="fade"
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={bannerStyle}>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse text-black">
                <img src={bgImg} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    High Innovative Professional Doctors Here
                  </h1>
                  <p className="py-6 text-lg ">
                    Our specialist are highly compassionate and Professional in
                    with health. They are experienced in total health. They are
                    very helpful for every patient and give friendly discussion.
                  </p>
                  <PrimaryButton>Get Started</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={bannerStyle}>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse text-black">
                <img src={slider2} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    A Smile is a curve that's says everything straight
                  </h1>
                  <p className="py-6 text-lg ">
                    Our specialist are highly compassionate and Professional in
                    with health. They are experienced in total health. They are
                    very helpful for every patient and give friendly discussion.
                  </p>
                  <PrimaryButton>Get Started</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={bannerStyle}>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse text-black">
                <img src={slider3} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    Dental Special Service 
                  </h1>
                  <p className="py-6 text-lg ">
                    Our specialist are highly compassionate and Professional in
                    with health. They are experienced in total health. They are
                    very helpful for every patient and give friendly discussion.
                  </p>
                  <PrimaryButton>Get Started</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
