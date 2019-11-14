import React from 'react'

import useBoards from './useBoards'
import Board from './Board'

function Boards() {
  const { boardOrder, handleAddBoard } = useBoards()

  return (
    <>
      {boardOrder.map(id => (
        <Board boardId={id} key={id} />
      ))}
      <button onClick={handleAddBoard}>Add a Board</button>
    </>
  )
}

export default Boards
