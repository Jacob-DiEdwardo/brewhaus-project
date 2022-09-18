import React from 'react'
import styled from 'styled-components'
import { BeerProps } from '../../types'

const Beer: React.FunctionComponent<BeerProps> = ({
    image_url,
    name,
    tagline,
    description
}: BeerProps) => (
    <Tile>
        <div>
            <StyledImg src={image_url} alt={name} />
        </div>
        <RightSide>
            <StyledH2>{name}</StyledH2>
            <p>{tagline}</p>
            <p>{description}</p>
        </RightSide>
    </Tile>
)

export default Beer

const Tile = styled.div`
    display: flex;
    background-color: ${ props => props.theme.palette.secondary.main };
    padding: 20px;
    margin-bottom: 20px;
`

const StyledImg = styled.img`
    width: 100px;
`

const RightSide = styled.div`
    padding-left: 20px;
`

const StyledH2 = styled.h2`
    color: ${ props => props.theme.palette.alternative.main }
    font-weight: bold;
    font-size: 26px;
    text-decoration: underline;
    margin-top: 0;
`