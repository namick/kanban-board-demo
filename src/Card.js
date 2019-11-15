import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import useCard from './useCard'

function ButtonLeft({ card }) {
  return (
    <Box alignSelf="center" visibility={card.moveLeftVisibility}>
      <IconButton size="small" color="secondary" onClick={card.handleMoveLeft}>
        <ArrowLeftIcon />
      </IconButton>
    </Box>
  )
}

function ButtonRight({ card }) {
  return (
    <Box alignSelf="center" visibility={card.moveRightVisibility}>
      <IconButton size="small" color="secondary" onClick={card.handleMoveRight}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  )
}

function Wrapper({ children }) {
  return (
    <Box display="flex" paddingX="2px" marginY={2} minHeight="5rem" clone>
      <Paper>{children}</Paper>
    </Box>
  )
}

function Card({ boardId, columnId, cardId }) {
  const card = useCard({ boardId, columnId, cardId })

  return (
    <Wrapper>
      <ButtonLeft card={card} />

      <Box alignSelf="center" flexGrow={1} padding={1} color="primary.main">
        {card.text}
      </Box>

      <ButtonRight card={card} />
    </Wrapper>
  )
}

export default Card
