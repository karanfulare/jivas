import React, { useState, useRef } from "react";
import soyaSalad from "./assets/soyaSalad.jpeg";
import egg from "./assets/Eggs.jpeg";
import Chickpea from "./assets/chickpeaSalad.jpeg";
import Chickpea2 from "./assets/ChickPea.jpeg";
import "./Carousel.css";

const images = [
  { 
    src: soyaSalad, 
    alt: "Soya Salad", 
    caption: " (~22 gm protien) A protein-rich bowl of spiced soya chunks 🍲 mixed with cucumber 🥒, tomato 🍅, onion 🧅, and fresh coriander 🌿, topped with a creamy homemade coriander-curd dressing 🥣 — refreshing, nourishing, and full of flavor."
  },
  { 
    src: egg, 
    alt: "Egg", 
    caption: " 🥚🥚🥚 x10 protein-packed boiled eggs tossed in 🌶️ pickled spices, 🧅 crisp onions, 🍅 juicy tomatoes, and 🌿 fresh coriander — a bold, desi-style power bowl in every bite!"
  },
  { 
    src: Chickpea, 
    alt: "Chickpea Salad", 
    caption: " (~20 gm protien)🧆 Protein-rich chickpeas mixed with 🧅 onions, 🍅 tomatoes, and 🌿 fresh coriander, tossed in zesty 🌶️ spices — a wholesome, earthy bowl full of flavor and power!"
  },
  { 
    src: Chickpea2, 
    alt: "Order Now", 
    caption: " We also serve Paneer (100 gm) salad (~22 gm protien)  !!! Order now and enjoy homemade goodness!"
  }
];

const ImageCarousel = () => {
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

export default ImageCarousel;
