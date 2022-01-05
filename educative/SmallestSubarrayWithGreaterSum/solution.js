/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 */

// Brute Force
// Time Complexity: O(N^2)
// Space Complexity: O(1)
// const smallest_subarray_with_given_sum = function(s, arr) {
//   let minLen = Infinity;
//   for(let counter = 0; counter < arr.length; counter++) {
//     let accumulatedSum = 0;
//       for(let innerCounter = counter; innerCounter < arr.length; innerCounter++) {
//         accumulatedSum += arr[innerCounter];
//         if (accumulatedSum >= s) {      
//           minLen = Math.min(innerCounter - counter + 1, minLen);
//           break; // stop here since the smallest contiguous array stops here
//         }
//       }
//   }
//   return minLen == Infinity ? 0 : minLen;
// };

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1)
// The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).
const smallest_subarray_with_given_sum = function(s, arr) {
  let minLen = Infinity;
  let accumulatedSum = 0;
  let windowStartAt = 0;

  for(let counter = 0; counter < arr.length; counter++) {
    accumulatedSum += arr[counter];
    
    while (accumulatedSum >= s) {      
      minLen = Math.min(counter - windowStartAt + 1, minLen);
      accumulatedSum -= arr[windowStartAt];
      windowStartAt++;
    }
  }
  
  return minLen == Infinity ? 0 : minLen;
};
