import React, { useState } from "react";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListClass {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  insertAfter(value, targetValue) {
    let current = this.head;
    while (current && current.value !== targetValue) {
      current = current.next;
    }
    if (current) {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  deleteValue(targetValue) {
    if (!this.head) return;

    if (this.head.value === targetValue) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== targetValue) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  display() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

const LinkedList = () => {
  const [linkedList] = useState(new LinkedListClass());
  const [listValues, setListValues] = useState([]);

  const handleInsertFirst = () => {
    const value = parseInt(document.getElementById("insertFirst").value);
    linkedList.insertFirst(value);
    setListValues(linkedList.display());
  };

  const handleInsertLast = () => {
    const value = parseInt(document.getElementById("insertLast").value);
    linkedList.insertLast(value);
    setListValues(linkedList.display());
  };

  const handleDeleteFirst = () => {
    linkedList.deleteFirst();
    setListValues(linkedList.display());
  };

  const handleDeleteLast = () => {
    linkedList.deleteLast();
    setListValues(linkedList.display());
  };

  const handleInsertAtSpecificValue = () => {
    const value = parseInt(
      document.getElementById("insertAtSpecificValue").value
    );
    const targetValue = parseInt(
      prompt("Enter the value after which to insert:")
    );
    linkedList.insertAfter(value, targetValue);
    setListValues(linkedList.display());
  };

  const handleDeleteAtSpecificValue = () => {
    const targetValue = parseInt(
      document.getElementById("deleteAtSpecificValue").value
    );
    linkedList.deleteValue(targetValue);
    setListValues(linkedList.display());
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Linked List Visualization
      </h1>
      <h3 className="font-semibold text-center text-gray-700 px-4 mb-6 max-w-xl mx-auto">
        A linked list is a data structure where elements (nodes) are connected
        by pointers, allowing for dynamic memory allocation.
      </h3>

      <div className="flex flex-wrap justify-center gap-8 p-6 md:gap-10">
        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="insertFirst"
            className="font-semibold text-gray-700 mb-1"
          >
            Insert First:
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            id="insertFirst"
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
          <button
            onClick={handleInsertFirst}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-md"
          >
            Insert
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="insertLast"
            className="font-semibold text-gray-700 mb-1"
          >
            Insert Last:
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            id="insertLast"
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
          <button
            onClick={handleInsertLast}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-md"
          >
            Insert
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="deleteFirst"
            className="font-semibold text-gray-700 mb-1"
          >
            Delete First:
          </label>
          <button
            onClick={handleDeleteFirst}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 w-full rounded-md"
          >
            Delete
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="deleteLast"
            className="font-semibold text-gray-700 mb-1"
          >
            Delete Last:
          </label>
          <button
            onClick={handleDeleteLast}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 w-full rounded-md"
          >
            Delete
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="insertAtSpecificValue"
            className="font-semibold text-gray-700 mb-1"
          >
            Insert At Specific Value:
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            id="insertAtSpecificValue"
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
          <button
            onClick={handleInsertAtSpecificValue}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-md"
          >
            Insert
          </button>
        </div>

        <div className="flex flex-col items-center w-full sm:w-40">
          <label
            htmlFor="deleteAtSpecificValue"
            className="font-semibold text-gray-700 mb-1"
          >
            Delete At Specific Value:
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            id="deleteAtSpecificValue"
            className="border border-gray-300 px-4 py-2 rounded-md w-full mb-2"
          />
          <button
            onClick={handleDeleteAtSpecificValue}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 w-full rounded-md"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Current Linked List:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {listValues.map((value, index) => (
            <React.Fragment key={index}>
              <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-110">
                {value}
              </div>
              {index < listValues.length - 1 && (
                <span className="text-xl font-bold text-gray-600">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default LinkedList;
