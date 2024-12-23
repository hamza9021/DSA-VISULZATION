import React, { useState } from "react";

const MatrixBinarySearchVisualizer = () => {
  const [matrix, setMatrix] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const [found, setFound] = useState(false);
  const [rowStart, setRowStart] = useState(-1);
  const [rowMid, setRowMid] = useState(-1);
  const [rowEnd, setRowEnd] = useState(-1);
  const [colMid, setColMid] = useState(-1);
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
    setRowStart(-1);
    setRowMid(-1);
    setRowEnd(-1);
    setColMid(-1);
  };

  const startBinarySearch = () => {
    if (matrix.length === 0 || targetValue === "") return;
    binarySearchMatrix(matrix, Number(targetValue));
  };

  const binarySearchMatrix = async (matrix, target) => {
    let start = 0;
    let end = matrix.length - 1;

    while (start <= end) {
      const midRow = Math.floor((start + end) / 2);
      setRowStart(start);
      setRowEnd(end);
      setRowMid(midRow);

      if (
        matrix[midRow][0] <= target &&
        matrix[midRow][matrix[midRow].length - 1] >= target
      ) {
        const result = await binarySearchRow(matrix[midRow], target, midRow);
        if (result) return;
      }

      if (matrix[midRow][0] > target) {
        end = midRow - 1;
      } else {
        start = midRow + 1;
      }
      await delay(2000);
    }
    setFound(false);
  };

  const binarySearchRow = async (row, target, midRow) => {
    let start = 0;
    let end = row.length - 1;

    while (start <= end) {
      const midCol = Math.floor((start + end) / 2);
      setColMid(midCol);
      await delay(2000);
      if (row[midCol] === target) {
        setFound(true);
        setFoundIndex([midRow, midCol]);
        return true;
      }

      if (row[midCol] < target) {
        start = midCol + 1;
      } else {
        end = midCol - 1;
      }
      await delay(2000);
    }
    return false;
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-6 mt-28">
        <h1 className="text-3xl font-bold text-white">Matrix Binary Search</h1>
        <textarea
          placeholder="Enter matrix (rows separated by newline, values by commas) 
          NOTE: Each Row Is Sorted And Next Row 1st Element Is Greater Than Previous Row Last Element"
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
          onClick={startBinarySearch}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 "
        >
          Start Search
        </button>

        <div className="grid grid-cols-1 gap-2 mt-4">
          {matrix.map((row, rowIndex) => (
            <div
              key={rowIndex}
              id={`row-${rowIndex}`}
              className={`flex gap-2 ${
                rowStart <= rowIndex && rowIndex <= rowEnd ? "bg-blue-100" : ""
              }`}
            >
              {row.map((value, colIndex) => (
                <div
                  key={colIndex}
                  id={`cell-${rowIndex}-${colIndex}`}
                  className={`w-12 h-12 flex items-center justify-center text-sm font-semibold border ${
                    (rowMid === rowIndex && colMid === colIndex) ||
                    (found &&
                      foundIndex &&
                      foundIndex[0] === rowIndex &&
                      foundIndex[1] === colIndex)
                      ? "bg-yellow-400"
                      : "bg-gray-200"
                  } transition-all duration-500`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span>{value}</span>
                    <span className="text-xs">{`[${rowIndex}, ${colIndex}]`}</span>
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
      <div className="flex flex-col items-center space-y-2 mt-4 text-sm text-white">
        <p className="font-semibold">Best Time Complexity: O(1)</p>
        <p className="font-semibold">
          Average Time Complexity: O(log n * log m)
        </p>
        <p className="font-semibold">Worst Time Complexity: O(log n * log m)</p>
        <p className="font-semibold">Space Complexity: O(1)</p>
      </div>
    </>
  );
};

export default MatrixBinarySearchVisualizer;
