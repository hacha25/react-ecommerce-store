import React, { useState, useEffect } from "react";
import "./hero-caresoul.css"

const images = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <img src={images[current]} alt={`Hero ${current + 1}`} />
    </div>
  );
}

export default HeroCarousel;
