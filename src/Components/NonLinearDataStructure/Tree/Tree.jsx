import React, { useState } from "react";

const TreeNode = ({ value, x, y }) => (
  <div
    style={{
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
      width: "40px",
      height: "40px",
      backgroundColor: "#FF204E",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#e5e5e7",
      fontWeight: "bold",
      fontSize: "16px",
      border: "2px solid #e5e5e7",
      textAlign: "center",
      zIndex: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    }}
  >
    {value}
  </div>
);

const Arrow = ({ fromX, fromY, toX, toY }) => (
  <svg
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      pointerEvents: "none",
      zIndex: 1,
    }}
    width="100%"
    height="100%"
  >
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="5"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#e5e5e7" />
      </marker>
    </defs>
    <line
      x1={fromX}
      y1={fromY}
      x2={toX}
      y2={toY}
      stroke="#e5e5e7"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
  </svg>
);

const BSTVisualization = () => {
  const [treeNodes, setTreeNodes] = useState([]);
  const [arrows, setArrows] = useState([]);
  const [value, setValue] = useState("");
  const [preorder, setPreorder] = useState([]);
  const [inorder, setInorder] = useState([]);
  const [postorder, setPostorder] = useState([]);

  const insertNode = (node, x = 500, y = 100, level = 1) => {
    if (!node) return;
    const offset = 150 / level;

    setTimeout(() => {
      setTreeNodes((prevTreeNodes) => [
        ...prevTreeNodes,
        { value: node.value, x, y },
      ]);

      if (node.left) {
        insertNode(node.left, x - offset, y + 70, level + 1);
        setArrows((prevArrows) => [
          ...prevArrows,
          { fromX: x + 20, fromY: y + 20, toX: x - offset + 20, toY: y + 70 },
        ]);
      }

      if (node.right) {
        insertNode(node.right, x + offset, y + 70, level + 1);
        setArrows((prevArrows) => [
          ...prevArrows,
          { fromX: x + 20, fromY: y + 20, toX: x + offset + 20, toY: y + 70 },
        ]);
      }
    }, 500 * level);
  };

  const insertIntoBST = (root, value) => {
    if (!root) return { value, left: null, right: null };
    if (value < root.value) root.left = insertIntoBST(root.left, value);
    else root.right = insertIntoBST(root.right, value);
    return root;
  };

  const handleInsert = () => {
    const intVal = parseInt(value);
    if (!isNaN(intVal)) {
      setTreeNodes([]);
      setArrows([]);
      const newRoot = insertIntoBST(treeRoot, intVal);
      setTreeRoot(newRoot);
      insertNode(newRoot);
      setValue("");
      setPreorder(traversePreorder(newRoot));
      setInorder(traverseInorder(newRoot));
      setPostorder(traversePostorder(newRoot));
    }
  };

  const traversePreorder = (node) => {
    if (!node) return [];
    return [
      node.value,
      ...traversePreorder(node.left),
      ...traversePreorder(node.right),
    ];
  };

  const traverseInorder = (node) => {
    if (!node) return [];
    return [
      ...traverseInorder(node.left),
      node.value,
      ...traverseInorder(node.right),
    ];
  };

  const traversePostorder = (node) => {
    if (!node) return [];
    return [
      ...traversePostorder(node.left),
      ...traversePostorder(node.right),
      node.value,
    ];
  };

  const [treeRoot, setTreeRoot] = useState(null);

  return (
    <div className="bg-gradient-to-b from-[#00224D] to-[#432E54] min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-[#e5e5e7] my-6">
        Binary Search Tree Visualization
      </h1>
      <h3 className="font-semibold text-center text-[#e5e5e7] px-4 mb-6 max-w-xl mx-auto">
        A binary search tree (BST) is a data structure where each node has at
        most two children, and the left child is smaller than the parent node,
        while the right child is larger. It allows for efficient searching,
        insertion, and deletion of elements.
      </h3>

      <div className="flex flex-col items-center justify-center min-h-[600px]">
        <div className="flex gap-4 mb-8">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a value"
            className="px-4 py-2 text-base border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#FF204E]"
          />
          <button
            onClick={handleInsert}
            className="bg-[#FF204E] hover:bg-[#A0153E] text-[#e5e5e7] font-bold px-6 py-2 rounded-lg transition duration-300"
          >
            Insert
          </button>
        </div>

        <div
          style={{
            position: "relative",
            width: "1000px",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {arrows.map((arrow, index) => (
            <Arrow
              key={index}
              fromX={arrow.fromX}
              fromY={arrow.fromY}
              toX={arrow.toX}
              toY={arrow.toY}
            />
          ))}

          {treeNodes.map((node, index) => (
            <TreeNode key={index} value={node.value} x={node.x} y={node.y} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#00224D] rounded-xl shadow-xl border border-[#e5e5e7]/20">
          <h3 className="text-[#e5e5e7] font-bold mb-2">
            Preorder Traversal: {preorder.join(" -> ")}
          </h3>
          <h3 className="text-[#e5e5e7] font-bold mb-2">
            Inorder Traversal: {inorder.join(" -> ")}
          </h3>
          <h3 className="text-[#e5e5e7] font-bold">
            Postorder Traversal: {postorder.join(" -> ")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BSTVisualization;
