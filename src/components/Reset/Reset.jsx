import React from 'react'

export default function Reset({reset, setReset, winner}) {

  const handleClick = () => {
    setReset(!reset)
  }

  return (
    <div>
      <p>{winner} is the winner!</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  )
}
