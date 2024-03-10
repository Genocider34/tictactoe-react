import Player from "./Player.jsx";
import GameBoard from "./GameBoard.jsx";
import "./index.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("X");
  function handleActiveSquare() {
    setActive((currActive) => (currActive === "X" ? "O" : "X"));
  }

  return (
    <>
      <header>
        <h1>TicTacToe</h1>
      </header>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            activeClass={active === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            activeClass={active === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleActiveSquare} activeSymbol={active} />
      </div>
    </>
  );
}

export default App;
