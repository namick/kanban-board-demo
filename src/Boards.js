import React from 'react'

import useBoards from './useBoards'
import Board from './Board'

function Boards() {
  const { boardOrder, handleAddBoard, handleReset } = useBoards()

  return (
    <>
      {boardOrder.map(id => (
        <Board boardId={id} key={id} />
      ))}
      <button onClick={handleAddBoard}>Add a Board</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Boards
