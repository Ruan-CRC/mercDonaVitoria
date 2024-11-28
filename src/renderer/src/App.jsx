import { Box, ThemeProvider } from '@mui/material'
import { Layout } from './components/Layout'
import { appTheme } from './assets/theme'
import { useEffect, useState } from 'react'

function App() {
  const [pong, setPong] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await window.api.produto.create({
        name: 'Produto 1',
        price: 100
      })
      setPong(response)
    }

    fetchData()
  }, [])

  console.log(pong)

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
          <h3>lalala</h3>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
