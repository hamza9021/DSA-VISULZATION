import React, { useState } from "react";

const LinearSearch = () => {
  const [size, setSize] = useState(0);
  const [array, setArray] = useState([]);
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [searchingIndex, setSearchingIndex] = useState(null);
  const [found, setFound] = useState(false);

  const handleSize = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize);

    if (newSize > 0) {
      const updatedArray = Array(newSize).fill(0);
      setArray(updatedArray);
      setIndex(0);
      setFound(false);
      setSearchingIndex(null);
    }
  };

  const handleValue = (e) => {
    setValue(Number(e.target.value));
  };

  const handleArray = () => {
    if (index < size) {
      const updatedArray = [...array];
      updatedArray[index] = value;
      setArray(updatedArray);
      setIndex(index + 1);
    }
  };

  const handleTargetValue = (e) => {
    setTargetValue(parseInt(e.target.value, 10));
  };

  const handleSearch = async () => {
    setFound(false);
    setSearchingIndex(0);
    const result = await searching(0);
    if (result) {
      alert(`Value found at index ${searchingIndex}`);
    } else {
      alert("Value not found");
    }
  };

  const searching = (i) => {
    return new Promise((resolve) => {
      if (i === size) {
        resolve(false);
      } else {
        setSearchingIndex(i);
        if (array[i] === targetValue) {
          setFound(true);
          resolve(true);
        } else {
          setTimeout(() => resolve(searching(i + 1)), 2000);
        }
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
          Linear Search Visualization
        </h1>
        <div className="flex flex-col items-start space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-between w-full">
            <label htmlFor="size" className="text-gray-700 font-semibold w-1/3">
              Size:
            </label>
            <input
              type="number"
              id="size"
              className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleSize}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label
              htmlFor="value"
              className="text-gray-700 font-semibold w-1/3"
            >
              Insert Value:
            </label>
            <input
              type="number"
              id="value"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
              onChange={handleValue}
            />
            <button
              className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleArray}
            >
              Insert
            </button>
          </div>
          <div className="flex items-center justify-between w-full">
            <label
              htmlFor="target"
              className="text-gray-700 font-semibold w-1/3"
            >
              Target Value:
            </label>
            <input
              type="number"
              id="target"
              className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleTargetValue}
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 px-6 py-2 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition duration-200"
        >
          Start Searching
        </button>

        {array.length > 0 && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Array Values
            </h2>
            <div className="grid grid-cols-10 gap-3">
              {array.map((value, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-3 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow-sm border ${
                    idx === searchingIndex
                      ? "border-red-500 bg-yellow-200"
                      : "border-blue-300"
                  } ${found && idx === searchingIndex ? "bg-green-200" : ""}`}
                >
                  <span>{value}</span>
                  <span className="text-xs text-gray-500">Index {idx}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LinearSearch;
