import { Box, ThemeProvider } from '@mui/material'
import { Layout } from './components/Layout'
import { appTheme } from './assets/theme'
import { Route, Routes } from 'react-router'
import { CreateProduto } from './features/produtos/CreateProduto'
import { ListProduto } from './features/produtos/ListProduto'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: (theme) => theme.palette.background.main
        }}
      >
        <Layout>
          <Routes>
            <Route path="/produtos/create" element={<CreateProduto />} />
            <Route path="/" element={<ListProduto />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
