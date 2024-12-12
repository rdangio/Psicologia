import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { CarouselData } from "./CaroseulData";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// import "../styles/carousel.css";

function Carousel() {
  return (
    <div className="max-w-full">
      <Swiper
        modules={[EffectFade]}
        speed="1500"
        effect="fade"
        className="pb-1"
        style={{
          "--swiper-navigation-color": "#17252a",
          "--swiper-navigation-size": "1.3rem",
          "--swiper-navigation-top-offset": "50%",
          "--swiper-navigation-sides-offset": ".65rem",

          "--swiper-pagination-color": "#17252a",
          "--swiper-pagination-bullet-size": ".8rem",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {CarouselData.map((item) => (
          <SwiperSlide className="" key={item.id}>
            <div className="relative flex items-center justify-center mx-auto">
              <img
                src={item.image}
                alt="imagem Carrossel"
                className="w-full blur-[2px]"
              />
              <div className="absolute text-center text-c-turquoise-2 font-roboto-bold">
                <p className="text-center text-fs-h6 sm:text-fs-h4 lg:text-fs-h2 drop-shadow-[_1.7px_1.7px_rgba(0,0,0,1.55)]">
                  {item.text1}
                </p>
                <p className="text-center text-fs-h6 px-7 sm:text-fs-h5 lg:text-fs-h3 drop-shadow-[_1.7px_1.7px_rgba(0,0,0,1.55)]">
                  {item.text2}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;


// mt-[28%] sm:mt-[12%] md:mt-[10%]
//           lg:mt-[7%] xl:mt-[5%]
