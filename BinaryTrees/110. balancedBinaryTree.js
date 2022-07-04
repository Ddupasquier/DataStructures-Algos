const isBalanced = (root) => {
  if (!root) return true;

  let output = true;
  const traverse = (root) => {
    if (!root) return 0;

    // traverse left/right and keep height
    const L = traverse(root.left);
    const R = traverse(root.right);

    // check if balanaced tree
    if (Math.abs(L - R) > 1) output = false;

    // choose bigger height, and add by 1 as backtracking
    return Math.max(L, R) + 1;
  };

  traverse(root);
  return output;
};
