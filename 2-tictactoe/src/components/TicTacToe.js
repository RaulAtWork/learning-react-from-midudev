import React, { useState } from "react";
import { gameOutcome, getWinnerMessage } from "../app/logic";
import { STATE } from "../app/constants";
import Tile from "./Tile";
import { InitialStateBoard } from "../app/constants";
import ModalWindow from "./ModalWindow";
import confetti from "canvas-confetti";

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

    //calculate new board
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);

    //change turn
    setCurrentPlayer(
      currentPlayer === STATE.cross ? STATE.circle : STATE.cross
    );

    //check if winner
    const endGame = gameOutcome(newTiles);
    if (endGame) {
      setWinner(endGame);
      confetti();
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
      {winner && (
        <ModalWindow>
          <p className="mb-1">{getWinnerMessage(winner)}</p>
          <button onClick={resetGame}>Reset game</button>
        </ModalWindow>
      )}
      <h2>Current Player: </h2>
      <p className="flex-center tile-content">{currentPlayer}</p>
    </div>
  );
}

export default TicTacToe;
