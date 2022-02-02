/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM
 * Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 * Input: 23   
 * Output: true (23 is a happy number)  
 * Explanations: Here are the steps to find out that 23 is a happy number:
 */

/*
  Time Complexity
  The time complexity of the algorithm is difficult to determine. However we know the fact that all unhappy numbers eventually get stuck in the cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4

  This sequence behavior tells us two things: (https://en.wikipedia.org/wiki/Happy_number#Specific_%7F'%22%60UNIQ--postMath-00000027-QINU%60%22'%7F-happy_numbers)

  If the number N is less than or equal to 1000, then we reach the cycle or ‘1’ in at most 1001 steps.
  For N > 1000, suppose the number has ‘M’ digits and the next number is ‘N1’. From the above Wikipedia link, we know that the sum of the squares of the digits of ‘N’ is at most (9^2)M, or 81M (this will happen when all digits of ‘N’ are ‘9’).
  This means:

  N1 < 81M
  As we know M = log(N+1)
  Therefore: N1 < 81∗log(N+1) => N1 = O(logN)
  This concludes that the above algorithm will have a time complexity of O(logN).

  Space Complexity
  The algorithm runs in constant space O(1).
 */


const find_happy_number = function(num) {
  let fast = find_sum(find_sum(num)); // move 2 steps
  let slow = find_sum(num); // move 1 step
  // when two pointers meet => found cycle (even it is happy number, there is a cycle, just keep looping 1 at the end)
  while (slow !== fast) {
    slow = find_sum(slow); // move 1 step
    fast = find_sum(find_sum(fast)); // move 2 steps
  }
  return slow === 1;
};

const find_sum = function(num) {
  let sum = 0;
  while(num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
console.log(`${find_happy_number(1)}`)
// Expected output
// true
// false
// true