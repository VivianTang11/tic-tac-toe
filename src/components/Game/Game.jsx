import React, { useState } from 'react';
import Board from '../Board/Board';
import Reset from '../Reset/Reset';
import { calculateWinner } from '../../helper';
import styles from './Game.module.css'


export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [nextPlayer, setnextPlayer] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (i) => {
      const boardCopy = [...board]
      //if game is won or occupied square
      if (winner || boardCopy[i]) return
      //put x or o in the clciked square
      boardCopy[i] = nextPlayer ? 'X' : 'O'
      setBoard(boardCopy)
      setnextPlayer(!nextPlayer)
  }


  return (
    <div className={styles.game}>
      <p>{winner ? `The winner is ${winner}!`: `Player: ${nextPlayer ? 'X' : 'O'}`}</p>
      <Board squares={board} onClick={handleClick}/>
      <p>{winner ? <Reset winner={winner} setBoard={setBoard}/> : ``}</p>
    </div>
  )
}
