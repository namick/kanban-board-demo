import React from 'react'

import useBoards from './useBoards'
import Card from './Card'

function Column({ boardId, columnId }) {
  const { column } = useBoards({ boardId, columnId })

  return (
    <div style={{ margin: '25px 0 25px 25px', width: '100%' }}>
      <div
        style={{
          backgroundColor: 'powderblue',
          height: '30px',
          textAlign: 'center',
        }}>
        {column.name}
      </div>
      {column.cardOrder.map(id => (
        <Card boardId={boardId} columnId={columnId} cardId={id} key={id} />
      ))}
      <div>
        <button onClick={column.addCard}>+ Add a Card</button>
        <button onClick={column.remove}>X Remove Column</button>
      </div>
    </div>
  )
}

export default Column
