var invertTree = function (root) {
  if (!root) return root;
  let temp;

  invertTree(root.left);
  invertTree(root.right);
  temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};

// const invertTree = (root) => {
//   if (!root) return null;
//   const left = invertTree(root.left);
//   const right = invertTree(root.right);
//   root.right = left;
//   root.left = right;
//   return root;
// };
