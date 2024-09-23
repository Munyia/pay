import { useState, useEffect } from "react";

const Carousel = ({
  children,
  autoslide = false,
  autoslideinterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === children.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    if (autoslide) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoslideinterval);
      return () => clearInterval(interval);
    }
  }, [autoslide, autoslideinterval]);

  return (
    <div className="relative w-full dark:bg-gray-900 dark:text-white h-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex justify-center items-center">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
