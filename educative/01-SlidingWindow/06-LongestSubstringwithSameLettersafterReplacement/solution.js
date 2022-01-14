/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
 * Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
 */

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1)
// As we expect only the lower case letters in the input string, we can conclude that the space complexity will be O(26) to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1).
const length_of_longest_substring = function(str, k) {
  let longestLength = 0;
  let charMap = {};
  let windowStartAt = 0;
  let maxRepeatLetterCount = 0;

  for(let windowEndAt = 0; windowEndAt < str.length; windowEndAt++) {
    const currChar = str[windowEndAt];
    if (!(currChar in charMap)) {
      charMap[currChar] = 0;
    }
    charMap[currChar]++;

    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charMap[currChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEndAt - windowStartAt + 1 - maxRepeatLetterCount) > k) {
      startChar = str[windowStartAt];
      charMap[startChar]--;
      windowStartAt++;
    }
    
    longestLength = Math.max(windowEndAt - windowStartAt + 1, longestLength);
  }

  return longestLength;
};
