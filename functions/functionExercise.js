function makeLine(size) {
    let output = '';
    for (i=0; i<size; i++) {
    output += '#';     
    }
    return output;
}
// makeLine(10);

function makeSquare(size) {
    let output = '#'.repeat(size);
    for (i=0; i<size - 1; i++) {
        output += '\n' + '#'.repeat(size);
    }
    return output;
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let output = '';
    for (i=0; i<height; i++) {
        output += '\n' + '#'.repeat(width);
    }
    return output;
}
// console.log(makeRectangle(6,7));

function makeDownwardStairs(height) {
    let output = '#';
    for (i=0; i<height; i++) {
        output += '\n' + '#'.repeat(i);
    }
    return output;
}
// makeDownwardStairs(10)

function makeSpaceLine(numSpaces, numChars) {
    let output = '';
    let spaces = ' '.repeat(numSpaces);
    let chars = '#'.repeat(numChars);
    output = spaces + chars + spaces;
    return output;
}
// makeSpaceLine(6,7);

function makeIsoscelesTriangle(height) {
    let output = '';
    for (let i=0; i<height; i++) {
        output += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return output.slice(0,-1);
}

// console.log(makeIsoscelesTriangle(8));

function makeDiamond(height) {
    output = '';
    flipper = [];
    topHalf = makeIsoscelesTriangle(height);
    flipper = topHalf;
    botHalf = flipper.split('').reverse().join('');
    output = topHalf + '\n' + botHalf;
    return output;
}


console.log(makeDiamond(7));