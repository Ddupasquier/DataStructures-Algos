// DEPTH FIRST AND BREADTH FIRST SYNTAX IS ALMOST IDENTICAL
// * THE REAL DIFFERENT IS THE BREADTH FIRST WORKS BEST WITH A QUEUE (.SHIFT())
// ! AND DEPTH FIRST WORKS BEST WITH A STACK (.POP())

/*

Breadth first also doesn't work well with recursion due to the nature of a queue
Utilizing recursion in a depth first traversal is much more efficient

*/ 

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return values;
};

export default {
  breadthFirstValues,
};
