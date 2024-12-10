import styled from 'styled-components'
import carrinho from '../../../assets/carrinhoNobg.png'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: no-repeat center/80% url(${carrinho});
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #012a4a;
  color: #fff;
  border-radius: 6px;
  padding: 10px;
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #012a4a;
  border-radius: 6px;
  padding: 10px;
`
