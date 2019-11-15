import React from 'react'

import shortid from 'shortid'
import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'

const useBoards = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { boardOrder } = entitiesFromIds(state, boardId, columnId, cardId)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const handleAddBoard = () => {
    const title = prompt('Add a Board')
    const id = shortid.generate()
    const newBoard = { id, title, columns: {}, columnOrder: [] }
    dispatch({ type: 'addBoard', newBoard })
  }

  return { boardOrder, handleReset, handleAddBoard }
}

export default useBoards
