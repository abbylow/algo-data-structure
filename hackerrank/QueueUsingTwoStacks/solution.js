// Question: https://www.hackerrank.com/challenges/balanced-brackets/problem
// Solution: https://www.youtube.com/watch?v=7ArHz8jPglw&ab_channel=HackerRank

function processData(input) {
  //Enter your code here
  const queries = input.split('\n');

  const queue = [];

  for(let q = 0; q < queries.length; q++) {
      const query = queries[q];
      if (query.includes(" ")) {
          const commands = query.split(" ");
          if (commands.length == 2 && commands[0] == '1') {
              queue.push(commands[1]);
          }
      }
      if (query == '2') {
          const dequeueItem = queue.shift();
      }
      if (query == '3') {
          console.log(queue[0]);
      }
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
