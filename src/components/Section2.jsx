
import { useState, useEffect } from "react";
import axios from "axios";

const Section2 = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({}); // Track dropdown states

  const queryWords = ["Boys", "Travel", "Love", "Beach"]; // Random words




  useEffect(() => {
    // Fetch data for all query words
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = {};
        for (const word of queryWords) {
          const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${word}`);
          results[word] = response.data.slice(0, 3); // Take the first 3 results
        }
        console.log(results);
        setData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = (word) => {
    setDropdownOpen((prev) => ({ ...prev, [word]: !prev[word] }));
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center py-8 max-w-[100%]">
      <h1 className="text-2xl font-bold mb-6">TV Show Search Results</h1>
      {loading ? (
        <p className="text-lg text-gray-700">Loading...</p>
      ) : (
        <div className="w-11/12 space-y-8 lg:space-x-0 lg:space-y-10 max-w-[100%]">
          {queryWords.map((word) => (
            <div key={word} className="flex-1 border border-gray-300 rounded-lg shadow-md mb-4 lg:mb-0">
              {/* Accordion Header */}
              <div
                className="bg-blue-500 text-white p-4 rounded-t-lg font-semibold cursor-pointer"
                onClick={() => toggleDropdown(word)}
              >
                {word} ▼
              </div>
              {/* Accordion Body */}
              {dropdownOpen[word] && (
                <div className="bg-white p-4 space-y-4 lg:flex ">
                  {data[word]?.map((show, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-3xl p-4 shadow-md lg:m-3 lg:w-[500px] lg:h-auto flex flex-col justify-between"
                    >
                      <h3 className="text-2xl font-bold text-blue-600 mb-5">{show.show.type}</h3>
                      <p className="text-xl font-semibold text-gray-700 mb-3">{show.show.name}</p>
                      <p className="text-lg text-gray-800 mb-5">
                        <strong>Summary:</strong>{" "}
                        {show.show.summary
                          ? show.show.summary.replace(/<[^>]*>?/gm, "")
                          : "No summary available."}
                      </p>
                      <div className='flex justify-center align-bottom mt-auto'>

                        <button
                          className="text-white font-semibold  text-md rounded-xl bg-blue-500 border-none w-[80%] px-4 py-2"
                        >
                          <a target="_blank" href={show.show.url} >Click to know more</a>
                        </button>
                      </div>
                    </div>

                    // <div
                    //   key={index}
                    //   className="border border-gray-300 rounded-3xl p-4 shadow-md lg:m-3 lg:w-[500px] lg:h-auto flex flex-col justify-between"
                    // >
                    //   <h3 className="text-2xl font-bold text-blue-600 mb-5">{show.show.type}</h3>
                    //   <p className="text-xl font-semibold text-gray-700 mb-3">{show.show.name}</p>
                    //   <p className="text-lg text-gray-800 mb-5 flex-grow">
                    //     <strong>Summary:</strong>{" "}
                    //     {show.show.summary
                    //       ? show.show.summary.replace(/<[^>]*>?/gm, "")
                    //       : "No summary available."}
                    //   </p>
                    //   <div className="mt-auto flex justify-center align-bottom">
                    //     <button
                    //       className="text-white font-semibold text-md rounded-xl bg-blue-500 border-none w-[80%] px-4 py-2"
                    //     >
                    //       <a target="_blank" href={show.show.url} rel="noopener noreferrer">
                    //         Click to know more
                    //       </a>
                    //     </button>
                    //   </div>
                    // </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
};

export default Section2;
