import { Container, Header } from './style'

export const CaixaLeft = () => {
  return (
    <Container>
      <Header>
        <h1>SGC</h1>
        <h3>Sistema de Gerenciamento de Caixa</h3>
      </Header>
      <div>
        <p>Lulita Messias - 8584</p>
        <p>Caixa: 01</p>
      </div>
      <div>
        <form action="">
          <div>
            <input type="text" placeholder="Código do Produto" />
          </div>

          <div>
            <input type="text" placeholder="Quantidade" />
          </div>

          <button>ok</button>
          <button>outra coisa</button>
        </form>
      </div>
      <footer>rodapé</footer>
    </Container>
  )
}
