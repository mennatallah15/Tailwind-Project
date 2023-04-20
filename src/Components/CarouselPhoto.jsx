import Slider from "react-slick";
import "./Slick.css";
import "./Slick_theme.css";

const CarouselPhoto = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div>
      <div className="flex w-full">
        <Slider {...settings} className="w-full">
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram5.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram1.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram2.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram3.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram4.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram5.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram1.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram2.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram3.png"
            alt=""
          />
          <img
            src="https://astrip-react.vercel.app/assets/images/bg/instagram4.png"
            alt=""
          />

          {/* </Carousel> */}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPhoto;
