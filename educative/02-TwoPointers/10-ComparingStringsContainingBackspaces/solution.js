/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
 * Input: str1="xy#z", str2="xzz#"
 * Output: true
 * Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
 */

// Time complexity: O(M+N) where ‘M’ and ‘N’ are the lengths of the two input strings respectively.
// Space complexity: O(1)
const backspace_compare = function(str1, str2) {
  let equal = true;
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;
  
  while (p1 >= 0 && p2 >= 0) {
    let moveLeftCount1 = 0;
    while (str1[p1] === '#' && p1 >= 0) {
      moveLeftCount1++;
      p1--;
    }
    p1 -= moveLeftCount1;
    let moveLeftCount2 = 0;
    while (str2[p2] === '#' && p2 >= 0) {
      moveLeftCount2++;
      p2--;
    }
    p2 -= moveLeftCount2;
    if (p1 >= 0 && p2 >= 0 && str1[p1] === str2[p2]) {
      p1--;
      p2--;
    } else {
      return false;
    }
  }
  return equal;
};
