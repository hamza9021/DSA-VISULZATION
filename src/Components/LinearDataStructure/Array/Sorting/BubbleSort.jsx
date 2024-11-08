import React, { useState } from "react";

const BubbleSort = () => {
  const size = 10;
  const [array, setArray] = useState([90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
  const [isSorting, setIsSorting] = useState(false);
  const [swappedIndexes, setSwappedIndexes] = useState([-1, -1]);

  const handleRandomArray = () => {
    const updatedArray = [];
    for (let i = 0; i < size; i++) {
      const randomValue = Math.floor(Math.random() * 1000);
      updatedArray.push(randomValue);
    }
    setArray(updatedArray);
  };

  const handleSorting = () => {
    let newArray = [...array];
    let i = 0;
    let j = 0;
    const delay = 1000;

    setIsSorting(true);

    const iterateSorting = () => {
      if (i < size - 1) {
        if (j < size - i - 1) {
          if (newArray[j] > newArray[j + 1]) {
            const temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
            setSwappedIndexes([j, j + 1]);
            setArray(newArray);
          }
          j++;
        } else {
          i++;
          j = 0;
        }
      } else {
        setIsSorting(false);
      }

      setTimeout(iterateSorting, delay);
    };

    iterateSorting();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Bubble Sort Algorithm
      </h1>

      <div className="flex flex-wrap justify-center mb-6">
        {array.map((value, index) => (
          <div
            key={index}
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded m-2 transition-all duration-300 ${
              swappedIndexes[0] === index || swappedIndexes[1] === index
                ? "bg-yellow-300"
                : ""
            }`}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleRandomArray}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSorting}
        >
          Random Array Value
        </button>
        <button
          onClick={handleSorting}
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Start Sorting"}
        </button>
      </div>
    </>
  );
};

export default BubbleSort;
