/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
 * Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
 * Output: [[1,3], [4,7], [8,12]]
 * Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
 */

// Time Complexity: O(N)
// Space Complexity: O(N)
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function(intervals, new_interval) {
  let merged = [];
  let k = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (k < intervals.length && intervals[k].end < new_interval.start) {
    merged.push(intervals[k]);
    k++;
  }

  // merge all intervals that overlap with 'new_interval'
  while (k < intervals.length && intervals[k].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[k].start, new_interval.start);
    new_interval.end = Math.max(intervals[k].end, new_interval.end);
    k++;
  }

  // insert the new_interval
  merged.push(new_interval);


  // add all the remaining intervals to the output
  while (k < intervals.length) {
    merged.push(intervals[k]);
    k++
  }

  return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// Expected Output
// Intervals after inserting the new interval: [1, 3][4, 7][8, 12]
// Intervals after inserting the new interval: [1, 3][4, 12]
// Intervals after inserting the new interval: [1, 4][5, 7]