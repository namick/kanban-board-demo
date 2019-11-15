import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import useBoard from './useBoard'
import Column from './Column'

function Title({ children }) {
  return (
    <Box color="secondary.dark" padding={3} margin={1} fontWeight="fontWeightBold">
      <Typography variant="h2" align="center">
        {children}
      </Typography>
    </Box>
  )
}

function Board({ boardId }) {
  const board = useBoard({ boardId })

  return (
    <Box marginY={4}>
      <Title>{board.title}</Title>

      <Box display="flex">
        {board.columnOrder.map(id => (
          <Column boardId={boardId} columnId={id} key={id} />
        ))}
      </Box>
    </Box>
  )
}

export default Board
