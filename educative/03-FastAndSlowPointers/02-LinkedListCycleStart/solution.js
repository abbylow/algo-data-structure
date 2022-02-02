/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN
 * Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  let slow = head;
  let fast = head;
  let cycleLength = 0;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      cycleLength = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycleLength);
}


function calculate_cycle_length(slow) {
  let current = slow;
  let cycleLength = 0;
  while (true) {
    current = current.next;
    cycleLength++;
    if (current === slow) {
      break;
    }
  }
  return cycleLength;
}


function find_start(head, cycleLength) {
  let fast = head;
  let slow = head;
  // move fast ahead 'cycleLength' nodes
  for(let k = 0; k < cycleLength; k++) {
    fast = fast.next;
  }
  // increment both pointers until they meet at the start of the cycle
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// Eexpected output
// LinkedList cycle start: 3
// LinkedList cycle start: 4
// LinkedList cycle start: 1