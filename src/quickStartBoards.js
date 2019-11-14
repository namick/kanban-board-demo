export default function quickStartBoards() {
  let cardId = 0
  const getCards = count => {
    const cardsArray = Array.from({ length: count }, (v, k) => {
      const id = cardId++
      return {
        id: `card${id}`,
        text: `This is example card ${id}`,
      }
    })

    const cards = {}
    cardsArray.forEach(card => (cards[card.id] = card))
    const cardOrder = cardsArray.map(column => column.id)

    return { cards, cardOrder }
  }

  let columnId = 0
  const getColumns = count => {
    const columnsArray = Array.from({ length: count }, (v, k) => {
      const id = columnId++
      const initialData = getCards(3)
      return {
        id: `column${id}`,
        name: `Column ${id}`,
        cards: initialData.cards,
        cardOrder: initialData.cardOrder,
      }
    })

    const columns = {}
    columnsArray.forEach(column => (columns[column.id] = column))
    const columnOrder = columnsArray.map(column => column.id)

    return { columns, columnOrder }
  }
  const data1 = getColumns(3)
  const data2 = getColumns(3)
  const boards = {
    board1: {
      id: 'board1',
      title: 'Example Board One',
      columns: data1.columns,
      columnOrder: data1.columnOrder,
    },
    board2: {
      id: 'board2',
      title: 'Example Board Two',
      columns: data2.columns,
      columnOrder: data2.columnOrder,
    },
  }
  const boardOrder = ['board1', 'board2']

  return { boards, boardOrder }
}
