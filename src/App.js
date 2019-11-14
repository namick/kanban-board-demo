import React from 'react'
import quickStartBoards from './quickStartBoards'

const setLocalBoards = data => localStorage.setItem('KanBanBoards', JSON.stringify(data))
const getLocalBoards = () => {
  let data = JSON.parse(localStorage.getItem('KanBanBoards'))
  if (!data) {
    data = quickStartBoards()
    setLocalBoards(data)
  }
  return data
}

const ReducerContext = React.createContext()

const getEntitiesFromIds = (state, boardId, columnId, cardId) => {
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

function reducer(state, { type, boardId, columnId, cardId, newCard, newColumn, newBoard }) {
  const { board, column, card } = getEntitiesFromIds(state, boardId, columnId, cardId)

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
  setLocalBoards({ ...state })
  return { ...state }
}

const useBoards = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { boardOrder, board, column, card } = getEntitiesFromIds(state, boardId, columnId, cardId)

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

function Card({ boardId, columnId, cardId }) {
  const { card } = useBoards({ boardId, columnId, cardId })

  return (
    <div style={{ display: 'flex' }}>
      {card.showMoveLeft && <button onClick={card.moveLeft}>&lt;</button>}
      <div>{card.text}</div>
      <button onClick={card.remove}>X</button>
      {card.showMoveRight && <button onClick={card.moveRight}>&gt;</button>}
    </div>
  )
}

function Column({ boardId, columnId }) {
  const { column } = useBoards({ boardId, columnId })

  return (
    <div style={{ margin: '25px 0 25px 25px', width: '100%' }}>
      <div
        style={{
          backgroundColor: 'powderblue',
          height: '30px',
          textAlign: 'center',
        }}>
        {column.name}
      </div>
      {column.cardOrder.map(id => (
        <Card boardId={boardId} columnId={columnId} cardId={id} key={id} />
      ))}
      <div>
        <button onClick={column.addCard}>+ Add a Card</button>
        <button onClick={column.remove}>X Remove Column</button>
      </div>
    </div>
  )
}

function Board({ boardId }) {
  const { board } = useBoards({ boardId })

  return (
    <div>
      <div>
        <h2>{board.title}</h2>
      </div>
      <button onClick={board.addColumn}>Add a Column</button>
      <div style={{ display: 'flex', paddingRight: '25px' }}>
        {board.columnOrder.map(id => (
          <Column boardId={boardId} columnId={id} key={id} />
        ))}
      </div>
    </div>
  )
}

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

function App() {
  const [state, dispatch] = React.useReducer(reducer, getLocalBoards())

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <Boards />
    </ReducerContext.Provider>
  )
}

export default App
