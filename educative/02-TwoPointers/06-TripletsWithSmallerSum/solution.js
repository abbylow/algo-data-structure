/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
 * Input: [-1, 0, 2, 3], target=3 
 * Output: 2
 * Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
 */

// Time complexity: O(N^2)
// Space complexity: O(1)
const triplet_with_smaller_sum = function(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let k = 0; k < arr.length - 2; k++) {
    count += search_pairs(arr, target - arr[k], k + 1);
  }
  return count;
};

const search_pairs = function(arr, targetSum, leftPointer) {
  let rightPointer = arr.length - 1;
  let count = 0;
  while (leftPointer < rightPointer) {
    let currSum = arr[leftPointer] + arr[rightPointer];
    if (currSum < targetSum) {
      // Since the combination between rightPointer to leftPointer will all cause the smaller sum
      count += rightPointer - leftPointer;
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return count;
};
