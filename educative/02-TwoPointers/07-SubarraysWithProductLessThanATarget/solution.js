/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
 * Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.
 * Input: [2, 5, 3, 10], target=30 
 * Output: [2], [5], [2, 5], [3], [5, 3], [10]
 * Explanation: There are six contiguous subarrays whose product is less than the target.
 */

// Time complexity: O(N^2)
// Space complexity: O(1) Ignoring the space required for the output list, the algorithm runs in O(N) space which is used for the temp list.
// Space complexity:  O(n^3) // with output list
const find_subarrays = function(arr, target) {
  let result = [];
  for (let k = 0; k < arr.length; k++) {
    search_subarray(arr, target, k, result);
  }
  return result;
};

const search_subarray = function(arr, target, leftPointer, result) {
  let rightPointer = leftPointer;
  let currSubarr = [arr[leftPointer]];
  let currProduct = arr[leftPointer];
  while (rightPointer < arr.length && currProduct < target) {
    result.push([...currSubarr]);
    rightPointer++;
    currSubarr.push(arr[rightPointer]);
    currProduct *= arr[rightPointer];
  }
}