/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl
 * Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.
 * Input: [4, 1, 2, -1, 1, -3], target=1
 * Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
 * Explanation: Both the quadruplets add up to the target.
 */

// Time complexity: O(N^3)
// Space complexity: O(1)
const search_quadruplets = function(arr, target) {
  let quadruplets = [];
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i-1]) {
      continue; // skip if the element is same with the previous one
    }
    for(let j = i + 1; j < arr.length - 2; j++) {
      if (j > 0 && arr[j] === arr[j-1]) {
        continue; // skip if the element is same with the previous one
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
};

const search_pairs = function(arr, targetSum, i, j, quadruplets) {
  let leftPointer = j + 1;
  let rightPointer = arr.length - 1;
  
  while (leftPointer < rightPointer) {
    const currSum = arr[i] + arr[j] + arr[leftPointer] + arr[rightPointer];
    if (currSum === targetSum) {
      quadruplets.push([arr[i], arr[j] , arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
      // move the left pointer to skip the same element and avoid same combination
      while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
        leftPointer++;
      }
      rightPointer--;
      // move the right pointer to skip the same element and avoid same combination
      while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
        rightPointer--;
      }
    } else if (currSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  
}