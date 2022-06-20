// This is a solution that I found already solved. I aim to return and study this in the near future

var addTwoNumbers = function (l1, l2) {
  function ConvertReverseListNodeToArray(listNode) {
    let returnedArray = [];
    if (listNode.next != null) {
      returnedArray = returnedArray.concat(
        ConvertReverseListNodeToArray(listNode.next)
      );
    }
    returnedArray.push(listNode.val);
    return returnedArray;
  }

  const l1Array = ConvertReverseListNodeToArray(l1);
  const l2Array = ConvertReverseListNodeToArray(l2);

  let newTotal = BigInt(l1Array.join('')) + BigInt(l2Array.join(''));

  splitNewTotal = newTotal.toString().split('');

  let returnedListNode = null;

  for (let i = 0; i < splitNewTotal.length; i++) {
    returnedListNode = {
      val: splitNewTotal[i],
      next: returnedListNode,
    };
  }

  return returnedListNode;
};
