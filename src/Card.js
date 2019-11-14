import React from 'react'

import useCard from './useCard'

function Card({ boardId, columnId, cardId }) {
  const card = useCard({ boardId, columnId, cardId })

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
