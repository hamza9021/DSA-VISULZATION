import React, { useState } from "react";

function Queue() {
  const [size, setSize] = useState(0);
  const [array, setArray] = useState([]);
  const [index, setIndex] = useState(0);
  // const [value,setValue] = useState(0);

  const handleSize = (e) => {
    setSize(e.target.value);
    setArray(Array(size).fill(0));
  };

  const handleEnqueue = () => {
    if (index < size) {
      let value = document.getElementById("enqueue").value;
      const updatedArray = [...array];
      updatedArray[index] = value;
      setArray(updatedArray);
      setIndex(index + 1);
    } else {
      alert("Queue is full");
    }
  };

  const handleDequeue = () => {
    if (index > 0) {
      const updatedArray = [...array];
      updatedArray.shift();
      setArray(updatedArray);
      setIndex(index - 1);
      setSize(size - 1);
    } else {
      alert("Queue is empty");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#e5e5e7] my-6">
        Queue Visualization
      </h1>
      <h3 className="font-semibold text-center text-[#e5e5e7] px-4 mb-6 max-w-xl mx-auto">
        A queue is a linear data structure that follows the First In, First Out
        (FIFO) principle, where elements are added at the rear (enqueue) and
        removed from the front (dequeue), resembling a real-world queue.
      </h3>

      <div className="flex flex-wrap justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-24 gap-6">
        <div className="flex flex-col items-center w-full sm:w-1/4 md:w-1/6 lg:w-1/6 mb-4">
          <label htmlFor="size" className="text-lg font-medium text-[#e5e5e7] mb-2">
            Size
          </label>
          <input
            type="number"
            id="size"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-center bg-white text-gray-800 focus:ring-2 focus:ring-[#FF204E]"
            placeholder="Enter size"
            onChange={handleSize}
          />
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/4 md:w-1/6 lg:w-1/6 mb-4">
          <label htmlFor="enqueue" className="text-lg font-medium text-[#e5e5e7] mb-2">
            Enqueue
          </label>
          <input
            type="number"
            id="enqueue"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-center bg-white text-gray-800 focus:ring-2 focus:ring-[#FF204E]"
            placeholder="Enter value to enqueue"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-1/4 md:w-1/6 lg:w-1/6 mb-4 mt-8">
          <button
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-bold py-2 px-4 rounded w-full sm:w-auto transition duration-300 ease-in-out"
            onClick={handleEnqueue}
          >
            Enqueue
          </button>
          <button
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-bold py-2 px-4 rounded w-full sm:w-auto transition duration-300 ease-in-out"
            onClick={handleDequeue}
          >
            Dequeue
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-10 w-full px-4 sm:px-8 md:px-16 lg:px-24">
        {array.map((value, index) => (
          <div key={index} className="flex items-center justify-center mb-4">
            <div
              className={`border border-[#e5e5e7]/20 rounded-md px-3 py-2 text-center w-16 transition duration-300 ease-in-out ${
                index === 0
                  ? "bg-[#FF204E]"
                  : index === size - 1
                  ? "bg-[#FF204E]"
                  : "bg-[#00224D]"
              }`}
            >
              {index === 0 ? (
                <div>
                  <span className="text-xs block mt-1 font-semibold text-[#e5e5e7]">
                    Front
                  </span>
                  <span className="text-[#e5e5e7]">{value}</span>
                </div>
              ) : index === size - 1 ? (
                <div>
                  <span className="text-xs block mt-1 font-semibold text-[#e5e5e7]">
                    Rear
                  </span>
                  <span className="text-[#e5e5e7]">{value}</span>
                </div>
              ) : (
                <span className="text-[#e5e5e7]">{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Queue;
