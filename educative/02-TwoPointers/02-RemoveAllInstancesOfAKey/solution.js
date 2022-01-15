/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
 */

// Time complexity: O(N)
// Space complexity: O(1)
const remove_duplicates = function(arr) {
  let nextNonDuplicate = 1;
  let i = 1;

  while (i < arr.length) {
    if (arr[i] !== arr[nextNonDuplicate - 1]) {
      arr[nextNonDuplicate] = arr[i]; // move the next non duplicate element in place
      nextNonDuplicate++;
    }
    i++;
  }
  
  return nextNonDuplicate;
};