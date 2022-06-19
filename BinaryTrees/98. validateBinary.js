/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// * THIS IS A RECURSIVE SOLUTION
// * Depth first traversal through a binary tree to confirm that the values on the left side of
// * the tree are less than the root value. And vice versa for the right side of the tree.

var isValidBST = function (root) {
  if (root === null) return [];

  const left = isValidBST(root.left);
  const right = isValidBST(root.right);

  if (left.val > root.val || right.val < root.val) {
    return false;
  }

  return true;
};
