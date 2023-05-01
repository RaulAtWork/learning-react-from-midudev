import React, { useState } from "react";
import { useSelector } from "react-redux";

function Tile({value}) {
  const VALUE = {
    none: 0,
    selected: 1,
  };

  function handleClick(event) {
    if (value === VALUE.none) {
      setValue(VALUE.selected);
    } else {
      setValue(VALUE.none);
    }
  }

  return (
    <button className="tile" onClick={handleClick}>
      {value === VALUE.selected && "X"}
    </button>
  );
}

function TicTacToe() {
  const tiles = useSelector((state) => state.grid);

  return (
    <div className="grid col-3">
      {tiles && Object.values(tiles).map((tile, index) => <Tile value={tile}/>)}
    </div>
  );
}

export default TicTacToe;
