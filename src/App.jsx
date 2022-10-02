import React from 'react';
import './App.css';
import Game from './components/Game/Game';


export default function App() {

  return (
    <div className='app'>
      <header>
        <h1>Tick-Tac-Toe Game</h1>
      </header>
      <main>
        <Game/>          
      </main>
      <footer>
        coded by <a href="https://github.com/VivianTang11">Vivian Tang</a>
      </footer>
    </div>
  );
}

