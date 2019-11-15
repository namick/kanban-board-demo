import React from 'react'
import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'

const useCard = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { board, column, card } = entitiesFromIds(state, boardId, columnId, cardId)

  const offsetColumn = offset => board.columns[board.columnOrder[column.position + offset]]

  card.moveLeftVisibility = column.isFirst ? 'hidden' : 'visible'

  card.handleMoveLeft = () => {
    dispatch({ type: 'addCard', boardId, columnId: offsetColumn(-1).id, newCard: card })
    dispatch({ type: 'removeCard', boardId, columnId, cardId })
  }

  card.moveRightVisibility = column.isLast ? 'hidden' : 'visible'

  card.handleMoveRight = () => {
    dispatch({ type: 'addCard', boardId, columnId: offsetColumn(1).id, newCard: card })
    dispatch({ type: 'removeCard', boardId, columnId, cardId })
  }

  return card
}

export default useCard
