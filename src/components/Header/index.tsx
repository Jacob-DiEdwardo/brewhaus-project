import React from 'react'
import styled from 'styled-components'
import beerMugImage from '../../assets/beer-mug.png'

const Header: React.FunctionComponent = () => (
    <StyledHeader>
        <div>
            <StyledImg src={ beerMugImage } alt="Beer Mug Logo" />
        </div>
        <StyledH1>Welcome to Brewhaus!</StyledH1>
    </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const StyledH1 = styled.h1`
    color: ${ props => props.theme.palette.secondary.main };
    margin: 0;
    padding-left: 20px;
`

const StyledImg = styled.img`
    width: 40px;
`
