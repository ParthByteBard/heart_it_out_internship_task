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
      content:
        "I am highly motivated and eager to learn, which makes me a quick and adaptable learner in any environment.",
    },
    {
      title: "Reason 2",
      content:
        "I am also learning backend developement so will be able to help with that as well.",
    },
    {
      title: "Reason 3",
      content:
        "I am a team player with excellent communication skills, ensuring smooth collaboration and project delivery.",
    },
    {
      title: "Reason 4",
      content:
        "I am committed to delivering high-quality work and constantly improving my skills to meet project needs.",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-96">
        {/* Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-10 text-center">{cards[currentIndex].title}</h2>
          <p className="text-gray-700 text-lg font-semibold mb-16">{cards[currentIndex].content}</p>
        </div>


        <div>
          <img className='absolute left-4
           top-10 ' src={quote2} />
        </div>

        <div>
          <img className='absolute right-4 bottom-8' src={quote1} />
        </div>


        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-11 top-1/2 transform -translate-y-1/2"
        >
          <img className='h-10 w-10' src={leftArrow} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-11 top-1/2 transform -translate-y-1/2 "
        >
          <img className='h-10 w-10' src={rightArrow} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>

      <button onClick={() => { nextSlide() }}>
        <img src={slider_button} className='mt-10 sm:h-[65px] w-[130px]' />
      </button>
    </div>
  );
};

export default Section3;
