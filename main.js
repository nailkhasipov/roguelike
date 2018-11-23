const dungeon = [
  ['X', 'X', 'X', 'X', 'X', 'X'],
  ['X', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X']
];

const draw = () => {
  let worldText = '';
  for (let row = 0; row < dungeon.length; row++) {
    for (let column = 0; column < dungeon[row].length; column++) {
      worldText += dungeon[row][column];
    }
    worldText += '\n';
  }
  console.log(worldText);
}

draw();