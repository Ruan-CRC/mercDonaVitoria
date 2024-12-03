import { Box, ThemeProvider } from '@mui/material'
import { Layout } from './components/layout/Layout'
import { appThema } from './assets/thema'

function App() {
  return (
    <ThemeProvider theme={appThema}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: (theme) => theme.palette.text.main
        }}
      >
        <Layout></Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
