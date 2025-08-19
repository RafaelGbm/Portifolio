import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 bg-purple-700/10 overflow-hidden"
    >
      {/* Gradientes laterais */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-purple-700/30 via-purple-700/10 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-purple-700/30 via-purple-700/10 to-transparent pointer-events-none z-10" />

      <Swiper
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={-10}
        loop={true}
        loopAdditionalSlides={3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        speed={3000}
        allowTouchMove={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.8,
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: -5 },
          640: { slidesPerView: 4, spaceBetween: -8 },
          768: { slidesPerView: 5, spaceBetween: -10 },
          1024: { slidesPerView: 6, spaceBetween: -12 },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="py-5"
      >
        {[...skills, ...skills].map((skill, index) => (
          <SwiperSlide
            key={`${skill.title}-${index}`}
            className="flex justify-center items-center transition-transform duration-300"
          >
            <div className="flex flex-col items-center justify-center p-4 transition-all duration-300 group">
              <img
                src={skill.icon}
                alt={skill.title}
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain drop-shadow-md group-[.swiper-slide-active]:scale-125 group-[.swiper-slide-active]:drop-shadow-[0_8px_16px_rgba(147,51,234,0.3)] transition-transform duration-300"
                draggable={false}
              />
              <span className="text-xs mt-2 text-gray-700 dark:text-gray-300 font-medium opacity-60 text-center group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:font-semibold">
                {skill.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
