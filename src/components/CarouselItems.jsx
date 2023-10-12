import React from "react";

const CarouselItems = ({ slides, slide }) => {
  return (
    <div>
      {slides.map((item, itemIndex) => {
        return (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            className={slide === itemIndex ? "slide" : "slide slide-hidden"}
          />
        );
      })}
    </div>
  );
};

export default CarouselItems;
