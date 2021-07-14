/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  if (!root) {
      return []
  }
  if (!root.left && !root.right) {
      return [root.val]
  }
  function traversal(node) {
      const data = []
      if (!node.left && !node.right) {
          return [node.val]
      }
      if (node.left) {
          data.push(...traversal(node.left))
      }
      data.push(node.val)
      if (node.right) {
          data.push(...traversal(node.right))
      }
      return data

  }
  return traversal(root)

};
