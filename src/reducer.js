import entitiesFromIds from './entitiesFromIds'
import { setBoards } from './localStorage'

const reducer = (state, { type, boardId, columnId, cardId, newCard, newColumn, newBoard }) => {
  const { board, column, card } = entitiesFromIds(state, boardId, columnId, cardId)

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

    default:
      throw new Error()
  }

  setBoards({ ...state })

  return { ...state }
}

export default reducer
