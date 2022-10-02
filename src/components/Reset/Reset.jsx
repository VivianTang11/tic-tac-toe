import React from 'react';
import styles from './Reset.module.css'

export default function Reset({winner, setBoard}) {

  const handleClick = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <div>
      <button className={styles.resetBtn} onClick={handleClick}>Reset</button>
    </div>
  )
}
