import { Container } from './styles'
import { LayoutLeft } from './layout-left'
import { LayoutRight } from './layout-right'

export function Layout() {
  return (
    <Container>
      <LayoutLeft />
      <LayoutRight $primary />
    </Container>
  )
}
