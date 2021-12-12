/* Designer PDF Viewer
 * Question: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    // area = width * height
    // width = word.length * 1mm;
    // height = maxCharHeight (the height is in the range [1, 7])
    
    // brute force: loop the word, find the maxHeight => return maxHeight * word.length
    // Time complexity: O(n) n: the length of word
    // Optimization: if we found the height of any character === 7, can stop the finding since it will gonna be the max height no matter how high the rest of the character is
    
    let maxHeight = 0;
    for(let k = 0; k < word.length; k++) {
        const currentChar = word[k];
        const charIndexInH = word.charCodeAt(k) - 97;
        
        const heightOfChar= h[charIndexInH];
        
        if(heightOfChar > maxHeight) {
            maxHeight = heightOfChar;
        }
        if(heightOfChar === 7) {
            break;
        }
    }
    
    return maxHeight * word.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
