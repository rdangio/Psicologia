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
      text2: "Podemos ajudá-lo a superar uma ampla gama de problemas psicológicos e emocionais.",
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
      text2: "Somos qualificados para atender às suas necessidades específicas.",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[ EffectFade ]}
        effect="fade"
        className="pb-2"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-pagination-bullet-size": "15px",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
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
                className="w-[100%] h-[500px]"
              />
              <div className="absolute ">
                <p className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] text-[40px]">{item.text1}</p>
                <p className="text-slate-100 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] text-[30px]">{item.text2}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// export default function Carousel() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={5}
//         centeredSlides={true}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper top-20 "
//       >
//         <SwiperSlide className="h-[400px] ">
//           <img
//             className="h-[500px] w-full relative blur-sm"
//             src={"/src/assets/images/slider/slider-1.jpg"}
//             alt="logo"
//           />
//           <p className="absolute inset-y-[60%] inset-x-[20%] font-bold text-[30px] ">
//             Quer encontrar uma melhor qualidade de vida?
//           </p>
//           <p className="absolute inset-y-[70%] inset-x-[20%] font-bold text-[20px]">
//             Podemos ajudá-lo a superar uma ampla gama de problemas psicológicos
//             e emocionais.
//           </p>
//         </SwiperSlide>

//         <SwiperSlide>
//           {" "}
//           <img
//             className="h-[500px] w-full relative blur-sm"
//             src={"/src/assets/images/slider/slider-2.jpg"}
//             alt="logo"
//           />
//           <p className="absolute inset-y-[60%] right-60 font-bold text-[30px]">
//             Sente-se estressado ou ansioso?
//           </p>
//           <p className="absolute inset-y-[70%]  left-[39.5rem] font-bold text-[20px]">
//             Podemos ajudá-lo a superar uma ampla gama de problemas
//             <br /> psicológicos e emocionais.
//           </p>
//           {/* <p className="absolute inset-y-[76%] right-60 font-bold text-[20px]">
//           problemas psicológicos e emocionais.
//           </p> */}
//         </SwiperSlide>

//         <SwiperSlide>
//           {" "}
//           <img
//             className="h-[500px] w-full relative blur-sm"
//             src={"/src/assets/images/slider/slider-3.jpg"}
//             alt="logo"
//           />
//           <p className="absolute inset-y-[60%] inset-x-[20%] font-bold text-[30px] ">
//             Reconquiste a alegria de viver!
//           </p>
//           <p className="absolute inset-y-[70%] inset-x-[20%] font-bold text-[20px]">
//             Somos qualificados para atender às suas necessidades específicas.
//           </p>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
