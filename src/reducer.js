import entitiesFromIds from './entitiesFromIds'
import { setBoards } from './localStorage'
import initialData from './initialData'

const reducer = (state, action) => {
  const { type, boardId, columnId, cardId, newCard, newColumn, newBoard } = action
  const { board, column, card } = entitiesFromIds(state, boardId, columnId, cardId)

  if (newColumn) {
    newColumn.cards = newColumn.cards ? newColumn.cards : {}
    newColumn.cardOrder = newColumn.cardOrder ? newColumn.cardOrder : []
  }

  if (newBoard) {
    newBoard.columns = newBoard.columns ? newBoard.columns : {}
    newBoard.columnOrder = newBoard.columnOrder ? newBoard.columnOrder : []
  }

  switch (type) {
    case 'addCard':
      state.boards[boardId].columns[columnId].cards[newCard.id] = newCard
      state.boards[boardId].columns[columnId].cardOrder.push(newCard.id)
      break

    case 'removeCard':
      delete board.columns[columnId].cards[cardId]
      board.columns[columnId].cardOrder.splice(card.position, 1)
      break

    case 'addColumn':
      state.boards[boardId].columns[newColumn.id] = newColumn
      state.boards[boardId].columnOrder.push(newColumn.id)
      break

    case 'removeColumn':
      delete board.columns[columnId]
      board.columnOrder.splice(column.position, 1)
      break

    case 'addBoard':
      state.boards[newBoard.id] = newBoard
      state.boardOrder.push(newBoard.id)
      break

    case 'reset':
      state = initialData()
      break

    default:
      throw new Error()
  }

  setBoards({ ...state })

  return { ...state }
}

export default reducer
