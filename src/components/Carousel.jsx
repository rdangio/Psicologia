import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// import "../styles/carousel.css";

function Carousel() {
  const data = [
    {
      id: "1",
      image: "/src/assets/images/slider/slider-1.jpg",
      text1: "Quer encontrar uma melhor qualidade de vida?",
      text2:
        "Podemos ajudá-lo a superar uma ampla gama de problemas psicológicos e emocionais.",
    },
    {
      id: "2",
      image: "/src/assets/images/slider/slider-2.jpg",
      text1: "Sente-se estressado ou ansioso?",
      text2: "Podemos ajudá-lo a superar uma ampla gama de problemas",
    },
    {
      id: "3",
      image: "/src/assets/images/slider/slider-3.jpg",
      text1: "Reconquiste a alegria de viver!",
      text2:
        "Somos qualificados para atender às suas necessidades específicas.",
    },
  ];

  return (
    <div className="max-w-full">
      <Swiper
        modules={[EffectFade]}
        speed= "1500"
        effect="fade"
        className="pb-2"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "33px",
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
        {data.map((item) => (
          <SwiperSlide className="mt-[80px] " key={item.id}>
            <div className=" relative flex justify-center items-center">
              <img
                src={item.image}
                alt="imagem Carrossel"
                className="w-[100%] h-[100%] blur-[3px] "
              />
              <div className="absolute">
                <p
                  className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] 
                  md:text-[40px] md:text-center
                  sm:text-[27px] sm:text-center
                  text-[17px] text-center">
                  {item.text1}
                </p>
                <p className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)]
                  md:text-[25px] md:text-center
                  sm:text-[19px] sm:text-center
                  text-[13px] text-center
                ">
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
