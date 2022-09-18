import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import Beers from '../Beers'
import BeerDetails from '../BeerDetails'

const Page: React.FunctionComponent = () => (
  <Wrapper>
    <Header />
    <Routes>
      <Route path={'/'} element={ <Beers /> } />
      <Route path={'/beer-details/:id'} element={ <BeerDetails /> } />
    </Routes>
    <Footer />
  </Wrapper>
)

export default Page

const Wrapper = styled.div`
  font-family: ${ props => props.theme.fonts.Arial };
  background-color: ${ props => props.theme.palette.primary.main };
`
