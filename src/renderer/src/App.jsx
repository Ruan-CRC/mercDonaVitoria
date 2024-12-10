import { Box, ThemeProvider } from '@mui/material'
import { appTheme } from './assets/theme'
import { Route, Routes } from 'react-router'
import { Caixa } from './features/caixa/Caixa'
import { Produto } from './features/produtos/Produto'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: (theme) => theme.palette.text.main
        }}
      >
        <Routes>
          <Route path="caixa" element={<Caixa />} />
          <Route path="/" element={<Produto />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
