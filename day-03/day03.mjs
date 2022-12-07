import { readFileSync } from 'node:fs';

const data = readFileSync('day-03.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n');

// console.log(data);

function letterToValue(letter) {
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function part1() {
  const res = data.map((line) => {
    const a = [...line.slice(0, line.length / 2)];
    const b = [...line.slice(line.length / 2)];
    // console.log({ a, b });
    let setA = new Set(a);
    const intersection = [...new Set(b.filter((x) => setA.has(x)))];
    // console.log({ intersection });
    return letterToValue(intersection[0]);
  });
  console.log(res.reduce((a, b) => a + b, 0));
}

function part2() {
  let sum = 0;
  for (let i = 0; i < data.length; i += 3) {
    const backpacks = [[...data[i]], [...data[i + 1]], [...data[i + 2]]];

    let set = new Set(backpacks[0]);
    let intersection = backpacks[1].filter((x) => set.has(x));

    set = new Set(intersection);
    intersection = backpacks[2].filter((x) => set.has(x));

    const dedup = [...new Set(intersection)];

    sum += letterToValue(dedup[0]);
  }
  console.log(sum);
}

// part1();
part2();
