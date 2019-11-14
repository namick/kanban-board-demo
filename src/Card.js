import React from 'react'

import useBoards from './useBoards'

function Card({ boardId, columnId, cardId }) {
  const { card } = useBoards({ boardId, columnId, cardId })

  return (
    <div style={{ display: 'flex' }}>
      {card.showMoveLeft && <button onClick={card.moveLeft}>&lt;</button>}
      <div>{card.text}</div>
      <button onClick={card.remove}>X</button>
      {card.showMoveRight && <button onClick={card.moveRight}>&gt;</button>}
    </div>
  )
}

export default Card
