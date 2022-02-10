/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 * Intervals: [[1,4], [2,5], [7,9]]
 * Output: [[1,5], [7,9]]
 * Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
 * one [1,5].
 */

// Time Complexity: O(N log N)
// Space Complexity: O(N)
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  let merged = [];

  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let k = 1; k < intervals.length; k++) {
    // overlapping
    if (intervals[k].start < end) {
      end = Math.max(end, intervals[k].end);
    } else {
      merged.push(new Interval(start, end));
      start = intervals[k].start;
      end = intervals[k].end;
    }
  }

  merged.push(new Interval(start, end));

  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


// Expected Output
// Merged intervals: [1, 5][7, 9]
// Merged intervals: [2, 4][5, 9]
// Merged intervals: [1, 6]