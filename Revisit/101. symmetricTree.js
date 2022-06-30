var isSymmetric = function (root) {
  if (!root) return true;
  //function if the given tree is Mirror or not
  return isMirror(root.left, root.right);
};

var isMirror = (node1, node2) => {
  // checks if both nodes are null or not
  if (node1 === null && node2 === null) return true;
  // if one of the node is not present then its not a symmetric
  else if (node1 === null || node2 === null) return false;
  // recursion is used and it checks if both the mirror nodes have same value
  return (
    node1.val === node2.val &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  );
};
