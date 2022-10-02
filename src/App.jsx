import { useState } from 'react';
import './App.css';
import Game from './components/Game/Game';
import Reset from './components/Reset/Reset';




export default function App() {

  return (
    <div>
      <header>
        Tick-Tac-Toe Game
      </header>
      <main>
        <Game/>          
      </main>
      <footer>
        coded by Vivian
      </footer>
    </div>
  );
}

