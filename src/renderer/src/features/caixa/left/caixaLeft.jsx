import { Container, Header } from './style'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addProduto } from '../sliceCaixa'

export const CaixaLeft = () => {
  const [formData, setFormData] = useState({
    codigoProd: '',
    quantiddProd: ''
  })

  const dispatch = useDispatch()
  const formStore = useSelector((state) => state.caixa)

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit', formStore)
  }

  function adicionaProdtAoStore(e) {
    e.preventDefault()
    dispatch(addProduto(formData))
    setFormData({ codigoProd: '', quantiddProd: '' })
  }

  return (
    <Container>
      <Header>
        <h1>SGC</h1>
        <h3>Sistema de Gerenciamento de Caixa</h3>
      </Header>
      <div>
        <p>Funcionário 02 - 8584</p>
        <p>Caixa: 01</p>
      </div>
      <div>
        <form>
          <TextField
            id="outlined-uncontrolled"
            value={formData.codigoProd}
            label="Código do Produto"
            variant="outlined"
            onChange={(e) => {
              setFormData({ ...formData, codigoProd: e.target.value })
            }}
            required
          />

          <TextField
            id="outlined-uncontrolled"
            value={formData.quantiddProd}
            label="Quantidade"
            variant="outlined"
            onChange={(e) => {
              setFormData({ ...formData, quantiddProd: e.target.value })
            }}
            required
          />

          <Button onClick={adicionaProdtAoStore} type="submit" variant="contained" color="primary">
            Adicionar Produto
          </Button>
          <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
            Fechar Compra
          </Button>
        </form>
      </div>
      <footer>Versão Beta</footer>
    </Container>
  )
}
