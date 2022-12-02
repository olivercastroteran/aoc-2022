import { readFileSync } from 'node:fs';

const data = readFileSync('day-02.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n');

// console.log(data);
/* 
X = 1     L: 0
Y = 2     D: 3
Z = 3     W: 6
*/
function part1() {
  let total = 0;
  data.forEach((round) => {
    const game = round.split('');
    switch (game[0]) {
      case 'A':
        if (game[2] === 'X') {
          total += 4;
        } else if (game[2] === 'Y') {
          total += 8;
        } else if (game[2] === 'Z') {
          total += 3;
        }
        break;
      case 'B':
        if (game[2] === 'X') {
          total += 1;
        } else if (game[2] === 'Y') {
          total += 5;
        } else if (game[2] === 'Z') {
          total += 9;
        }
        break;
      case 'C':
        if (game[2] === 'X') {
          total += 7;
        } else if (game[2] === 'Y') {
          total += 2;
        } else if (game[2] === 'Z') {
          total += 6;
        }
        break;
      default:
        break;
    }
  });
  console.log(total);
}
/* 
X: L  1     L: 0
Y: D  2     D: 3
Z: W  3     W: 6
*/
function part2() {
  let total = 0;
  data.forEach((round) => {
    const game = round.split('');
    switch (game[0]) {
      case 'A':
        if (game[2] === 'X') {
          total += 3;
        } else if (game[2] === 'Y') {
          total += 4;
        } else if (game[2] === 'Z') {
          total += 8;
        }
        break;
      case 'B':
        if (game[2] === 'X') {
          total += 1;
        } else if (game[2] === 'Y') {
          total += 5;
        } else if (game[2] === 'Z') {
          total += 9;
        }
        break;
      case 'C':
        if (game[2] === 'X') {
          total += 2;
        } else if (game[2] === 'Y') {
          total += 6;
        } else if (game[2] === 'Z') {
          total += 7;
        }
        break;
      default:
        break;
    }
  });
  console.log(total);
}

// part1();
part2();
