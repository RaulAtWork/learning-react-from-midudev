import React, { useState } from "react";
import { gameOutcome } from "../app/logic";
import { STATE } from "../app/constants";
import Tile from "./Tile";
import { InitialStateBoard } from "../app/constants";

function TicTacToe() {
  const [tiles, setTiles] = useState(InitialStateBoard);
  const [currentPlayer, setCurrentPlayer] = useState(STATE.cross);
  const [winner, setWinner] = useState(null);

  function resetGame() {
    setTiles(InitialStateBoard);
    setCurrentPlayer(STATE.cross);
    setWinner(null);
  }

  function updateBoard(index) {
    //if winner prevent board interaction
    if (winner) return;

    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    setCurrentPlayer(
      currentPlayer === STATE.cross ? STATE.circle : STATE.cross
    );
    const endGame = gameOutcome(newTiles);
    if (endGame) {
      setWinner(endGame);
    }
  }

  return (
    <div className="flex-center">
      <button className="mb-1" onClick={resetGame}>
        Reset game
      </button>
      <div className="grid col-3">
        {tiles &&
          tiles.map((tile, index) => (
            <Tile key={index} index={index} updateBoard={updateBoard}>
              {tile}
            </Tile>
          ))}
      </div>
      {winner && <p>{`Winner chicken dinner ${winner}`}</p>}
      <h2>Current Player: </h2>
      <p className="flex-center tile-content">
        {currentPlayer === STATE.cross && "X"}
        {currentPlayer === STATE.circle && "O"}
      </p>
    </div>
  );
}

export default TicTacToe;
