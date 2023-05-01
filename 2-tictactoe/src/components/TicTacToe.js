import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGrid, updateTile } from "../app/storage";
import { gameOutcome } from "../app/logic";

const STATE = {
  none: "",
  cross: "1",
  circle: "2",
};

function Tile({ state, index, newState, postMove }) {
  const dispatch = useDispatch();
  async function handleClick() {
    if (state === STATE.none) {
      await dispatch(updateTile({ index, state: newState }));
      postMove();
    }
  }

  return (
    <button className="tile" onClick={handleClick}>
      <span className="tile-content">
        {state === STATE.cross && "X"}
        {state === STATE.circle && "O"}
      </span>
    </button>
  );
}

function TicTacToe() {
  const tiles = useSelector((state) => state.grid);
  const dispatch = useDispatch();
  const [currentPlayer, setCurrentPlayer] = useState(STATE.cross);

  function resetGame(event) {
    dispatch(resetGrid());
    setCurrentPlayer(STATE.cross);
  }

  useEffect(() => {
    const outcome = gameOutcome(tiles);
    if (outcome) {
      alert(outcome + ". Reset game please");
    }
  }, [tiles]);

  function postMove() {
    setCurrentPlayer(
      currentPlayer === STATE.cross ? STATE.circle : STATE.cross
    );
  }

  return (
    <div className="flex-center">
      <button className="mb-1" onClick={resetGame}>
        Reset game
      </button>
      <div className="grid col-3">
        {tiles &&
          Object.values(tiles).map((tile) => (
            <Tile
              key={tile.key}
              state={tile.state}
              index={tile.key}
              newState={currentPlayer}
              postMove={postMove}
            />
          ))}
      </div>
      <h2>Current Player: </h2>
      <p className="flex-center tile-content">
        {currentPlayer === STATE.cross && "X"}
        {currentPlayer === STATE.circle && "O"}
      </p>
    </div>
  );
}

export default TicTacToe;
