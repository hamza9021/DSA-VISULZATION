import React, { useState } from "react";

const InsertionSort = () => {
  const size = 10;
  const [array, setArray] = useState([90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [sortedIndex, setSortedIndex] = useState(-1);

  const handleRandomArray = () => {
    const updatedArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(updatedArray);
    setSortedIndex(-1);
  };

  const handleSorting = () => {
    const newArray = [...array];
    let i = 1;
    let delay = 2000;

    setIsSorting(true);

    const iterateSorting = () => {
      if (i < size) {
        let j = i;
        let current = newArray[i];
        setHighlightedIndex(i);

        const innerLoop = () => {
          if (j > 0 && newArray[j - 1] > current) {
            newArray[j] = newArray[j - 1];
            setArray([...newArray]);
            setHighlightedIndex(j - 1);
            j--;

            setTimeout(innerLoop, delay);
          } else {
            newArray[j] = current;
            setArray([...newArray]);
            setSortedIndex(i);
            i++;
            setTimeout(iterateSorting, delay);
          }
        };

        innerLoop();
      } else {
        setIsSorting(false);
        setHighlightedIndex(-1);
      }
    };

    iterateSorting();
  };

  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-white my-6">
        Insertion Sort Algorithm
      </h1>

      <div className="flex flex-wrap justify-center mb-6">
        {array.map((value, index) => (
          <div
            key={index}
            className={`text-white font-bold py-2 px-4 rounded m-2 transition-transform duration-500 ${
              index === highlightedIndex
                ? "bg-yellow-500 scale-150"
                : index <= sortedIndex
                ? "bg-blue-500"
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

      <div className="flex flex-col items-center space-y-2 mt-4 text-sm text-white">
        <p className="font-semibold">Best Time Complexity: O(n)</p>
        <p className="font-semibold">
          Average Time Complexity: O(n<sup>2</sup>)
        </p>
        <p className="font-semibold">
          Worst Time Complexity: O(n<sup>2</sup>)
        </p>
        <p className="font-semibold">Space Complexity: O(1)</p>
      </div>
    </div>
  );
};

export default InsertionSort;
