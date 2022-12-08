import { readFileSync } from 'node:fs';

const data = readFileSync('day-05.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trimEnd();

const [boxes, rawMoves] = data.split('\n\n');

const parsedBoxes = boxes
  .split('\n')
  .map((line) => [...line].filter((val, i) => i % 4 === 1));

const indexes = parsedBoxes.pop();

const stacks = {};
const moves = [];

for (const line of parsedBoxes) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== ' ') {
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}

for (const move of rawMoves.split('\n')) {
  move.split().map((line) => {
    const arr = [];
    line.split(' ').forEach((item, i) => {
      if (i % 2 === 1) {
        arr.push(Number(item));
      }
    });
    moves.push(arr);
  });
}

// console.log({ stacks, moves });
const str = [];

function part1() {
  moves.forEach((move) => {
    for (let i = 1; i <= move[0]; i++) {
      const aux = stacks[move[1]].pop();
      stacks[move[2]].push(aux);
    }
  });
  for (const key in stacks) {
    const aux = stacks[key].pop();
    str.push(aux).toString();
  }
  console.log(str.join(''));
}

function part2() {
  moves.forEach((move) => {
    // console.log(stacks[move[1]].slice(-move[0]));
    stacks[move[2]].push(...stacks[move[1]].slice(-move[0]));
    for (let i = 1; i <= move[0]; i++) {
      stacks[move[1]].pop();
    }
  });
  for (const key in stacks) {
    const aux = stacks[key].pop();
    str.push(aux).toString();
  }
  console.log(str.join(''));
}

// part1();
part2();
