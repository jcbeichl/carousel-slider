import React from "react";

const CarouselIndicators = ({ slides, slide }) => {
  return (
    <span className="indicators">
      {slides.map((_, indicatorIndex) => {
        return (
          <button
            key={indicatorIndex}
            className={
              slide === indicatorIndex
                ? "indicator"
                : "indicator indicator-inactive"
            }
            onClick={() => setSlide(indicatorIndex)}
          ></button>
        );
      })}
    </span>
  );
};

export default CarouselIndicators;
