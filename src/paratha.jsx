import React, { useState, useRef } from "react";
import aloo from "./assets/alooParatha.jpeg";
import palakParatha from "./assets/palakParatha.jpeg";
import aloo2 from "./assets/AlooParatha2.jpeg";
import "./Carousel.css";

const images = [
  { 
    src: aloo, 
    alt: " 🥔 Aloo Paratha", 
    caption: "Flaky whole wheat flatbread stuffed with spiced mashed potatoes 🥔, cooked golden with ghee 🧈, and served with homemade pickle 🥒 and curd 🥣 — a comfort-filled desi classic you can’t resist!"
  },
  { 
    src: palakParatha, 
    alt: "🌿 Palak Paratha", 
    caption: "Wholesome palak paratha 🫓 packed with iron-rich spinach 🌿, mild masalas 🌶️, aur served with dahi 🥣 — tasty bhi, healthy bhi 💪 Perfect start to your day! ☀️"
  },
  { 
    src: aloo2, 
    alt: "🥔 Aloo Paratha", 
    caption: " Golden, ghee-kissed aloo paratha 🫓 with a kick of spice 🌶️ — straight from the tawa to your heart ❤️"
  }
];

const ParathaCarousel = () => {
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

export default ParathaCarousel;
