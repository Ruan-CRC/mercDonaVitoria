import { Box, ThemeProvider } from '@mui/material'
import { appTheme } from './assets/theme'
//import { LayoutProvider } from './components/layout/LayoutContext'
//import { Route, Routes } from 'react-router'
//import { CreateProduto } from './features/produtos/CreateProduto'
// import { ListProduto } from './features/produtos/ListProduto'
import { Layout } from './components/layout/Layout'
import { LayoutLeft } from './components/layout/layout-left'
import { LayoutRight } from './components/layout/layout-right'
import { CaixaLeft } from './features/caixa/left/caixaLeft'
import { CaixaRight } from './features/caixa/right/caixaRight'

function App() {
  //  <LayoutProvider>
  //  <Routes>
  //    <Route path="/produtos/create" element={<CreateProduto />} />
  //  </Routes>
  //</LayoutProvider>
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
        <Layout>
          <LayoutLeft>
            <CaixaLeft />
          </LayoutLeft>
          <LayoutRight>
            <CaixaRight />
          </LayoutRight>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
