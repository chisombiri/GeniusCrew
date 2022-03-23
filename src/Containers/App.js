import { useState, useEffect } from "react";
import './App.css';
import Box from '../Components/Box.js';
import { GamePattern } from '../Components/GamePattern';
import EndScreen from "../Components/EndScreen.js";

// Game sound initialize and function
  //game sound functions
  //audio files hosted online

  //Sound for clicking on boxes
  const clickPlay = () => {
    const click = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
    click.play();
  }

  //Sound at end of game
  const gameEnder = () => {
    const gameEnderSound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
    gameEnderSound.play();
  }

  //Sound on restarting game
  const gameRestart = () => {
    const restartSound = new Audio('https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg');
    restartSound.play();
  }

function App() {
  //box index
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  //player turn
  const [player, setPlayer] = useState("💛");

  //result
  const [result, setResult] = useState({ winner: "none", state: "none" });

  //check win
  const [winned, setWin] = useState(false);

  //Functionality to toggle between players
  useEffect(() => {
    if (player === "❌") {
      setPlayer("💛");
    } else {
      setPlayer("❌");
    }

    //Function to check winners
    const checkWin = () => {
      GamePattern.forEach((currPattern) => {
        const firstPlayer = board[currPattern[0]];
        if (firstPlayer === "") return;
        let foundWinningPattern = true;
        currPattern.forEach((id) => {
          if (board[id] !== firstPlayer) {
            foundWinningPattern = false;
          }
        });
  
        if (foundWinningPattern) {
          setResult({ winner: player, state: "Won" });
        }
      });
    };

    checkWin();

    //Function to check for tie
    const checkIfTie = () => {
      let filled = true;
      board.forEach((box) => {
        if (box === "") {
          filled = false;
        }
      });
  
      if (filled) {
        setResult({ winner: "No One", state: "Tie" });
      }
    };

    checkIfTie();

  }, [board]);

  //render winner
  useEffect(() => {
    if (result.state !== "none") {
      setWin(true);
      gameEnder(); 
    }
  }, [result]);


  //handling event of click on box
  const handleClick = (box) => {
    clickPlay();
  
    setBoard(
      board.map((val, id) => {
        if (id === box && val === "") {
          return player;
        }
        return val;
      })
    );
  }

  //restart game after win or tie
  const restartGame = () => {
    gameRestart();
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("💛");
    setWin(false);
  };

  //Created 3 rows of 3 boxes each, inside the board container
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
