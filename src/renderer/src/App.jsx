import { Box, ThemeProvider, createTheme } from '@mui/material'
import { Layout } from './components/Layout'

const thema = createTheme({})

function App() {
  return (
    <ThemeProvider theme={thema}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#000'
        }}
      >
        <Layout>
          <h1>Hello Word!</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
