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
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Array Visualization
      </h1>
      <h3 className="font-semibold text-center text-gray-700 px-4 mb-6">
        An array is a collection of elements, each identified by an index or
        key. Arrays store data in contiguous memory locations, allowing for
        efficient access and manipulation of elements.
      </h3>

      <div className="flex flex-col items-center space-y-6 mt-8">
        {/* Size Input */}
        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="size" className="text-lg font-medium text-gray-600">
            Enter Array Size:
          </label>
          <input
            type="number"
            id="size"
            placeholder="Enter size of array"
            onChange={handleSize}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {size > 0 ? (
            <p className="text-gray-600 mt-4">
              Current array size: <span className="font-semibold">{size}</span>
            </p>
          ) : (
            <p className="text-gray-600 mt-4">
              Array size cannot be negative or zero.
            </p>
          )}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="value" className="text-lg font-medium text-gray-600">
            Insert Value:
          </label>
          <input
            type="number"
            placeholder="Enter value to insert"
            id="value"
            name="array"
            onChange={handleValue}
            className="border-2 border-gray-300 rounded-md px-4 py-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleArray}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Insert
        </button>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Current Array:
          </h4>
          <div className="flex justify-center items-center space-x-2">
            {array.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-md shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-12 px-6 py-8 bg-white shadow-xl rounded-xl">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
            Sorting Visualizer
          </h2>
          <ul className="space-y-4">
            <li>
              <Link to="/array/sort/bubble">
                <button className="w-full py-3 px-6 text-lg text-gray-800 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Bubble Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/selection">
                <button className="w-full py-3 px-6 text-lg text-gray-800 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Selection Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/insertion">
                <button className="w-full py-3 px-6 text-lg text-gray-800 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Insertion Sort
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/sort/quick">
                <button className="w-full py-3 px-6 text-lg text-gray-800 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-200 shadow-sm">
                  Quick Sort
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
            Searching Visualizer
          </h2>
          <ul className="space-y-4">
            <li>
              <Link to="/array/search/linear">
                <button className="w-full py-3 px-6 text-lg text-gray-700 border border-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
                  Linear Search
                </button>
              </Link>
            </li>
            <li>
              <Link to="/array/search/binary">
                <button className="w-full py-3 px-6 text-lg text-gray-700 border border-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
                  Binary Search
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Array;
