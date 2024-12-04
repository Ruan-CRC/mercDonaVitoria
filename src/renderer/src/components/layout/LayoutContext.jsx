import { createContext, useContext, useState } from 'react'
import { LayoutLeft } from './layout-left'
import { LayoutRight } from './layout-right'
import { Container } from './styles'

const LayoutContext = createContext(undefined)

export function LayoutProvider({ children }) {
  const [leftContent, setLeftContent] = useState(null)
  const [rightContent, setRightContent] = useState(null)

  return (
    <LayoutContext.Provider value={{ setLeftContent, setRightContent }}>
      <Container>
        <LayoutLeft>{leftContent}</LayoutLeft>
        <LayoutRight $primary>{rightContent}</LayoutRight>
        {children}
      </Container>
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}
