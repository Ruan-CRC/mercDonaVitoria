import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 35px);
  margin: 18px;
  display: flex;
  flex-direction: row;
`

export const Left = styled.div`
  height: 100%;
  width: 45%;
  margin-right: 7px;
  background-color: #2a6f97;
  border-radius: 0.8%;
`

export const Right = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.primary ? '#2a6f97' : '#ddf7ff')};
  border-radius: 0.8%;
`
