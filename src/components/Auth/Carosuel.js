import React, { useState, useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Carosuel = ({ slides, autoplayInterval = 2500 }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


  // Function to handle automatic sliding
  const autoSlide = () => {
    nextSlide();
  };

  // Start autoplay when the component mounts
  useEffect(() => {
    const intervalId = setInterval(autoSlide, autoplayInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [current, autoplayInterval]);
  return (
    <div className="relative">
      <div className="overflow-hidden relative ">
        <div
          className={`flex transition ease-out duration-4`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, index) => {
            return <img className="h-screen p-2 " src={s} alt="slider-img" key={index} />;
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            {/* <ArrowCircleLeftIcon /> */}
          </button>
          <button onClick={nextSlide}>
            {/* <ArrowCircleRightIcon /> */}
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
