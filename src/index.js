import React from 'react'
import ReactDOM from 'react-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#351E29' },
    secondary: { main: '#A57F60' },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
