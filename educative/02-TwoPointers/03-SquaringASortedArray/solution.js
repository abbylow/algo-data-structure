/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 */

// Time complexity: O(N)
// Space complexity: O(N)
const make_squares = function(arr) {
  let squares = []

  let firstPointer = 0;
  let secondPointer = arr.length - 1;
  let nextHighestSqIndex = arr.length - 1;

  while (firstPointer <= secondPointer) {
    let firstSq = arr[firstPointer] * arr[firstPointer];
    let secondSq = arr[secondPointer] * arr[secondPointer];

    if (firstSq > secondSq) {
      squares[nextHighestSqIndex] = firstSq;
      firstPointer++;
    } else {
      squares[nextHighestSqIndex] = secondSq;
      secondPointer--;
    }
    nextHighestSqIndex--;
  }

  return squares;
};
