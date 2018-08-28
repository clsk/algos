"use strict";
import {addTwoNumbers, ListNode} from '../src/linked-list-add';

describe('Given two non-empty linked lists representing non-negative numbers is reverse order', () => {
  test('(2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
    const l1 = ListNode(2);
    l1.next = ListNode(4);
    l1.next.next = ListNode(3);

    const l2 = ListNode(5);
    l2.next = ListNode(6);
    l2.next.next = ListNode(4);


    const r = addTwoNumbers(l1, l2);
    expect(r).toEqual([7, 0, 8]);
  });

  test('(5) + (5)', () => {
    const l1 = ListNode(5);
    const l2 = ListNode(5);
    const r = addTwoNumbers(l1, l2);
    expect(r).toEqual([0, 1]);
  });
});
