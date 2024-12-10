import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from '../features/produtos/SliceProduto'
import caixaReducer from '../features/caixa/sliceCaixa'

const store = configureStore({
  reducer: {
    produto: produtoReducer,
    caixa: caixaReducer.reducer
  }
})

export default store
