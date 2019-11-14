import React from 'react'
import shortid from 'shortid'
import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'

const useColumn = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { column } = entitiesFromIds(state, boardId, columnId, cardId)

  column.addCard = () => {
    const text = prompt('Add a Card')
    const id = shortid.generate()
    const newCard = { id, text }
    dispatch({ type: 'addCard', boardId, columnId, cardId, newCard })
  }

  column.remove = () => {
    dispatch({ type: 'removeColumn', boardId, columnId })
  }

  return column
}

export default useColumn
