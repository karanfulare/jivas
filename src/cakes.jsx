import React, { useState, useRef } from "react";
import cake1 from "./assets/cake1.jpeg";
import cake2 from "./assets/cake2.jpeg";
import "./Carousel.css";

const images = [
  { 
    src: cake1, 
    alt: "Jar Cakes ", 
    caption: "Layers of Love, Sealed Fresh 🫙❤️- Scoop, Smile, Repeat 🥄😊🔁"
  },
  { 
    src: cake2, 
    alt: "Cup Cakes", 
    caption: "Delightfully Yours 💕🧁 Small, Sweet, and Irresistible 😍🍬"
  }
];

const CakesCarousel = () => {
  const [index, setIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  // Handle swipe functionality for mobile
  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    if (startTouch - endTouch > 50) {
      nextSlide();
    } else if (endTouch - startTouch > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className="simple-carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => (
          <div className="carousel-item" key={i}>
            <img src={img.src} alt={img.alt} />
            <h2>{img.alt}</h2>
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakesCarousel;
