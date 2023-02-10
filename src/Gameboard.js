import React, { useState } from "react";
import Square from "./Square";

export default function GameBoard() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [playerSquare] = useState(Array().fill(null));
  const [computerSquare] = useState(Array().fill(null));
  function handleClick(i) {
    const nextSquare = square.slice();
    nextSquare[i] = "X";
    playerSquare.push(i);
    handleAI(nextSquare);
    checkForWinner(playerSquare, "Player");
  }

  function handleAI(nextSquare) {
    const random = Math.floor(Math.random() * 9);
    if (nextSquare[random] === null) {
      nextSquare[random] = "O";
      computerSquare.push(random);
      checkForWinner(computerSquare, "Computer");
      setSquare(nextSquare);
    } else {
      handleAI(nextSquare);
    }
  }

  function checkForWinner(moves, player) {
    // const winningCombinations = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];
    // for (let i = 0; i < winningCombinations.length; i++) {
    //   for (let j = 0; j < winningCombinations[i].length; ) {
    //     if (winningCombinations[i][j] === moves[j]) {
    //       j++;
    //       if (winningCombinations[i][j] === moves[j]) {
    //         j++;
    //         if (winningCombinations[i][j] === moves[j]) {
    //           alert(`${player} Wins!!`);
    //         }
    //         j = 0;
    //       }
    //       j = 0;
    //     }
    //     j = 0;
    //   }
    // }
  }
  return (
    <div id="gameboard">
      <div className="board-row">
        <Square
          value={square[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={square[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={square[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={square[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={square[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={square[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={square[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={square[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
