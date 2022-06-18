class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  //   create a dummy head
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    //  append new node after tail
    tail.next = new Node(val);
    //     move pointer forward for next iteration
    tail = tail.next;
  }
  //   this return the linked list, excluding the null value at the beginning
  return dummyHead.next;
};

export default {
  createLinkedList,
};
