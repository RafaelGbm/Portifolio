import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { skills } from '../Data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 bg-purple-700/10 overflow-hidden">
      {/* Gradientes laterais mais suaves */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-purple-700/30 via-purple-700/10 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-purple-700/30 via-purple-700/10 to-transparent pointer-events-none z-10" />

      <Swiper
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={5}              // Menos slides na tela
        spaceBetween={-10}             // Espaçamento menos negativo
        loop={true}
        loopAdditionalSlides={3}       // Slides extras para loop mais suave
        autoplay={{
          delay: 0,                    // Sem delay = movimento contínuo
          disableOnInteraction: false,
          pauseOnMouseEnter: false,    // Não para no hover
          reverseDirection: false,     // Direção do movimento
        }}
        speed={3000}                   // Velocidade mais lenta = mais fluido
        allowTouchMove={false}         // Desabilita interação manual
        coverflowEffect={{
          rotate: 0,                   // Sem rotação
          stretch: 0,                  // Sem esticamento
          depth: 100,                  // Profundidade reduzida
          modifier: 1,
          slideShadows: false,         // Sem sombras
          scale: 0.8,                  // Escala base dos slides laterais
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: -5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: -8,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: -10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: -12,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="skills-swiper"
      >
        {/* Duplicar os skills para garantir loop suave */}
        {[...skills, ...skills].map((skill, index) => (
          <SwiperSlide
            key={`${skill.title}-${index}`}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center p-4 transition-all duration-300">
              <img
                src={skill.icon}
                alt={skill.title}
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain filter drop-shadow-md"
                draggable={false}
              />
              <span className="text-xs mt-2 text-gray-700 dark:text-gray-300 font-medium opacity-60 text-center">
                {skill.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .skills-swiper {
          padding: 20px 0;
        }
        
        .skills-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }
        
        .skills-swiper .swiper-slide-active {
          transform: scale(1.2) !important;
          z-index: 2;
        }
        
        .skills-swiper .swiper-slide-active img {
          filter: drop-shadow(0 8px 16px rgba(147, 51, 234, 0.3));
        }
        
        .skills-swiper .swiper-slide-active span {
          opacity: 1;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}