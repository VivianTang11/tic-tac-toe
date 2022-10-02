import { useState } from 'react';
import './App.css';
import Reset from './components/Reset/Reset';

function App() {

  const [reset, setReset] = useState(true)
  const [winner, setWinner] = useState('Player 1')



  return (
    <div>
      <header>
        Tick-Tac-Toe Game
      </header>
      <main>
        { reset ? <Reset reset={reset} setReset={setReset} winner={winner}/> : ""}      
      </main>
      <footer>
        coded by Vivian
      </footer>
    </div>
  );
}

export default App;
