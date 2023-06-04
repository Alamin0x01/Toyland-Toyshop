import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
const Gallery = () => {
  return (
    <div className="py-6">
      <div className="my-container overflow-hidden">
        <div className="flex gap-2 items-center justify-center mb-12">
          <p className="text-3xl font-bold text-[#11d6e1]">Gallery</p>
          <p className="text-5xl font-bold">
            <FaCar className="text-pink-600"></FaCar>
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">
            KidsZone
          </p>
        </div>
        <div data-aos="zoom-out">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/J2nP4zf/gallery-Two.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/fC3K1Xg/gallery-One.jpg "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/ypRsmNZ/gallery-Three.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/rHc4d1W/gallery-Four.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[500px] w-full"
                src="https://i.ibb.co/9wFVPKN/gallery-Five.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
