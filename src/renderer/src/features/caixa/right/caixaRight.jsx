import { Container, Header, Footer } from './style'
import { Container as ContainerMUI } from '@mui/material'
import { useState, useEffect } from 'react'
import { ProdutoCard } from './produtos'
import { useSelector } from 'react-redux'

export function CaixaRight() {
  const [produtos, setProdutos] = useState([])
  const [total, setTotal] = useState(0)

  const caixaProdutos = useSelector((state) => state.caixa.caixa)
  const apiProdutos = useSelector((state) => state.caixa.produtos)

  useEffect(() => {
    if (apiProdutos.length > 0) {
      const novosProdutos = caixaProdutos
        .map((prodto) => {
          const produto = apiProdutos.find((prod) => prod.codigo === prodto.codigo)
          if (!produto) return null

          const valorTotal = produto.preco * prodto.quantidade

          return {
            item: produto.item,
            codigo: produto.codigo,
            nome: produto.nome,
            quantidade: prodto.quantidade,
            precoUnitario: +produto.preco,
            precoTotal: valorTotal
          }
        })
        .filter(Boolean)
      setProdutos(novosProdutos)
    }
  }, [caixaProdutos, apiProdutos])

  useEffect(() => {
    const novoTotal = produtos.reduce((acc, produto) => acc + produto.precoTotal, 0)
    setTotal(novoTotal)
  }, [produtos])

  return (
    <Container>
      <Header>
        <p>Cliente: Marcos Antonio</p>
        <p>CPF: 123.456.789-00</p>
      </Header>
      <ContainerMUI
        maxWidth="sm"
        sx={{
          marginTop: 2,
          maxHeight: '500px',
          overflowY: 'auto',
          padding: 2
        }}
      >
        {produtos.map((produto, index) => (
          <ProdutoCard key={index} {...produto} />
        ))}
      </ContainerMUI>
      <Footer>
        <p>Total: R$ {total.toFixed(2).replace('.', ',')}</p>
        <p>Quantidade de itens: {produtos.length}</p>
      </Footer>
    </Container>
  )
}
