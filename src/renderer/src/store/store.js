import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from '../features/produtos/SliceProduto'

export default configureStore({
  reducer: {
    produto: produtoReducer
  }
})
