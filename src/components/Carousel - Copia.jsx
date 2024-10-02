import Slider from "react-slick";

function Carousel () {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container w-96 h-90">
      <Slider {...settings}>
        <div>
        <img
        className="h-auto"
        src={"/src/assets/images/slider/slider-1.jpg"}
        alt="logo"
        />
        <h3>1</h3>
        </div>
        <div>
        <img
        // className="size-150 ali"
        src={"/src/assets/images/slider/slider-2.jpg"}
        alt="logo"
      />
          <h3>2</h3>
        </div>
        <div>
        <img
        className="size-150 ali w-100 h-auto w-full"
        src={"/src/assets/images/slider/slider-3.jpg"}
        alt="logo"
      />
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;