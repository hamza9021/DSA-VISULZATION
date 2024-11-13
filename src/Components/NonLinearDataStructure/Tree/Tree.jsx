import React, { useState } from "react";

const TreeNode = ({ value, x, y }) => (
  <div
    style={{
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
      width: "40px",
      height: "40px",
      backgroundColor: "#007bff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      border: "2px solid #fff",
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
        <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
      </marker>
    </defs>
    <line
      x1={fromX}
      y1={fromY}
      x2={toX}
      y2={toY}
      stroke="#333"
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
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Binary Search Tree Visualization
      </h1>
      <h3 className="font-semibold text-center text-gray-700 px-4 mb-6 max-w-xl mx-auto">
        A binary search tree (BST) is a data structure where each node has at
        most two children, and the left child is smaller than the parent node,
        while the right child is larger. It allows for efficient searching,
        insertion, and deletion of elements.
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            fontSize: "16px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />
        <button
          onClick={handleInsert}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Insert
        </button>

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

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#007bff", fontWeight: "bold" }}>
            Preorder Traversal: {preorder.join(" -> ")}
          </h3>
          <h3 style={{ color: "#28a745", fontWeight: "bold" }}>
            Inorder Traversal: {inorder.join(" -> ")}
          </h3>
          <h3 style={{ color: "#dc3545", fontWeight: "bold" }}>
            Postorder Traversal: {postorder.join(" -> ")}
          </h3>
        </div>
      </div>
    </>
  );
};

export default BSTVisualization;
