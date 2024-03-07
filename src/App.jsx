import { useState } from 'react'
import './App.css'
import Player from './Player.jsx'



function App() {

  return (
    <>
    <header>
      <h1>TicTacToe</h1>
    </header>

    <div id='game-container'>
      <ol id='players'>
          <Player name="Player 1" symbol="X"/>
          <Player name="Player 2" symbol="O"/>
      </ol>
    </div>

      
    </>
  )
}

export default App
