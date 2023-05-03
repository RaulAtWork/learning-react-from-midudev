export function gameOutcome(board) {
  const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function compareThree(v1, v2, v3) {
    return board[v1] && board[v1] === board[v2] && board[v2] === board[v3]
      ? board[v1]
      : null;
  }

  //X wins or O wins

  for (let [i1, i2, i3] of WIN_COMBOS) {
    const result = compareThree(i1, i2, i3);
    if (result) {
      return result;
    }
  }
  //draw
  if (!board.some((item) => item === "")) {
    return "draw";
  }

  return null;
}
