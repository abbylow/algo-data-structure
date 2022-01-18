/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
 * Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 * Input: [-2, 0, 1, 2], target=2
 * Output: 1
 * Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 */

// Time complexity: O(N^2)
// Space complexity: O(1) if sorting is in place
const triplet_sum_close_to_target = function(arr, target_sum) {
  arr.sort((a,b) => a - b);
  let closetSum = Infinity;
  for(let k = 0; k < arr.length; k++) {
    if (k > 0 && arr[k] === arr[k - 1]) {
      continue;
    }
    closetSum = find_closet_sum(arr, target_sum, k, k + 1, closetSum);
  }
  return closetSum;
};


const find_closet_sum = function(arr, target_sum, currIndex, leftPointer, closetSum) {
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let currSum = arr[currIndex] + arr[leftPointer] + arr[rightPointer];
    let currDiff = Math.abs(target_sum - currSum);
    let closetDiff = Math.abs(target_sum - closetSum);

    if (currDiff < closetDiff) {
      closetSum = currSum;
    } else if (currDiff === closetDiff) {
      closetSum = currSum < closetSum ? currSum : closetSum;  
    }

    if(currSum === target_sum) {
      break;
    } else if (currSum < target_sum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return closetSum;
}