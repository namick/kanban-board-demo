const entitiesFromIds = (state, boardId, columnId, cardId) => {
  const { boards, boardOrder } = state

  const board = boardId ? boards[boardId] : null
  const column = columnId ? board.columns[columnId] : null
  const card = cardId ? column.cards[cardId] : null

  if (column) {
    column.boardId = boardId
    column.position = board.columnOrder.indexOf(column.id)
    column.isFirst = column.position === 0
    column.isLast = column.position === board.columnOrder.length - 1
  }

  if (card) {
    card.boardId = boardId
    card.columnId = columnId
    card.position = column.cardOrder.indexOf(cardId)
  }

  return { boardOrder, board, column, card }
}

export default entitiesFromIds
