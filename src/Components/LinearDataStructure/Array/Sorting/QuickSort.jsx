import React, { useState } from "react";
const QuickSort = () => {
  const size = 10;
  const [array, setArray] = useState([90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState([-1, -1]);
  const [pivotIndex, setPivotIndex] = useState(-1);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRandomArray = () => {
    const updatedArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(updatedArray);
    setActiveIndexes([-1, -1]);
    setPivotIndex(-1);
  };

  const handleSorting = async () => {
    setIsSorting(true);

    const quickSort = async (arr, left, right) => {
      if (left >= right) return;

      let s = left;
      let e = right;
      const pivotId = Math.floor((left + right) / 2);
      const pivot = arr[pivotId];
      setPivotIndex(pivotId);

      while (s <= e) {
        while (arr[s] < pivot) {
          s++;
          setActiveIndexes([s, e]);
          await delay(2000);
        }
        while (arr[e] > pivot) {
          e--;
          setActiveIndexes([s, e]);
          await delay(2000);
        }
        if (s <= e) {
          [arr[s], arr[e]] = [arr[e], arr[s]];
          s++;
          e--;
          setActiveIndexes([s, e]);
          setArray([...arr]);
          await delay(2000);
        }
      }

      await quickSort(arr, left, e);
      await quickSort(arr, s, right);
    };

    const arrayCopy = [...array];
    await quickSort(arrayCopy, 0, arrayCopy.length - 1);
    setArray(arrayCopy);
    setIsSorting(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-white my-6">
        Quick Sort Algorithm
      </h1>

      <div className="flex flex-wrap justify-center mb-6">
        {array.map((value, index) => (
          <div
            key={index}
            className={`text-white font-bold py-2 px-4 rounded m-2 transition-transform duration-500 ${
              index === pivotIndex
                ? "bg-purple-500 scale-140"
                : activeIndexes.includes(index)
                ? "bg-yellow-500 scale-150"
                : "bg-[#FF204E]"
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

      <div className="flex flex-row items-center justify-center gap-4 my-6 text-sm text-white">
        <div className="flex items-center space-x-2">
          <div className="bg-purple-500 w-5 h-5 rounded"></div>
          <p>Pivot Element</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 w-5 h-5 rounded"></div>
          <p>Currently Comparing</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2 mt-4 text-sm text-white">
        <p className="font-semibold">Best Time Complexity: O(n log n)</p>
        <p className="font-semibold">Average Time Complexity: O(n log n)</p>
        <p className="font-semibold">Worst Time Complexity: O(n²)</p>
        <p className="font-semibold">Space Complexity: O(log n)</p>
      </div>
    </div>
  );
};

export default QuickSort;
