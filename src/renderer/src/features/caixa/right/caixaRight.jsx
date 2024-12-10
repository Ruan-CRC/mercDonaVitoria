import { Container, Header, Footer } from './style'
import { Container as ContainerMUI } from '@mui/material'

import { ProdutoCard } from './produtos'

export function CaixaRight() {
  const produtos = [
    {
      item: 1,
      codigo: '947285',
      nome: 'Suco Natural Almeida',
      quantidade: 3,
      precoUnitario: 5.75,
      precoTotal: 17.25
    },
    {
      item: 2,
      codigo: '947285',
      nome: 'Suco Natural Almeida',
      quantidade: 3,
      precoUnitario: 5.75,
      precoTotal: 17.25
    },
    {
      item: 3,
      codigo: '947285',
      nome: 'Suco Natural Almeida',
      quantidade: 3,
      precoUnitario: 5.75,
      precoTotal: 17.25
    },
    {
      item: 4,
      codigo: '947285',
      nome: 'Suco Natural Almeida',
      quantidade: 3,
      precoUnitario: 5.75,
      precoTotal: 17.25
    },
    {
      item: 5,
      codigo: '947285',
      nome: 'Suco Natural Almeida',
      quantidade: 3,
      precoUnitario: 5.75,
      precoTotal: 17.25
    }
  ]

  return (
    <Container>
      <Header>
        <p>Cliente: Marcos Antonio</p>
        <p>CPF: 123.456.789-00</p>
      </Header>
      <ContainerMUI maxWidth="sm" sx={{ marginTop: 2 }}>
        {produtos.map((produto, index) => (
          <ProdutoCard key={index} {...produto} />
        ))}
      </ContainerMUI>
      <Footer>
        <p>Total: R$ 0,00</p>
        <p>Quantidade de itens: 0 </p>
      </Footer>
    </Container>
  )
}
