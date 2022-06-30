/*

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

*/

const getTargetCopy = (original, cloned, target) => {
      if (cloned === null) return -1
      if (cloned === target.val) return cloned

      const left = getTargetCopy(original.left, cloned.left, target)
      const right = getTargetCopy(original.right, cloned.left, target)
      return left || right
}


const tree = [7,4,3,null,null,6,19]
console.log(getTargetCopy(tree, [...tree], 3))