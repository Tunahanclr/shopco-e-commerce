import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaAngleRight
      onClick={onClick}
      className={`${className} sm:w-12 w-6 h-6 sm:h-12 absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500 hover:text-red-600 z-10`}
      style={{ ...style }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaAngleLeft
      onClick={onClick}
      className={`${className} sm:w-12 w-6 h-6 sm:h-12 absolute top-1/2 left-3 transform -translate-y-1/2 text-red-500  hover:text-red-600 z-10`}
      style={{ ...style }}
    />
  );
}

function ImageWithText({ src }) {
  return (
    <div className="text-red-500 p-2 sm:p-0 relative">
      <img className="h-[200px] sm:h-[400px] md:h-[870px] w-full object-cover" src={src} alt="" />
      <div className="absolute top-1/2 left-[120px] sm:left-[300px] md:left-[450px] transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-[8px] sm:text-[16px] text-[#ee1c47]">Winter Collection</span>
        <h2 className="text-black text-[20px] sm:text-[40px] md:text-[80px] leading-none font-bold">
          New Winter
          <br />
          Collections 2022
        </h2>
      </div>
    </div>
  );
}

export default function Hero() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [
    "https://cs-everything-fashion-new1.myshopify.com/cdn/shop/files/kumo2_sl1_1880x.png?v=1671078288",
    "https://cs-everything-fashion-new1.myshopify.com/cdn/shop/files/kumo2_sl2_1880x.png?v=1671078288",
    "https://cs-everything-fashion-new1.myshopify.com/cdn/shop/files/kumo2_sl3_1880x.png?v=1671078288"
  ];

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <ImageWithText key={index} src={src} />
        ))}
      </Slider>
    </div>
  );
}
