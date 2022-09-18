import React from 'react'
import styled from 'styled-components'
import Beers from '../Beers'

const Page: React.FunctionComponent = () => (
  <Wrapper>
    <Container>
      <Beers />
    </Container>
  </Wrapper>
)

export default Page

const Wrapper = styled.div`
  font-family: ${ props => props.theme.fonts.Arial };
  background-color: ${ props => props.theme.palette.primary.main };
`

const Container = styled.div`
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`
