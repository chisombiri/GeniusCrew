import { useState, useEffect } from "react";
import './App.css';
import Box from '../Components/Box.js';
import { GamePattern } from '../Components/GamePattern';
import EndScreen from "../Components/EndScreen.js";

function App() {
  
  return (
    <div className="App">
      <h3 className="logo">🚀GeniusCrew</h3>
      <h1 className='title'>GeniusCrew Presents: <br/> Tic-Tac-T💛e</h1>
      <p>(Local Multiplayer)</p>
      <div className='board'>
        <div className='row'>
          <Box
            chooseBox={() => { handleClick(0) }}
            val={board[0]}
          />
          <Box
            chooseBox={() => { handleClick(1) }}
            val={board[1]}
          />
          <Box
            chooseBox={() => { handleClick(2) }}
            val={board[2]}
          />
        </div>
        <div className='row'>
          <Box
            chooseBox={() => { handleClick(3) }}
            val={board[3]}
          />
          <Box
            chooseBox={() => { handleClick(4) }}
            val={board[4]}
          />
          <Box
            chooseBox={() => { handleClick(5) }}
            val={board[5]}
          />
        </div>
        <div className='row'>
          <Box
            chooseBox={() => { handleClick(6) }}
            val={board[6]}
          />
          <Box
            chooseBox={() => { handleClick(7) }}
            val={board[7]}
          />
          <Box
            chooseBox={() => { handleClick(8) }}
            val={board[8]}
          />
        </div>
      </div>
      <h3 className="creator">
        Designed and Created by
        <a href="https://www.linkedin.com/in/chisombiri-nlewedim-81570596/" 
        target="_blank" 
        rel="noreferrer">
          Chisombiri
        </a>
      </h3>
      {winned ? <EndScreen restartGame={restartGame} playerWon={result.winner} /> : null}
    </div>
  );
}

export default App;
