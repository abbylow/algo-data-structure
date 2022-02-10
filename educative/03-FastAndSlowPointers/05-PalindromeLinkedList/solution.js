/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
 * Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
 * Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
 * Output: true
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const is_palindromic_linked_list= function(head) {
  let slow = head;
  let fast = head;
  // find the middle of the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow is the middle now, reverse the second half
  reversedSecondHalf = reverse(slow);
  // record the head of reversed second half
  headOfReversedSecondHalf = reversedSecondHalf;

  // compare first half and second half 
  while (head !== null && reversedSecondHalf !== null) {
    if (head.value !== reversedSecondHalf.value) {
      break;
    }
    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }
  // revert the reverse of the second half back
  reverse(headOfReversedSecondHalf);

  if (head === null || reversedSecondHalf === null) {
    return true;
  }

  return false;
  
};

const reverse= function(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

// Expected output
// Is palindrome: true
// Is palindrome: false