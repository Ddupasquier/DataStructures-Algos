const addTwoNumbers = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  const sentinel = new ListNode();
  let tail = sentinel;
  let carry = 0;

  // traverse all numbers
  while (l1 || l2) {
    // handle different length: if invalid, value = 0
    const v1 = l1?.val || 0;
    const v2 = l2?.val || 0;
    const sum = v1 + v2 + carry; // add carry over value

    if (carry) carry = 0; // reset carry over
    if (sum >= 10) carry = 1; // carry over to next digit

    tail.next = new ListNode(sum % 10); // add remainder

    // move along LL
    tail = tail.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry) tail.next = new ListNode(1); // case: when carry over is the last digit

  return sentinel.next;
};
