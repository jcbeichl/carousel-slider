import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import CarouselItems from "./CarouselItems";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <section className="carousel">
      <BsArrowLeftSquareFill className="arrow arrow-left" onClick={prevSlide} />
      <CarouselItems slides={slides} slide={slide} />
      <BsArrowRightSquareFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <CarouselIndicators slides={slides} slide={slide} />
    </section>
  );
};

export default Carousel;
