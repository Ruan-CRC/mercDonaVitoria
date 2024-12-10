import { NavLink } from 'react-router'
import { Layout } from '../../components/layout/Layout'
import { LayoutLeft } from '../../components/layout/layout-left'
import { LayoutRight } from '../../components/layout/layout-right'
import { CreateProduto } from './CreateProduto'
import { Container } from './style'
import Button from '@mui/material/Button'

export function Produto() {
  return (
    <Layout>
      <LayoutLeft>
        <Container>
          <NavLink to="caixa">
            <Button type="button" variant="contained" color="primary">
              Caixa
            </Button>
          </NavLink>
        </Container>
      </LayoutLeft>
      <LayoutRight>
        <CreateProduto />
      </LayoutRight>
    </Layout>
  )
}
