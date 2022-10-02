import React from 'react';
import Square from '../Square/Square';
import styles from './Board.module.css'

export default function Board({squares, onClick}) {

  return (
    <div className={styles.board}>
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => onClick(i)} />
			))}
    </div>
  )
}
