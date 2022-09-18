import React from 'react'
import styled from 'styled-components'

const Footer: React.FunctionComponent = () => (
    <StyledFooter>
        <StyledP>Copyright 2022 Brewhaus</StyledP>
    </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
    background-color: black;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 15px;
`

const StyledP = styled.p`
    color: ${ props => props.theme.palette.secondary.main };
    margin: 0;
`
