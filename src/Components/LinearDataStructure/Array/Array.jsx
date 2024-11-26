import React, { useState } from "react";
import { Link } from "react-router-dom";

const Array = () => {
  const [size, setSize] = useState(0);
  const [array, setArray] = useState([]);
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);

  const handleValue = (e) => {
    setValue(e.target.value);
    console.log("INSERTION VALUE: " + value);
  };

  const handleArray = () => {
    if (index < size) {
      const updatedArray = [...array];
      updatedArray[index] = value;
      setArray(updatedArray);
      setIndex(index + 1);
    }
    console.log(array);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-white my-6">
        Array Visualization
      </h1>
      <h3 className="font-semibold text-center text-white px-4 mb-6">
        An array is a collection of elements, each identified by an index or
        key. Arrays store data in contiguous memory locations, allowing for
        efficient access and manipulation of elements.
      </h3>

      <div className="flex flex-col items-center space-y-6 mt-8">
        {/* Size Input */}
        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="size" className="text-lg font-medium text-white">
            Enter Array Size:
          </label>
          <input
            type="number"
            id="size"
            placeholder="Enter size of array"
            onChange={handleSize}
            className="border-2 border-white rounded-md px-4 py-2 w-64 text-black focus:outline-none focus:ring-2 focus:ring-[#00224D] focus:border-[#00224D]"
          />
          {size > 0 ? (
            <p className="text-white mt-4">
              Current array size: <span className="font-semibold">{size}</span>
            </p>
          ) : (
            <p className="text-white mt-4">
              Array size cannot be negative or zero.
            </p>
          )}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="value" className="text-lg font-medium text-white">
            Insert Value:
          </label>
          <input
            type="number"
            placeholder="Enter value to insert"
            id="value"
            name="array"
            onChange={handleValue}
            className="border-2 border-white rounded-md px-4 py-2 w-64 text-black focus:outline-none focus:ring-2 focus:ring-[#00224D] focus:border-[#00224D]"
          />
        </div>

        <button
          onClick={handleArray}
          className="bg-[#FF204E] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50"
        >
          Insert
        </button>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-white mb-2">
            Current Array:
          </h4>
          <div className="flex justify-center items-center space-x-2">
            {array.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FF204E] text-white font-semibold px-4 py-2 rounded-md shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-12 px-6 py-8 bg-transparent shadow-xl rounded-xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">
            Sorting Visualizer
          </h2>
          <ul className="space-y-4">
            <li>
              <Link to="/array/sort/bubble">
                <button className="w-full py-3 px-6 text-lg text-white rounded-lg bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Bubble Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/selection">
                <button className="w-full py-3 px-6 text-lg text-white rounded-lg bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Selection Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/insertion">
                <button className="w-full py-3 px-6 text-lg text-white rounded-lg bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Insertion Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/quick">
                <button className="w-full py-3 px-6 text-lg text-white rounded-lg bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Quick Sort
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">
            Searching Visualizer
          </h2>
          <ul className="space-y-4">
            <li>
              <Link to="/array/search/linear">
                <button className="w-full py-3 px-6 text-lg text-white rounded-md bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Linear Search
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/search/binary">
                <button className="w-full py-3 px-6 text-lg text-white rounded-md bg-[#FF204E] hover:bg-[#A0153E] focus:outline-none focus:ring-2 focus:ring-[#FF204E] focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Binary Search
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Array;
