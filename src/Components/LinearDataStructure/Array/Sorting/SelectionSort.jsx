import React, { useState } from "react";

const SelectionSort = () => {
  const size = 10;
  const [array, setArray] = useState([90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentIndexes, setCurrentIndexes] = useState([-1, -1]);
  const [minIndex, setMinIndex] = useState(-1);

  const handleRandomArray = () => {
    const updatedArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 1000)
    );
    setArray(updatedArray);
    setCurrentIndexes([-1, -1]);
    setMinIndex(-1);
  };

  const handleSorting = () => {
    let newArray = [...array];
    let i = 0;
    const delay = 2000;

    setIsSorting(true);

    const iterateSorting = () => {
      if (i < size - 1) {
        let minIdx = i;

        const findMinimum = (j) => {
          if (j < size) {
            setCurrentIndexes([i, j]);
            if (newArray[j] < newArray[minIdx]) {
              minIdx = j;
              setMinIndex(minIdx);
            }
            setTimeout(() => findMinimum(j + 1), delay);
          } else {
            if (minIdx !== i) {
              [newArray[i], newArray[minIdx]] = [newArray[minIdx], newArray[i]];
              setArray([...newArray]);
              setCurrentIndexes([i, minIdx]);
            }
            i++;
            setTimeout(iterateSorting, delay);
          }
        };

        findMinimum(i + 1);
      } else {
        setIsSorting(false);
        setCurrentIndexes([-1, -1]);
        setMinIndex(-1);
      }
    };

    iterateSorting();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Visualized Selection Sort Algorithm
      </h1>

      <div className="flex flex-wrap justify-center mb-6">
        {array.map((value, index) => (
          <div
            key={index}
            className={`text-white font-bold py-2 px-4 rounded m-2 transition-transform duration-500 ${
              index === minIndex
                ? "bg-blue-500 scale-110"
                : currentIndexes.includes(index)
                ? "bg-yellow-500 scale-105"
                : "bg-red-500"
            }`}
            style={{
              transform: `translateY(${index === minIndex ? "-10px" : "0px"})`,
            }}
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
      <div className="flex flex-col items-center space-y-2 mt-4 text-sm text-gray-600">
        <p className="font-semibold">
          Best Time Complexity: O(n<sup>2</sup>)
        </p>
        <p className="font-semibold">
          Average Time Complexity: O(n<sup>2</sup>)
        </p>
        <p className="font-semibold">
          Worst Time Complexity: O(n<sup>2</sup>)
        </p>
        <p className="font-semibold">Space Complexity: O(1)</p>
      </div>
    </>
  );
};

export default SelectionSort;
