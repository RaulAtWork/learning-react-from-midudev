import React from "react";

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
