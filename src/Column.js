import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import useColumn from './useColumn'
import Card from './Card'

function Header({ children, color }) {
  return (
    <Box padding={1} borderRadius="borderRadius" style={{ backgroundColor: color }}>
      <Box textAlign="center" fontSize={18} color="secondary">
        {children}
      </Box>
    </Box>
  )
}

function AddButton({ children, column }) {
  return (
    <Button
      color="secondary"
      variant="outlined"
      size="small"
      startIcon={<AddIcon />}
      onClick={column.handleAddCard}
      fullWidth>
      {children}
    </Button>
  )
}

function Column({ boardId, columnId }) {
  const column = useColumn({ boardId, columnId })

  return (
    <Box display="flex" flexDirection="column" width="100%" margin={1}>
      <Box flexGrow={1}>
        <Header color={column.color}>{column.name}</Header>

        {column.cardOrder.map(id => (
          <Card boardId={boardId} columnId={columnId} cardId={id} key={id} />
        ))}
      </Box>
      <Box>
        <AddButton column={column}>Add a Card</AddButton>
      </Box>
    </Box>
  )
}

export default Column
