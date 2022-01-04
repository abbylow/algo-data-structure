/* Valid Palindrome
 * Question: https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */

 var regEx = /^[0-9a-zA-Z]+$/;
       
 var isPalindrome = function(s) {
  let startIndex = 0;
  let endIndex = s.length - 1;
  
  while (startIndex < endIndex) {
    if (!regEx.test(s[startIndex])){
      startIndex++;
    } else if (!regEx.test(s[endIndex])){
      endIndex--;
    } else {
      if (s[startIndex].toLowerCase() !== s[endIndex].toLowerCase()) {
        return false;
      } else {
        startIndex++;
        endIndex--;
      }
    }
  }
  return true;
 };