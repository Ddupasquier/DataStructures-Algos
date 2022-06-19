// * Morris Solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function inorderTraversal(root) {
  let current = root;
  let result = [];

  // while current is not null, continue loop
  while (current) {
    // guide starts out favoring the left path from current
    let guide = current.left;

    // if current's left path is not null'
    if (current.left) {
      // if a right path exists AND if current is not already at that location, move guide right
      while (guide.right && guide.right !== current) {
        guide = guide.right;
      }

      // "CREATING THE BRIDGE"
      // if guide cannot travel to the right any longer, create reference to current's location
      if (guide.right === null) {
        guide.right = current;
        current = current.left;
      } else {
        // "DESTROYING THE BRIDGE"
        // if guide is at bridge point remove the reference and record current's location
        guide.right = null;
        result.push(current.val);
        // move right
        current = current.right;
      }
    } else {
      // if current's left is null, record current's location
      result.push(current.val);
      // move right
      current = current.right;
    }
  }
  return result;
}
