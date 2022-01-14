/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1)
const length_of_longest_substring = function(arr, k) {
  let windowStartAt = 0;
  let onesCount = 0;
  let longestSubstrLen = 0;

  for(let windowEndAt = 0; windowEndAt < arr.length; windowEndAt++) {
    const currChar = arr[windowEndAt];

    if (currChar == 1) {
      onesCount++;
    }

    // it is time to shrink window
    if ((windowEndAt - windowStartAt + 1 - onesCount) > k) {
      const startChar = arr[windowStartAt];
      if (startChar == 1) {
        onesCount--;
      }
      windowStartAt++;
    }

    longestSubstrLen = Math.max(windowEndAt - windowStartAt + 1, longestSubstrLen);

  }

  return longestSubstrLen;
};
