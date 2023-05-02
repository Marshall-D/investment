
import React, {useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHandler = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);

return (
  <Carousel 
    autoPlay={true}
    interval={3000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    showIndicators={true}
    onChange={(index) => setCurrentSlide(index)}
    selectedItem={currentSlide}
    onClickItem={(index) => setCurrentSlide(index)}
    onInit={() => setTotalSlides(6)}
  >
    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-1.jpg" />
    </div>

    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-2.jpg" />
    </div>
    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-3.jpg" />
    </div>

    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-4.jpg" />
    </div>
    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-6.jpg" />
    </div>

    <div>
      <img src="https://bank-of-africa.net/wp-content/uploads/2020/11/Slider-groupe-7.jpg" />
    </div>

    
  </Carousel>
);
};

export default CarouselHandler;