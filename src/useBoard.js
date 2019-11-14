import React from 'react'
import shortid from 'shortid'
import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'

const useBoard = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { board } = entitiesFromIds(state, boardId, columnId, cardId)

  board.addColumn = () => {
    const name = prompt('Add a Column')
    const id = shortid.generate()
    const newColumn = { id, name, cards: {}, cardOrder: [] }
    dispatch({ type: 'addColumn', boardId, newColumn })
  }

  return board
}

export default useBoard
