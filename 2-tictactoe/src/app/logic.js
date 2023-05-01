export function gameOutcome(grid) {
  let outcome = null;

  //X wins
  //O wins
  //draw
  console.log(Object.values(grid));
  if (!Object.values(grid).some(({ state }) => state === "")) {
    outcome = "draw";
  }

  return outcome;
}
