const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ');

const numbers = input.map(Number);

const sum = numbers[0] + numbers[1];

console.log(sum);
