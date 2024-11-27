import { Typography } from '@mui/material'
import { useAppSelector } from '../../hooks'
import { selectProdutos } from './SliceProduto'

export function ListProduto() {
  const produtos = useAppSelector(selectProdutos)

  return (
    <Typography variant="h3" component="h1">
      List Produto
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>{produto.valor}</p>
        </div>
      ))}
    </Typography>
  )
}
