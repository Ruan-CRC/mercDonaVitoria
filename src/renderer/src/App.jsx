import { Box, ThemeProvider } from '@mui/material'
import { Typography } from '@mui/material'
import { Layout } from './components/Layout'
import { appThema } from './assets/thema'

function App() {
  return (
    <ThemeProvider theme={appThema}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundColor: (theme) => theme.palette.primary.main
        }}
      >
        <Layout>
          <Typography variant="h2" component="h2">
            Hello WOrd!!!
          </Typography>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
