import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activeSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleClickSquare(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      let updatedBoard = [...prevBoard.map((innerBoard) => [...innerBoard])];
      updatedBoard[rowIndex][colIndex] = activeSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleClickSquare(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
