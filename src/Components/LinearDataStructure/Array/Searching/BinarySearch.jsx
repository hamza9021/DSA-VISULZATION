import React, { useState } from "react";

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const [found, setFound] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [left, setLeft] = useState(-1);
  const [right, setRight] = useState(-1);

  const handleArray = (e) => {
    const inputArray = e.target.value.split(",").map(Number);
    const sortedArray = [...inputArray].sort((a, b) => a - b);
    setArray(sortedArray);
  };

  const handleTargetValue = (e) => {
    setTargetValue(e.target.value);
  };

  const startBinarySearch = () => {
    const target = Number(targetValue);
    binarySearch(array, target, 0, array.length - 1);
  };

  const binarySearch = (array, targetValue, start, end) => {
    if (start > end) {
      return;
    }

    const midIndex = Math.floor((start + end) / 2); 
    setMid(midIndex);
    setLeft(start);
    setRight(end);

    if (array[midIndex] === targetValue) {
      setFound(midIndex);
      return;
    }

    if (array[midIndex] < targetValue) {
      setTimeout(() => binarySearch(array, targetValue, midIndex + 1, end), 4000);
    } else {
      setTimeout(() => binarySearch(array, targetValue, start, midIndex - 1), 4000);
    }
  };

  return (
    <>
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Binary Search</h1>
      </div>
      <div className="flex flex-col items-center gap-4 mb-8">
        <label htmlFor="array" className="text-lg">Array</label>
        <input
          type="text"
          id="array"
          placeholder="Enter array"
          onChange={handleArray}
          className="px-4 py-2 border rounded-md w-64"
        />
        <label htmlFor="targetValue" className="text-lg">Target Value</label>
        <input
          type="number"
          id="targetValue"
          placeholder="Enter target value"
          value={targetValue}
          onChange={handleTargetValue}
          className="px-4 py-2 border rounded-md w-64"
        />
        <button
          onClick={startBinarySearch}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Start Binary Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {array.length > 0 &&
          array.map((value, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex flex-col items-center justify-center text-lg text-gray-700 rounded-lg shadow-md transition-all ${
                mid === index ? "bg-red-500" : "" 
              } ${left <= index && index <= right ? "bg-blue-300" : ""}  ${
                found === index ? "bg-green-500" : ""
              }`}
            >
              <div>{value}</div>
              <span className="mt-2 text-sm text-gray-600">{index}</span>
            </div>
          ))}
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-blue-500">Left: {left}</p>
        <p className="text-lg font-semibold text-red-500">Mid: {mid}</p>
        <p className="text-lg font-semibold text-green-500">Right: {right}</p>
      </div>
      <div className="text-center mt-4">
        {found !== -1 ? <p className="text-lg">Target value found at index {found}</p> : <p className="text-lg">Target value not found</p>}
      </div>
    </>
  );
};

export default BinarySearch;
