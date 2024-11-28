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
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-[#e5e5e7] my-6">
        Stack Visualization
      </h1>
      <h3 className="font-semibold text-center text-[#e5e5e7] px-4 mb-6 max-w-lg mx-auto">
        A stack is a linear data structure that follows the Last In, First Out
        (LIFO) principle, where elements are added and removed from the top of
        the stack.
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-6">
        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="stackSize"
            className="text-lg font-medium text-[#e5e5e7] mb-2"
          >
            Set Stack Size:
          </label>
          <input
            type="number"
            id="stackSize"
            value={stackSize}
            onChange={handleSizeChange}
            className="border border-gray-300 px-4 py-2 rounded-lg w-full text-center bg-white text-gray-800 focus:ring-2 focus:ring-[#FF204E]"
            min="1"
          />
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="pushValue"
            className="text-lg font-medium text-[#e5e5e7] mb-2"
          >
            Push Value:
          </label>
          <input
            type="number"
            id="pushValue"
            className="border border-gray-300 px-4 py-2 rounded-lg w-full text-center bg-white text-gray-800 focus:ring-2 focus:ring-[#FF204E]"
          />
          <button
            onClick={handlePush}
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-medium py-2 w-full rounded-lg mt-2 transition"
          >
            Push
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label className="text-lg font-medium text-[#e5e5e7] mb-2">
            Pop Value:
          </label>
          <button
            onClick={handlePop}
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-medium py-2 w-full rounded-lg transition"
          >
            Pop
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label className="text-lg font-medium text-[#e5e5e7] mb-2">
            Peek Value:
          </label>
          <button
            onClick={handlePeek}
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-medium py-2 w-full rounded-lg transition"
          >
            Peek
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="relative bg-[#00224D] rounded-xl shadow-2xl overflow-hidden flex justify-center items-end w-full max-w-md border border-[#e5e5e7]/20"
          style={{ height: `${stackSize * 60}px` }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-[#432E54] to-transparent opacity-40"></div>

          {stackValues.map((value, index) => (
            <div
              key={index}
              id={`stack-item-${index}`}
              className="flex items-center justify-center bg-[#FF204E] text-[#e5e5e7] rounded-md font-semibold shadow-xl mb-2"
              style={{
                position: "absolute",
                bottom: `${index * 60}px`,
                width: "90%",
                height: "50px",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
