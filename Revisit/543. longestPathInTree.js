var diameterOfBinaryTree = function (root) {
      let path = 0;
      function helper(root) {
          if (!root) return -1;
  
          const left = helper(root.left) + 1;
          const right = helper(root.right) + 1;
          path = Math.max(path, left + right);
          return Math.max(left, right);
      }
      helper(root);
      return path;
  };