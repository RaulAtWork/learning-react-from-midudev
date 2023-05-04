export const STATE = {
  cross: "X",
  circle: "O",
};

export const InitialStateBoard = Array(9).fill("");

export const WINNER = {
  cross: STATE.cross,
  circle: STATE.circle,
  draw: "draw",
};
