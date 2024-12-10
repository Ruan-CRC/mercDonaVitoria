import { Card, CardContent, Typography, Box, Grid } from '@mui/material'

export function ProdutoCard({ item, codigo, nome, quantidade, precoUnitario, precoTotal }) {
  return (
    <Card
      sx={{
        backgroundColor: '#1e88e5',
        color: '#ffffff',
        marginBottom: 2,
        borderRadius: 2
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">Item {item}</Typography>
            <Typography variant="body2">Código: {codigo}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              {nome}
            </Typography>
          </Grid>
          <Grid item>
            <Box textAlign="right">
              <Typography variant="body2">{quantidade} UN</Typography>
              <Typography variant="body2">x {precoUnitario.toFixed(2)}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                R$ {precoTotal.toFixed(2)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
