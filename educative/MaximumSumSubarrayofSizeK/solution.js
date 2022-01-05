/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * Input: [2, 1, 5, 1, 3, 2], k=3 
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

// Brute force
// Time Complexity: O(N + K) 
// N: total number of elements in the array
// K: the argument 
// Space Complexity: O(1)
// const max_sub_array_of_size_k = function(k, arr) {
//   let currentMax = 0;

//   for(let counter = 0; counter < arr.length - k + 1; counter++) {
//     let sum = 0;
//     for (let innerCounter = counter; innerCounter < counter + k; innerCounter++) {
//       sum += arr[innerCounter];
//     }

//     if(sum > currentMax) {
//       currentMax = sum;
//     }
//   }
//   return currentMax;
// };

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1)
// N: total number of elements in the array
const max_sub_array_of_size_k = function(k, arr) {
  let currentMax = 0;
  let sum = 0;
  let startIndex = 0; // the index of where the window starts

  for(let counter = 0; counter < arr.length; counter++) {
    sum += arr[counter];

    if(counter >= k - 1) {
      if(sum > currentMax) {
        currentMax = sum;
      }
      sum -= arr[startIndex]; // remove the value of the starting element
      startIndex++; // move the sliding window by changing the start index
    }
  }

  return currentMax;
};
