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
          className="pb-2"
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "28px",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-sides-offset": "15px",

            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-size": "15px",
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
            <SwiperSlide className="mt-[100px] " key={item.id}>
              <div className=" relative flex justify-center items-center">
                <img
                  src={item.image}
                  alt="imagem Carrossel"
                  className="max-w-[100%] max-h-[100%] blur-[2px] "
                />
                <div className="absolute">
                  <p
                    className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] 
                  md:text-[40px] md:text-center
                  sm:text-[27px] sm:text-center
                  text-[17px] text-center"
                  >
                    {item.text1}
                  </p>
                  <p
                    className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)]
                  md:text-[25px] md:text-center
                  sm:text-[19px] sm:text-center
                  text-[13px] text-center
                "
                  >
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
