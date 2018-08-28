 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  return {
    val,
    next: null
  };
}

function buildArray(node) {
  let resultArray = [];
  while (node !== null) {
    resultArray.push(node.val);
    node = node.next
  }

  return resultArray;
}

var addTwoNumbers = function(l1, l2) {
  const finalResult = new ListNode(0);
  let currentResult = finalResult;
  let carryOver = false;
  
  while (l1 !== null || l2 !== null || carryOver) {
    let a = l1 !== null ? l1.val : 0;
    let b = l2 !== null ? l2.val : 0;
    let c = carryOver ? 1 : 0;
    currentResult.next = new ListNode(a+b+c);

    if (currentResult.next.val > 9) {
      currentResult.next.val = currentResult.next.val % 10;
      carryOver = true;
    } else {
      carryOver = false;
    }

    l1 = l1 ? l1.next : null; l2 = l2 ? l2.next : null;
    currentResult = currentResult.next;
  }
  
  return buildArray(finalResult.next);
};

module.exports = {addTwoNumbers, ListNode};