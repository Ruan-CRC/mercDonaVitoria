import { TextField, Button } from '@mui/material'
import { ContainerForm } from './style'
import { useState } from 'react'
// import { useAppSelector } from '../../hooks'
// import { selectProdutos } from './SliceProduto'

export function CreateProduto() {
  const produtoEstadoInicial = {
    codigo: '',
    nome: '',
    preco: 0
  }
  const [produto, setProduto] = useState(produtoEstadoInicial)

  function submitCadastro() {
    window.api.produto.create(produto)

    setProduto(produtoEstadoInicial)
  }

  return (
    <ContainerForm>
      <TextField
        required
        fullWidth
        id="outlined-basic"
        label="Código "
        variant="outlined"
        margin="normal"
        value={produto.codigo}
        onChange={(e) => {
          setProduto({ ...produto, codigo: e.target.value })
        }}
      />
      <TextField
        required
        fullWidth
        id="outlined-basic"
        label="Nome "
        variant="outlined"
        margin="normal"
        value={produto.nome}
        onChange={(e) => {
          setProduto({ ...produto, nome: e.target.value })
        }}
      />
      <TextField
        required
        fullWidth
        id="outlined-basic"
        label="Preço"
        variant="outlined"
        margin="normal"
        value={produto.preco}
        onChange={(e) => {
          setProduto({ ...produto, preco: e.target.value })
        }}
        helperText="valor numérico"
      />
      <br />
      <Button onClick={submitCadastro} variant="contained" color="primary">
        Salvar
      </Button>
    </ContainerForm>
  )
}
