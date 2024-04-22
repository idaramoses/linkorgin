import React from 'react';
import Slider from 'react-slick';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <button className="next-arrow">Next</button>,
    prevArrow: <button className="prev-arrow">Prev</button>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
     <Slider {...settings}>
      <div className='px-2 h-[80%] relative'>
        <div className='px-5 py-2 bg-white-A700  rounded-md absolute bottom-0 left-2 z-50 text-xs text-[#3C4556] w-[70%]'>Recreational activities tailored for you</div>
        <img src="images/img_slider_1.png" className='rounded-md h-auto z-40 mb-8' alt="Image 2" />
      </div>
      <div className='px-2 h-[80%] relative'>
        <div className='px-5 py-2 bg-[#3C4556] rounded-md absolute top-0 left-2 z-50 text-xs text-white-A700 w-[70%]'>Need help with finding restaurants?</div>
        <img src="images/img_slider_2.png" className='rounded-md h-auto z-40 mt-8' alt="Image 2" />
      </div>
      <div className='px-2 h-[80%] relative'>
        <div className='px-5 py-2 bg-white-A700  rounded-md absolute bottom-0 left-2 z-50 text-xs text-[#3C4556] w-[70%]'>Find grocery stores nearby</div>
        <img src="images/img_slider_3.png" className='rounded-md h-auto z-40 mb-8' alt="Image 2" />
      </div>
      <div className='px-2 h-[80%] relative'>
        <div className='px-5 py-2 bg-[#3C4556] rounded-md absolute top-0 left-2 z-50 text-xs text-white-A700 w-[70%]'>Discover the night life around your vicinity</div>
        <img src="images/img_slider_4.png" className='rounded-md h-auto z-40 mt-8' alt="Image 2" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
