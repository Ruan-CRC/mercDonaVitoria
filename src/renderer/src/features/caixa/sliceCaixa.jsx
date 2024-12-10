import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProdutoByCodigo = createAsyncThunk('caixa/getProdutoByCodigo', async (codigo) => {
  const response = await fetch(`http://localhost:3001/produtos/${codigo}`)
  return response.json()
})

export const initialState = {
  caixa: [],
  produtos: []
}

const caixaSlice = createSlice({
  name: 'caixa',
  initialState,
  reducers: {
    addProduto(state, action) {
      const { codigoProd, quantiddProd } = action.payload
      state.caixa.push({ codigoProd, quantiddProd })
    },
    removeProduto(state, action) {
      const { codigoProd } = action.payload
      const index = state.findIndex((produto) => produto.codigoProd === codigoProd)
      state.splice(index, 1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProdutoByCodigo.fulfilled, (state, action) => {
      state.produtos.push(action.payload)
    })
  }
})

export const { addProduto, removeProduto } = caixaSlice.actions

export default caixaSlice
