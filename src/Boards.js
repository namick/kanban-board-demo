import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import RefreshIcon from '@material-ui/icons/Refresh'

import useBoards from './useBoards'
import Board from './Board'

function ResetButton({ children }) {
  const { handleReset } = useBoards()

  return (
    <Button variant="contained" color="secondary" onClick={handleReset} startIcon={<RefreshIcon />}>
      {children}
    </Button>
  )
}

function Boards() {
  const { boardOrder } = useBoards()

  return (
    <Container maxWidth="lg">
      {boardOrder.map(id => (
        <Board boardId={id} key={id} />
      ))}

      <Box marginX={2} paddingY={3}>
        <Divider />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Box margin={2}>
          <ResetButton>Reset</ResetButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Boards
