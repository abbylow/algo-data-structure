/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
const pair_with_targetsum = function(arr, target_sum) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let sum = 0;

  while (pointer1 < pointer2) {
    sum = arr[pointer1] + arr[pointer2];

    if (sum === target_sum) {
      return [pointer1, pointer2];
    }
    else if (sum < target_sum) {
      pointer1++;
    } else {
      pointer2--;
    }
  }

  return [-1, -1];
}
