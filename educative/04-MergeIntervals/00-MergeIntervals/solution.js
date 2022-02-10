/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 * Intervals: [[1,4], [2,5], [7,9]]
 * Output: [[1,5], [7,9]]
 * Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
 * one [1,5].
 */

// Time Complexity: once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.
// Space Complexity: O(1)
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  let slow = head;
  let fast = head;
  while(fast !== null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
