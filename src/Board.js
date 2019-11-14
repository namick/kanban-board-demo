import React from 'react'

import useBoard from './useBoard'
import Column from './Column'

function Board({ boardId }) {
  const board = useBoard({ boardId })

  return (
    <div>
      <div>
        <h2>{board.title}</h2>
      </div>
      <button onClick={board.addColumn}>Add a Column</button>
      <div style={{ display: 'flex', paddingRight: '25px' }}>
        {board.columnOrder.map(id => (
          <Column boardId={boardId} columnId={id} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Board
