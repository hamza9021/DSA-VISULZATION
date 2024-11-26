import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = function BubbleSort() {
  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#e5e5e7] tracking-wide leading-tight">
          Data Structures and Algorithm Visualization
        </h1>
        <p className="text-lg text-[#e5e5e7] mt-4">
          Simplifying complex concepts through interactive learning.
        </p>
      </header>

      {/* Linear Data Structure Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#e5e5e7] mb-6 text-center">
          Linear Data Structures
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            to="/array"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">Array</h3>
              <p className="text-sm text-[#e5e5e7]">
                Visualize and understand array operations.
              </p>
            </li>
          </Link>
          <Link
            to="/linkedlist"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">
                Linked List
              </h3>
              <p className="text-sm text-[#e5e5e7]">
                Explore the structure and operations of linked lists.
              </p>
            </li>
          </Link>
          <Link
            to="/stack"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">Stack</h3>
              <p className="text-sm text-[#e5e5e7]">
                Understand stack operations and LIFO behavior.
              </p>
            </li>
          </Link>
          <Link
            to="/queue"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">Queue</h3>
              <p className="text-sm text-[#e5e5e7]">
                Visualize queue operations and FIFO behavior.
              </p>
            </li>
          </Link>
        </ul>
      </section>

      {/* Non-Linear Data Structure Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#e5e5e7] mb-6 text-center">
          Non-Linear Data Structures
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/tree"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">Tree</h3>
              <p className="text-sm text-[#e5e5e7]">
                Learn about hierarchical data structures and traversal.
              </p>
            </li>
          </Link>
          <Link
            to="/graph"
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <li className="bg-[#FF204E] text-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-medium text-[#e5e5e7] mb-2">Graph</h3>
              <p className="text-sm text-[#e5e5e7]">
                Visualize graph structures and algorithms.
              </p>
            </li>
          </Link>
        </ul>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto bg-[#00224D] shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-[#e5e5e7] mb-6">About Me</h2>
        <p className="text-lg text-[#e5e5e7] mb-4">
          Hello! I'm <span className="font-semibold">Hamza Riaz</span>, a
          passionate Full-Stack Developer based in Bhawalnagar, Pakistan.
          Currently, I'm pursuing my degree in Computer Science at Comsats
          University Islamabad, Sahiwal. My passion lies in simplifying complex
          concepts through technology and education.
        </p>
        <p className="text-lg text-[#e5e5e7] mb-4">
          This project is designed to help students visualize and better
          understand data structures and algorithms. By presenting concepts in a
          clear and interactive manner, I aim to make learning enjoyable and
          accessible.
        </p>
        <p className="text-lg text-[#e5e5e7] mb-6">
          The source code is open-source and available on{" "}
          <a
            href="https://github.com/hamza9021/DSA-VISULZATION"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF204E] hover:underline"
          >
            GitHub
          </a>
          . Feel free to explore, contribute, or provide feedback to help
          improve this project further.
        </p>
        <div className="text-center">
          <a
            href="https://github.com/hamza9021/DSA-VISULZATION"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF204E] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#A0153E] transition"
          >
            View GitHub Repository
          </a>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#e5e5e7] mb-6">
          Connect with Me
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/hamz.ariaz029?igsh=MWk3OWZsOHVjbmV5OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e5e7] hover:text-[#FF204E] text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/hamza9021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e5e7] hover:text-[#FF204E] text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-riaz-b094a9299/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e5e7] hover:text-[#FF204E] text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
