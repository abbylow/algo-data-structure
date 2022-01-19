/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
 * Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
 * Input: [1, 0, 2, 1, 0]
 * Output: [0, 0, 1, 1, 2]
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
const dutch_flag_sort = function(arr) {
  let lowPointer = 0;
  let highPointer = arr.length - 1;
  let k = 0;
  while (k <= highPointer) {
    if (arr[k] === 0) {
      [arr[k], arr[lowPointer]] = [arr[lowPointer], arr[k]]; // swap
      k++;
      lowPointer++;
    } else if (arr[k] === 1) {
      k++;
    } else {
      [arr[k], arr[highPointer]] = [arr[highPointer], arr[k]]; // swap
      highPointer--; 
      // no need to increase k because have to check if the new arr[k] again
    }
  }
};
