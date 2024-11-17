import React from "react";
import { Link } from "react-router-dom";
const Home = function BubbleSort() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 my-6">
        DATA STRUCTURES AND ALGORITHM VISUALIZATION
      </h1>

      {/* Linear Data Structure Section */}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Linear Data Structure
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Link to={"/array"}>
            {" "}
            <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Array
            </li>
          </Link>
          <Link to={"/linkedlist"}>
            <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Linked List
            </li>
          </Link>
          <Link to={"/stack"}>
            <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Stack
            </li>
          </Link>
          <Link to={"/queue"}>
            <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Queue
            </li>
          </Link>
        </ul>
      </div>

      {/* Non-Linear Data Structure Section */}
      <div className="flex flex-col items-center space-y-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Non-Linear Data Structure
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Link to={"/tree"}>
            <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
              Tree
            </li>
          </Link>
          <li className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
            Graph
          </li>
        </ul>
      </div>

      <div className="max-w-3xl mx-auto my-12 px-6 py-8 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
          About Me and the Project
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Hello! I'm Hamza Riaz, a passionate Full-Stack Developer based in
          Bhawalnagar, Pakistan. Currently, I'm pursuing my degree in Computer
          Science at Comsats University Islamabad, Sahiwal, where I'm honing my
          skills and expanding my knowledge in the world of technology.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This project is created for educational purposes, specifically for
          students who find data structures and algorithms difficult to
          understand. My goal is to make these concepts more accessible and
          easier to grasp through visualization and interaction.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This is just the beginning! I plan to add many more features and
          improvements over time. If you have any ideas or suggestions, I’d love
          to hear from you. You can also contribute directly through my GitHub
          profile.
        </p>
        <p className="text-lg text-gray-700">
          I built this project entirely using React, and the source code is
          available on GitHub. You can check it out here:{" "}
          <a
            href="https://github.com/hamza9021/DSA-VISULZATION"
            className="text-blue-500 hover:underline"
          >
            GitHub Repository
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Home;
