
//Logic array for game winning patterns
//Each index represents the position of the box on the board
//E.g: 0, 1, 2 means the first 3 boxes accross, which is a win in tic-tac-toe 
export const GamePattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];