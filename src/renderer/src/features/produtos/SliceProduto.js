import { createSlice } from '@reduxjs/toolkit'

const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    valor: 10,
    descricao: 'Descrição do produto 1'
  },
  {
    id: 2,
    nome: 'Produto 2',
    valor: 20,
    descricao: 'Descrição do produto 2'
  },
  {
    id: 3,
    nome: 'Produto 3',
    valor: 30,
    descricao: 'Descrição do produto 3'
  }
]

export const initialState = [...produtos]

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    addProduto(state, action) {
      state.produtos.push(action.payload)
    }
  }
})

export const selectProdutos = (state) => state.produto

export default produtoSlice.reducer
