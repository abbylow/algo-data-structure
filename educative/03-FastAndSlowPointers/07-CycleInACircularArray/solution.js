/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3jY0GKpPDxr
 * We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:
 * If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
 * If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
 * Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.
 * Input: [1, 2, -1, 2, 2]
 * Output: true
 * Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
 */

// Time Complexity: O(N^2)
// Space Complexity: O(1)
const circular_array_loop_exists = function(arr) {
  for (let k = 0; k < arr.length; k++) {
    let slow = k;
    let fast = k;
    let isForward = arr[k] >= 0;

    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while(true) {
      slow = find_next_index(arr, slow, isForward)
      fast = find_next_index(arr, fast, isForward);

      if (fast !== -1) {
        fast = find_next_index(arr, fast, isForward);
      }

      if (fast === -1 || slow === -1 || fast === slow) {
        break;
      }
    }

    if (slow !== -1 && fast === slow) {
      return true;
    }
  }
  return false;
};

const find_next_index = function (arr, currentIndex, isForward) {
  let direction = arr[currentIndex] >= 0;

  if (direction !== isForward) {
    return -1; // change in direction, return -1
  }

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length; // wrap around for negative numbers
  }

  // one element cycle, return -1
  if (nextIndex === currentIndex) {
    return -1;
  }

  return nextIndex;
}

console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)

// Expected output
// true
// true
// false