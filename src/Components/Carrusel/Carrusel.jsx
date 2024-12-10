import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carrusel({ slides, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  const totalSlides = slides.length;

  const maxIndex = totalSlides - 2;

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [current, interval]);

  return (
    <div className="overflow-hidden relative w-full max-w-screen-lg rounded-3xl shadow-lg">
      <div
        className="absolute inset-0 bg-blue-950 opacity-80 z-0"
      ></div>

      <div
        className="flex transition-transform ease-out duration-500 z-10"
        style={{
          transform: `translateX(-${current * 50}%)`,
        }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-1/2 flex-shrink-0 object-cover"
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 text-white text-3xl z-20">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-4 flex justify-center gap-2 w-full z-20">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
