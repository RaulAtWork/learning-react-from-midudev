import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTile } from "../app/storage";

const STATE = {
  none: "",
  selected: "1",
};

function Tile({ state, index }) {
  const dispatch = useDispatch();
  function handleClick(event) {
    if (state === STATE.none) {
      dispatch(updateTile({ index, state: STATE.selected }));
    }
  }

  return (
    <button className="tile" onClick={handleClick}>
      {state === STATE.selected && "X"}
    </button>
  );
}

function TicTacToe() {
  const tiles = useSelector((state) => state.grid);

  return (
    <div className="grid col-3">
      {tiles &&
        Object.values(tiles).map((tile) => (
          <Tile key={tile.key} state={tile.state} index={tile.key} />
        ))}
    </div>
  );
}

export default TicTacToe;
