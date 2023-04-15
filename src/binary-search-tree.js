const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const node = new Node(data);
    if (this.tree === null) {
      this.tree = node;
      return;
    }
    insertNode(node, this.tree);

    function insertNode(newNode, node) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(newNode, node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(newNode, node.right);
        }
      }
    }
  }

  has(data) {
    return hasElement(this.tree, data);

    function hasElement(node, data) {
      if (node === null) return false;

      if (node.data === data) return true;

      return data < node.data
        ? hasElement(node.left, data)
        : hasElement(node.right, data);
    }
  }

  find(data) {
    return findElement(this.tree, data);

    function findElement(node, data) {
      if (node === null) return null;

      if (node.data === data) return node;
      if (data < node.data) {
        return findElement(node.left, data);
      } else {
        return findElement(node.right, data);
      }
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (node === null) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data)
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
      } else {
        if (node.left === null && node.right === null) return null
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }

        let min = node.right;
        while(min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = removeNode(node.right, min.data);
        return node;
      }
      return node;
    }
  }

  min() {
    return findMinNode(this.tree);

    function findMinNode(node) {
      if (node === null) return;
      return node.left === null ? node.data : findMinNode(node.left);
    }
  }

  max() {
    return findMaxNode(this.tree);

    function findMaxNode(node) {
      if (node === null) return;
      return node.right === null ? node.data : findMaxNode(node.right);
    }
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);

tree.has(54)
tree.has(8)
tree.has(7)
tree.has(4),

module.exports = {
  BinarySearchTree,
};
