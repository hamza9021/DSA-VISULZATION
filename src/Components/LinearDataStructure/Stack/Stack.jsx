import React, { useState } from "react";
import { gsap } from "gsap";

class StackClass {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  display() {
    return this.items;
  }

  isFull(maxSize) {
    return this.items.length >= maxSize;
  }
}

const Stack = () => {
  const [stack] = useState(new StackClass());
  const [stackValues, setStackValues] = useState([]);
  const [stackSize, setStackSize] = useState(5); 

  const handlePush = () => {
    const value = parseInt(document.getElementById("pushValue").value);
    if (!isNaN(value)) {
      if (stack.isFull(stackSize)) {
        alert("Stack is full!");
      } else {
        stack.push(value);
        setStackValues([...stack.display()]); 

        // Animate the new stack item sliding from the bottom
        const newStackItem = document.getElementById(
          `stack-item-${stack.items.length - 1}`
        );
        gsap.fromTo(
          newStackItem,
          { y: 100, opacity: 0 },
          { duration: 0.5, y: 0, opacity: 1, ease: "power3.out" }
        );
      }
    }
  };

  const handlePop = () => {
    if (stack.items.length > 0) {
      const popIndex = stack.items.length - 1;
      const popElement = document.getElementById(`stack-item-${popIndex}`);

      gsap.to(popElement, {
        duration: 0.5,
        y: -100,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          stack.pop();
          setStackValues([...stack.display()]); 
        },
      });
    }
  };

  const handlePeek = () => {
    alert(`Top of stack: ${stack.peek()}`);
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    if (!isNaN(newSize) && newSize > 0) {
      setStackSize(newSize);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Stack Visualization
      </h1>
      <h3 className="font-semibold text-center text-gray-700 px-4 mb-6">
        A stack is a linear data structure that follows the Last In, First Out
        (LIFO) principle, where elements are added and removed from the top of
        the stack. Operations like push, pop, and peek allow for efficient
        management of data in a stack, making it ideal for problems like
        reversing, parsing expressions, and backtracking.
      </h3>

      <div className="flex justify-center items-center gap-6 px-4 py-6">
        <div className="flex flex-col items-center">
          <label
            htmlFor="stackSize"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Set Stack Size:
          </label>
          <input
            type="number"
            id="stackSize"
            value={stackSize}
            onChange={handleSizeChange}
            className="border-2 border-gray-300 px-4 py-2 rounded-lg shadow-sm mb-4 text-center w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>

        <div className="flex flex-col items-center">
          <label
            htmlFor="pushValue"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Push Value:
          </label>
          <input
            type="number"
            id="pushValue"
            className="border-2 border-gray-300 px-4 py-2 rounded-lg shadow-sm mb-4 text-center w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePush}
            className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out mt-2"
          >
            Push
          </button>
        </div>

        <div className="flex flex-col items-center">
          <label
            htmlFor="popValue"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Pop Value:
          </label>
          <button
            onClick={handlePop}
            className="bg-red-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out mt-2"
          >
            Pop
          </button>
        </div>

        <div className="flex flex-col items-center">
          <label
            htmlFor="peekValue"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Peek Value:
          </label>
          <button
            onClick={handlePeek}
            className="bg-yellow-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200 ease-in-out mt-2"
          >
            Peek
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex justify-center items-end"
          style={{ height: `${stackSize * 60}px`, width: "500px" }} 
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-gray-200 to-transparent opacity-40"></div>

          {stackValues.map((value, index) => (
            <div
              key={index}
              id={`stack-item-${index}`}
              className="flex items-center justify-center bg-blue-500 text-white rounded-md text-lg font-semibold shadow-xl mb-2 transform"
              style={{
                position: "absolute",
                bottom: `${index * 60}px`,
                transition: "transform 0.3s ease-in-out",
                width: "100%",
                height: "60px",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stack;
