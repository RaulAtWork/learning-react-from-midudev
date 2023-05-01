export function gameOutcome(grid) {
  const boardArray = Object.values(grid);

  function compareThree(v1, v2, v3) {
    return grid[v1].state === grid[v2].state &&
      grid[v2].state === grid[v3].state
      ? grid[v1].state
      : null;
  }

  //X wins or O wins
  /*
    check rows 123 456 789
    check columns 147 258 369
    check diagonals 159 357
  */
  for (let i = 1; i <= 9; i = i + 3) {
    //check row
    const rowCheck = compareThree(i, i + 1, i + 2);
    if (rowCheck) {
      return "player " + rowCheck + " wins";
    }
  }
  for (let i = 1; i <= 3; i++) {
    //check column
    const columnCheck = compareThree(i, i + 3, i + 6);
    if (columnCheck) {
      return "player " + columnCheck + " wins";
    }
  }
  //check diagonals
  const diagonal1Check = compareThree(1, 5, 9);
  if (diagonal1Check) return "player " + diagonal1Check + " wins";
  const diagonal2Check = compareThree(3, 5, 7);
  if (diagonal2Check) return "player " + diagonal2Check + " wins";

  //draw
  if (!boardArray.some(({ state }) => state === "")) {
    return "draw";
  }

  return null;
}
