import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 4,
          backgroundColor: '#fff'
        }}
      >
        {children}
      </Container>
    </Box>
  )
}
