import { readFileSync } from 'node:fs';

const data = readFileSync('day-04.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n')
  .map((item) => item.split(','));

// console.log(data);

function isContained(arr) {
  const initElfA = +arr[0].split('-')[0];
  const endElfA = +arr[0].split('-')[1];
  const initElfB = +arr[1].split('-')[0];
  const endElfB = +arr[1].split('-')[1];

  if (
    (initElfB >= initElfA && endElfB <= endElfA) ||
    (initElfA >= initElfB && endElfA <= endElfB)
  ) {
    return 1;
  } else {
    return 0;
  }
}

function isOverlaped(arr) {
  const initElfA = +arr[0].split('-')[0];
  const endElfA = +arr[0].split('-')[1];
  const initElfB = +arr[1].split('-')[0];
  const endElfB = +arr[1].split('-')[1];

  if (endElfA < initElfB || endElfB < initElfA) {
    return 0;
  } else {
    return 1;
  }
}

function part1() {
  const fullyContained = data.map((item) => {
    return isContained(item);
  });
  console.log(fullyContained.reduce((a, b) => a + b, 0));
}

function part2() {
  const overlap = data.map((item) => {
    return isOverlaped(item);
  });
  console.log(overlap.reduce((a, b) => a + b, 0));
}

// part1();
part2();
