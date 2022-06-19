class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  // * ITERATIVE VERSION
  //   const stack = [root]
  //   let result = []
  //   if (root === null) return []
  //   while (stack.length > 0) {
  //     const current = stack.pop()
  //     result.push(current.val)

  //     if (current.right) stack.push(current.right)
  //     if (current.left) stack.push(current.left)
  //   }
  //   return result

  // * RECURSIVE VERSION
  if (root === null) return [];
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);

  return [root.val, ...left, ...right];
};

export default {
  depthFirstValues,
};
