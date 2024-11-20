import React, { useState } from "react";

const MatrixLinearSearchVisualizer = () => {
  const [matrix, setMatrix] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const [found, setFound] = useState(false);
  const [currentCell, setCurrentCell] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);

  const handleMatrixInput = (e) => {
    const rows = e.target.value.split("\n").map((row) =>
      row
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n))
    );
    setMatrix(rows);
    resetState();
  };

  const handleTargetInput = (e) => {
    setTargetValue(e.target.value);
  };

  const resetState = () => {
    setFound(false);
    setFoundIndex(null);
    setCurrentCell(null);
  };

  const startLinearSearch = () => {
    if (matrix.length === 0 || targetValue === "") return;
    linearSearchMatrix(matrix, Number(targetValue));
  };

  const linearSearchMatrix = async (matrix, target) => {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        setCurrentCell([row, col]);
        await delay(500);
        if (matrix[row][col] === target) {
          setFound(true);
          setFoundIndex([row, col]);
          return;
        }
      }
    }
    setFound(false);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-6 mt-28">
        <h1 className="text-3xl font-bold">Matrix Linear Search</h1>
        <textarea
          placeholder="Enter matrix (rows separated by newline, values by commas)"
          onChange={handleMatrixInput}
          className="p-2 border rounded-md w-96 h-32"
        />
        <input
          type="number"
          placeholder="Enter target value"
          value={targetValue}
          onChange={handleTargetInput}
          className="p-2 border rounded-md w-80"
        />
        <button
          onClick={startLinearSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Start Search
        </button>

        <div className="grid grid-cols-1 gap-2 mt-4">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {row.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 h-12 flex items-center justify-center text-sm font-semibold border ${
                    currentCell &&
                    currentCell[0] === rowIndex &&
                    currentCell[1] === colIndex
                      ? "bg-yellow-400"
                      : found &&
                        foundIndex &&
                        foundIndex[0] === rowIndex &&
                        foundIndex[1] === colIndex
                      ? "bg-green-400"
                      : "bg-gray-200"
                  } transition-all duration-500`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span>{value}</span>
                    <span className="text-xs text-gray-500">{`[${rowIndex}, ${colIndex}]`}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          {found ? (
            <p className="text-xl font-bold text-green-600">
              Target value found at index: [{foundIndex[0]}, {foundIndex[1]}]
            </p>
          ) : (
            <p className="text-xl text-red-600">Target value not found</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4 text-sm text-gray-600">
        <p className="font-semibold">Best Time Complexity: O(1)</p>
        <p className="font-semibold">Average Time Complexity: O(n * m)</p>
        <p className="font-semibold">Worst Time Complexity: O(n * m)</p>
        <p className="font-semibold">Space Complexity: O(1)</p>
      </div>
    </>
  );
};

export default MatrixLinearSearchVisualizer;
