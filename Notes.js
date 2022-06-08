/*  - Understand the problem
    - Explore Concrete Examples
    - Break it down
    - Solve/Simplify
    - Look back and/or refactor */

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }

//   setNextNode(node) {
//     if (node instanceof Node || node === null) {
//       this.next = node;
//     } else {
//       throw new Error('Next node must be a member of the Node class.');
//     }
//   }

//   getNextNode() {
//     return this.next;
//   }
// }

// const strawberryNode = new Node('Berry Tasty');
// const vanillaNode = new Node('Vanilla');
// const coconutNode = new Node('Coconuts for Coconut');

// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode);

// let currentNode = vanillaNode;
// while (currentNode) {
//   console.log(currentNode.data);
//   currentNode = currentNode.getNextNode();
// }

// module.exports = Node;

// * THIS METHOD TRAVERSES A LINKED LIST SEARCHING FOR A SPECIFIC VALUE
// * IF THE VALUE IS NOT WINTER ASSIGN PREVNODE AS THE CURRENT NODE 
// * AND MOVE CURRENT NODE TO THE NEXT
// * IF VALUE === WINTER LINK PREV NODE TO NODE AFTER CURRENT NODE
// LLsingle_remove_add/LinkedList.js --LINE 49
function removeWinter() {
  let currentNode = this.head;
  let prevNode = null;
  while (this.next !== null) {
    if (currentNode.data === 'winter') {
      prevNode.next = currentNode.next;
      return;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}
