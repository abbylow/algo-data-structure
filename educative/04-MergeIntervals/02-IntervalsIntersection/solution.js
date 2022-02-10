/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
 * Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
 * Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
 * Output: [2, 3], [5, 6], [7, 7]
 * Explanation: The output list contains the common intervals between the two lists.
 */

// Time Complexity: O(N+ M) where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.
// Space Complexity: O(1) // Ignoring the space needed for the result list, the algorithm runs in constant space O(1)
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = function(intervals_a, intervals_b) {
  let result = [];

  let aIndex = 0;
  let bIndex = 0;

  while (aIndex < intervals_a.length && bIndex < intervals_b.length) {
    let currentA = intervals_a[aIndex];
    let currentB = intervals_b[bIndex];

    // check which overlay which
    let aOverlaysB = currentA.start >= currentB.start && currentA.start <= currentB.end;
    let bOverlaysA = currentB.start >= currentA.start && currentB.start <= currentA.end;

    if (aOverlaysB || bOverlaysA) {
      result.push(new Interval(
        Math.max(currentA.start, currentB.start),
        Math.min(currentA.end, currentB.end),
      ));
    }

    // move the index to next if the interval is finishing first
    if (currentA.end < currentB.end) {
      aIndex++;
    } else {
      bIndex++;
    }
  }
  
  return result;
};

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
// Expected Output:
// Intervals Intersection: [2, 3][5, 6][7, 7]
// Intervals Intersection: [5, 7][9, 10]