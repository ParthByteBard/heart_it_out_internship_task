import { useState } from "react";

const Section1 = () => {

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const handleOptionChange1 = (e) => setSelectedOption1(e.target.value);
  const handleOptionChange2 = (e) => setSelectedOption2(e.target.value);
  const handleDropdownChange = (e) => setSelectedDropdown(e.target.value);

  return (
    <div className="flex justify-center items-center min-h-screen my-[50px]">
      <form className="bg-white drop-shadow-lg hover:drop-shadow-2xl shadow-slate-500 rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Survey Form</h2>


        <div className="my-8">
          <p className="text-gray-700 mb-2 font-medium">What is your favorite fruit?</p>
          <div className="flex flex-col space-y-2">
            {["Apple", "Banana", "Orange", "Grapes"].map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-2 rounded-md ${selectedOption1 === option ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"
                  }`}
              >
                <input
                  type="radio"
                  name="fruit"
                  value={option}
                  checked={selectedOption1 === option}
                  onChange={handleOptionChange1}
                  className="peer hidden"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-2 peer-checked:border-blue-500`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${selectedOption1 === option ? "bg-blue-500" : ""
                      }`}
                  />
                </div>
                <span
                  className={`${selectedOption1 === option ? "text-blue-500" : "text-gray-700"
                    }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Dropdown Question */}
        <div className="my-8">
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="color">
            Choose your favorite color:
          </label>
          <select
            id="color"
            value={selectedDropdown}
            onChange={handleDropdownChange}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a color
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>


        {/* Second Radio Button Group */}
        <div className="my-8">
          <p className="text-gray-700 mb-2 font-medium">You code in?</p>
          <div className="flex flex-col space-y-2">
            {["C++", "Java", "Python", "JavaScript"].map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-2 rounded-md ${selectedOption2 === option ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"
                  }`}
              >
                <input
                  type="radio"
                  name="language"
                  value={option}
                  checked={selectedOption2 === option}
                  onChange={handleOptionChange2}
                  className="peer hidden"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-2 peer-checked:border-blue-500`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${selectedOption2 === option ? "bg-blue-500" : ""
                      }`}
                  />
                </div>
                <span
                  className={`${selectedOption2 === option ? "text-blue-500" : "text-gray-700"
                    }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center ">
          <button
            type="submit"
            className="w-[40%]  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-2 rounded-md shadow"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default Section1;
