import React from "react";
import { STATE } from "../app/constants";

function Tile({ children, index, updateBoard }) {
  function handleClick() {
    updateBoard(index);
  }

  return (
    <button className="tile" onClick={handleClick}>
      <span className="tile-content">{children}</span>
    </button>
  );
}

export default Tile;
