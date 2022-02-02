/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
 * Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.
 * Solution: We can use the above solution to find the cycle in the LinkedList. Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow pointer again to find the length of the cycle.
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function find_cycle_length(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}


function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// Expected output
// LinkedList cycle length: 4
// LinkedList cycle length: 3