import React from 'react'

import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'

const useBoards = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { boardOrder, board, column, card } = entitiesFromIds(state, boardId, columnId, cardId)

  const handleAddBoard = () => {
    const title = prompt('Add a Board')
    const id = `Board${new Date().getTime()}`
    const newBoard = { id, title, columns: {}, columnOrder: [] }
    dispatch({ type: 'addBoard', newBoard })
  }

  if (board) {
    board.addColumn = () => {
      const name = prompt('Add a Column')
      const id = `column${new Date().getTime()}`
      const newColumn = { id, name, cards: {}, cardOrder: [] }
      dispatch({ type: 'addColumn', boardId, newColumn })
    }
  }

  if (column) {
    column.addCard = () => {
      const text = prompt('Add a Card')
      const id = `card${new Date().getTime()}`
      const newCard = { id, text }
      dispatch({ type: 'addCard', boardId, columnId, cardId, newCard })
    }
    column.remove = () => {
      dispatch({ type: 'removeColumn', boardId, columnId })
    }
  }

  if (card) {
    const offsetColumn = offset => board.columns[board.columnOrder[column.position + offset]]
    card.showMoveLeft = !column.isFirst
    card.moveLeft = () => {
      dispatch({ type: 'addCard', boardId, columnId: offsetColumn(-1).id, newCard: card })
      dispatch({ type: 'removeCard', boardId, columnId, cardId })
    }
    card.showMoveRight = !column.isLast
    card.moveRight = () => {
      dispatch({ type: 'addCard', boardId, columnId: offsetColumn(1).id, newCard: card })
      dispatch({ type: 'removeCard', boardId, columnId, cardId })
    }
    card.remove = () => {
      dispatch({ type: 'removeCard', boardId, columnId, cardId })
    }
  }

  return { boardOrder, handleAddBoard, board, column, card }
}

export default useBoards
