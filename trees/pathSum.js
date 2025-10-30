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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

  function dfs(node, currSum = 0) {
      if (!node) {
          return false;
      }
      currSum += node.val;
      if (!node.left && !node.right) {
          return targetSum === currSum;
      }
      return dfs(node.left, currSum) || dfs(node.right, currSum);
  }
  return dfs(root)
};

// Approach 2
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

  if (!root) return false;
  targetSum -= root.val;
  if (!root.left && !root.right) {
       if (targetSum === 0) return true;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};