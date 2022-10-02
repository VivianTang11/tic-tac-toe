import React, { useEffect } from 'react';
import Square from '../Square/Square';
import styles from './Board.module.css'

export default function Board() {

  return (
    <div className={styles.board}>
      <Square value="1" onClick={() => onClick("dummy value")} />
	    <Square value="2" onClick={() => onClick("dummy value")} />
	    <Square value="3" onClick={() => onClick("dummy value")} />
	    <Square value="4" onClick={() => onClick("dummy value")} />
	    <Square value="5" onClick={() => onClick("dummy value")} />
	    <Square value="6" onClick={() => onClick("dummy value")} />
	    <Square value="7" onClick={() => onClick("dummy value")} />
	    <Square value="8" onClick={() => onClick("dummy value")} />
	    <Square value="9" onClick={() => onClick("dummy value")} />
    </div>
  )
}
