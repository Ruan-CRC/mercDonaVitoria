import { createSlice } from '@reduxjs/toolkit'

export const initialState = []

const caixaSlice = createSlice({
  name: 'caixa',
  initialState,
  reducers: {
    addProduto(state, action) {
      const { codigoProd, quantiddProd } = action.payload
      state.push({ codigoProd, quantiddProd })
    },
    removeProduto(state, action) {
      const { codigoProd } = action.payload
      const index = state.findIndex((produto) => produto.codigoProd === codigoProd)
      state.splice(index, 1)
    }
  }
})

export const { addProduto, removeProduto } = caixaSlice.actions

export default caixaSlice
