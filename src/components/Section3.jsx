import { useState } from "react";
import leftArrow from "../assets/left.svg"
import rightArrow from "../assets/right.svg"
import slider_button from "../assets/slider_button.svg"
import quote1 from "../assets/quote1.svg"
import quote2 from "../assets/quote2.svg"

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Reason 1",
      content: "I am highly motivated and eager to learn, which makes me a quick and adaptable learner in any environment.",
    },
    {
      title: "Reason 2",
      content: "I am also learning backend development so will be able to help with that as well.",
    },
    {
      title: "Reason 3",
      content: "I am a team player with excellent communication skills, ensuring smooth collaboration and project delivery.",
    },
    {
      title: "Reason 4",
      content: "I am committed to delivering high-quality work and constantly improving my skills to meet project needs.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      <h1 className="text-2xl font-bold my-5 text-center sm:text-xl md:text-2xl">Why I should be selected as an Intern?</h1>

      <div className="relative w-full max-w-md ">
        {/* Card */}
        <div className="p-6 rounded-lg shadow-lg w-full pb-10">
          <h2 className="text-lg font-bold mb-4 text-center sm:text-xl">{cards[currentIndex].title}</h2>
          <p className="text-gray-700 text-base font-semibold mb-8">{cards[currentIndex].content}</p>
        </div>


        <div>
          <img className='absolute  sm:top-0 left-4 top-8 h-12 w-12 sm:h-16 sm:w-16' src={quote2} alt="quote decoration" />
        </div>

        <div>
          <img className='absolute sm:bottom-0 right-4 bottom-8 h-12 w-12 sm:h-16 sm:w-16' src={quote1} alt="quote decoration" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-10 top-[157px] sm:-left-8 sm:top-1/2 transform -translate-y-1/2 "
        >
          <img className='h-8 w-8 sm:h-10 sm:w-10' src={leftArrow} alt="left arrow" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-20 top-[157px] sm:top-1/2 transform -translate-y-1/2 sm:-right-10"
        >
          <img className='h-8 w-8 sm:h-10 sm:w-10' src={rightArrow} alt="right arrow" />
        </button>

      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>

      <button onClick={nextSlide}>
        <img src={slider_button} className='mt-10 h-12 w-24 sm:h-16 sm:w-32' alt="slider button" />
      </button>
    </div>
  );
};

export default Section3;
