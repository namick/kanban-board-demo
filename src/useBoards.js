import React from 'react'

import shortid from 'shortid'
import ReducerContext from './ReducerContext'
import entitiesFromIds from './entitiesFromIds'
import { boardTitles, columnNames, cardTexts } from './initialData'

const useBoards = ({ boardId, columnId, cardId } = {}) => {
  const { state, dispatch } = React.useContext(ReducerContext)
  const { boardOrder } = entitiesFromIds(state, boardId, columnId, cardId)

  const handleReset = () => {
    boardTitles.forEach(title => {
      const boardId = shortid.generate()
      dispatch({ type: 'addBoard', newBoard: { title, id: boardId } })

      columnNames.forEach(name => {
        const columnId = shortid.generate()
        dispatch({ type: 'addColumn', boardId, newColumn: { id: columnId, name } })

        cardTexts().forEach(text => {
          const newCard = { id: shortid.generate(), text }
          dispatch({ type: 'addCard', boardId, columnId, newCard })
        })
      })
    })
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
