import { CaixaLeft } from './left/caixaLeft'
import { CaixaRight } from './right/caixaRight'
import { Layout } from '../../components/layout/Layout'
import { LayoutLeft } from '../../components/layout/layout-left'
import { LayoutRight } from '../../components/layout/layout-right'

export function Caixa() {
  return (
    <Layout>
      <LayoutLeft>
        <CaixaLeft />
      </LayoutLeft>
      <LayoutRight>
        <CaixaRight />
      </LayoutRight>
    </Layout>
  )
}
