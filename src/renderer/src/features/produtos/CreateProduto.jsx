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

  const errorInicialState = {
    codigo: false,
    nome: false,
    preco: false
  }
  const [produto, setProduto] = useState(produtoEstadoInicial)
  const [errorForm, setErrorForm] = useState(errorInicialState)

  function submitCadastro() {
    if (hasError()) {
      setTimeout(() => {
        setErrorForm(errorInicialState)
      }, 3000)
      return
    }

    window.api.produto.create(produto)

    setProduto(produtoEstadoInicial)
  }

  function hasError() {
    if (produto.codigo === '') {
      setErrorForm({ ...errorForm, codigo: true })
      return true
    }

    if (produto.nome === '') {
      setErrorForm({ ...errorForm, nome: true })
      return true
    }

    if (isNaN(produto.preco)) {
      setErrorForm({ ...errorForm, preco: true })
      return true
    }
    return false
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
        error={errorForm.codigo}
      />
      <TextField
        required
        fullWidth
        id="outlined-basic"
        label="Nome "
        variant="outlined"
        margin="normal"
        value={produto.nome}
        error={errorForm.nome}
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
        error={errorForm.preco}
        onChange={(e) => {
          setProduto({ ...produto, preco: e.target.value })
        }}
        helperText="valor numérico formato 0.00"
      />
      <br />
      <Button onClick={submitCadastro} variant="contained" color="primary">
        Salvar
      </Button>
    </ContainerForm>
  )
}
