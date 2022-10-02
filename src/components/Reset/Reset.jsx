import React from 'react'

export default function Reset({winner, setBoard}) {

  const handleClick = () => {
    setBoard(Array(9).fill(null))
  }

  return (
    <div>
      <p>Winner is {winner}</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  )
}
