import { Container, Header, Form } from './style'
import { useState } from 'react'
import { Box, Typography, Modal, Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProdutoByCodigo, addProduto, finalizarCompraState } from '../sliceCaixa'

export const CaixaLeft = () => {
  const errorInicialState = {
    codigoProd: false,
    quantiddProd: false
  }

  const [errorForm, setErrorForm] = useState(errorInicialState)
  const [formData, setFormData] = useState({
    codigoProd: '',
    quantiddProd: ''
  })
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()
  // const formStore = useSelector((state) => state.caixa)

  function adicionaProdtAoStore(e) {
    e.preventDefault()
    dispatch(getProdutoByCodigo(formData.codigoProd))
    if (hasError()) {
      setTimeout(() => {
        setErrorForm(errorInicialState)
      }, 3000)
      return
    }

    dispatch(
      addProduto({
        codigo: formData.codigoProd,
        quantidade: formData.quantiddProd
      })
    )
    setFormData({ codigoProd: '', quantiddProd: '' })
  }

  function hasError() {
    if (formData.codigoProd === '') {
      setErrorForm({ ...errorForm, codigoProd: true })
      return true
    }

    if (isNaN(formData.quantiddProd)) {
      setErrorForm({ ...errorForm, quantiddProd: true })
      return true
    }

    return false
  }

  function fecharCompra() {
    dispatch(finalizarCompraState())
    setTimeout(() => {
      setOpenModal(false)
    }, 1500)
    setOpenModal(true)
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
        <Form>
          <TextField
            id="outlined-uncontrolled"
            value={formData.codigoProd}
            label="Código do Produto"
            variant="outlined"
            onChange={(e) => {
              setFormData({ ...formData, codigoProd: e.target.value })
            }}
            error={errorForm.codigoProd}
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
            error={errorForm.quantiddProd}
            required
          />

          <Button onClick={adicionaProdtAoStore} variant="contained" color="primary">
            Adicionar Produto
          </Button>

          <Button onClick={fecharCompra} variant="contained" color="primary">
            Fechar Compra
          </Button>
        </Form>
      </div>
      <footer>Versão Beta</footer>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 150,
            height: 150,
            padding: 2,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Compra Finalizada!
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}
