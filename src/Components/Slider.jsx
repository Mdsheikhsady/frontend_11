import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      img: i1,
      title: "Be a Hero, Save a Life",
      desc: "Your single donation can save up to three lives. Join our mission today.",
    },
    {
      img: i2,
      title: "Give the Gift of Life",
      desc: "There is no substitute for human blood. Every drop counts toward a miracle.",
    },
    {
      img: i3,
      title: "Every Donor is a Lifesaver",
      desc: "Join our community of heroes and help us ensure no one waits for blood.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        Navigation={true}
        Pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px] bg-black">
              {/* Image with 0.6 Opacity */}
              <img
                className="w-full h-full object-cover opacity-60"
                src={slide.img}
                alt="Blood Donation"
              />

              {/* Caption Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/signup"
                    className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Join as a Donor
                  </Link>

                  <Link
                    to="/search"
                    className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
                  >
                    Search Donors
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
