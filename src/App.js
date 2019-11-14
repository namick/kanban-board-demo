import React from 'react'

import { getBoards } from './localStorage'
import reducer from './reducer'
import ReducerContext from './ReducerContext'
import Boards from './Boards'

function App() {
  const [state, dispatch] = React.useReducer(reducer, getBoards())

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <Boards />
    </ReducerContext.Provider>
  )
}

export default App
