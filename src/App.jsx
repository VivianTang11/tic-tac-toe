import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Reset from './components/Reset/Reset';




export default function App() {

  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('Player 1')
  const [turn, setTurn] = useState('X')

  return (
    <div>
      <header>
        Tick-Tac-Toe Game
      </header>
      <main>
        { reset ? <Reset reset={reset} setReset={setReset} winner={winner}/> : <Board/> }      
      </main>
      <footer>
        coded by Vivian
      </footer>
    </div>
  );
}

