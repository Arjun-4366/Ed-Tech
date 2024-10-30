import React from "react";
import { useNavigate } from "react-router-dom";
import TitleCards from "./TitleCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Hero() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = ["/corousel2.jpg", "/corousel3.jpg"];
  const texts = [
    "Purchase the best Courses From BrightMinds",
    "One course can change your life",
  ];  
  return (
    <div>
      <div className="lg:flex lg:flex-col  items-center justify-center pt-20 pb-20">
    
        <div className="w-full relative">
        <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={process.env.PUBLIC_URL + image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute w-80 h-80 bottom-0 left-0 flex flex-col items-center p-4">
                  <h1 className="text-4xl  font-bold bg-opacity-50 text-black">
                    {texts[index]}
           
                  </h1>
                  <button
                className="bg-green-700 text-white rounded-lg px-4 py-1 flex items-center hover:bg-green-800  m-10"
                onClick={() => navigate('/login')}
              >
                Get Started
              </button>
                </div>
              </div>
              
            ))}
            
          </Slider>
          
        </div>
      </div>
      <div className="w-full flex justify-center md:p-20 sm:p-28 items-center">
        <h1 className="text-4xl text-gray-600 font-mono">
          Explore The Courses...
        </h1>
      </div>
      <TitleCards />
    </div>
  );
}

export default Hero;
