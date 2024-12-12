import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProdutoByCodigo = createAsyncThunk('caixa/getProdutoByCodigo', async (codigo) => {
  const response = await window.api.produto.getByCodigo(codigo)

  return response
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
      const { codigo, quantidade } = action.payload
      state.caixa.push({ codigo, quantidade })
    },
    removeProduto(state, action) {
      const { codigoProd } = action.payload
      const index = state.findIndex((produto) => produto.codigoProd === codigoProd)
      state.splice(index, 1)
    },
    // eslint-disable-next-line no-unused-vars
    finalizarCompraState(state, action) {
      state.caixa = []
      window.api.produto.finalizarCompra(state.caixa)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProdutoByCodigo.fulfilled, (state, action) => {
      const produtoToAdd = {
        item: state.produtos.length + 1,
        ...action.payload
      }
      state.produtos.push(produtoToAdd)
    })
  }
})

export const { addProduto, removeProduto, finalizarCompraState } = caixaSlice.actions

export default caixaSlice.reducer
