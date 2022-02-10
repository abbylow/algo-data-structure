/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW
 * Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
 * Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
 * Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
 * Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
  
  print_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}


const reorder = function(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let headOfSecondHalf = reverse(slow);
  let currentNode = head;

  while (currentNode !== null && headOfSecondHalf !== null) {
    let next = currentNode.next;
    currentNode.next = headOfSecondHalf;
    nextHeadOfSecondHalf = headOfSecondHalf.next;
    headOfSecondHalf.next = nextHeadOfSecondHalf === null ? null : next;
    // move pointers
    currentNode = next;
    headOfSecondHalf = nextHeadOfSecondHalf;
  }

}

const reverse = function(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()

// Expected output
// 2 12 4 10 6 8 