import shortid from 'shortid'

export const boardTitles = ['KanBan Board Demo']

export const columnNames = ['Requested', 'In Progress', 'Testing', 'Completed']

export const colors = ['#F7CE5B', '#C8E9A0', '#BEB8EB', '#A3D9FF']

export const quotes = () =>
  [
    'Everyone needs a little inspiration.',
    'Be yourself; everyone else is already taken.',
    "What you create doesn't have to be perfect.",
    'So many books, so little time.',
    "Sting like a bee, but do not float like a butterfly. That's rediculous.",
    "You've gotta dance like everybody's watching.",
    'A lot of the time, you just parody yourself.',
    'With great power comes a great electricity bill.',
    "If you tell the truth, you don't have to remember anything.",
    'Imperfection is beauty, madness is genius.',
    "I don't think I know, I only know I think.",
    'Yesterday is history. Tomorrow is a mystery.',
    'Fairy tales are more than true.',
    'Dragons can be beaten.',
  ].sort(() => 0.5 - Math.random())

export default () => {
  const quoteArray = quotes()
  const count = [1, 2, 2, 3, 4, 4].sort(() => 0.5 - Math.random())

  const cardTexts = () =>
    Array(count.pop())
      .fill()
      .map(() => quoteArray.pop())

  const data = {
    boards: {},
    boardOrder: [],
  }

  boardTitles.forEach(title => {
    const boardId = shortid.generate()
    const board = { title, id: boardId, columns: {}, columnOrder: [] }
    data.boards[boardId] = board
    data.boardOrder.push(boardId)

    columnNames.forEach((name, i) => {
      const columnId = shortid.generate()
      const column = { id: columnId, name, color: colors[i], cards: {}, cardOrder: [] }
      data.boards[boardId].columns[columnId] = column
      data.boards[boardId].columnOrder.push(columnId)

      cardTexts().forEach(text => {
        const cardId = shortid.generate()
        const card = { id: cardId, text }
        data.boards[boardId].columns[columnId].cards[cardId] = card
        data.boards[boardId].columns[columnId].cardOrder.push(cardId)
      })
    })
  })

  return data
}
