// Recursive solution for adding up all values in binary tree

const treeSum = (root) => {
	if (root === null) {
		return 0;
	}
  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);
  return root.val + leftSum + rightSum;
}