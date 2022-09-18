import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BeerDetailsProps } from './types'
import LoadingSpinner from '../LoadingSpinner'

const BeerDetails: React.FunctionComponent = ({
    isLoading,
    beerDetails
}: BeerDetailsProps) => (
    <Container> 
        {
            isLoading ?
            <LoadingSpinner /> :
            <BeerDetailsContainer>
                <BackLinkContainer>
                    <BackLink to="/">Back to All Beers</BackLink>
                </BackLinkContainer>
                <UpperSection>
                    <div>
                        <StyledImage src={ beerDetails.image_url } alt={ beerDetails.name } />
                    </div>
                    <RightSide>
                        <StyledH1>{ beerDetails.name }</StyledH1>
                        { beerDetails.tagline && <p><i>{ beerDetails.tagline }</i></p> }
                        { beerDetails.description && <p>{ beerDetails.description }</p> }
                        { beerDetails.brewers_tips && <p><b>Brewers Tips:</b> { beerDetails.brewers_tips }</p> }
                    </RightSide>
                </UpperSection>
                <div>
                    <h2>Beer Details:</h2>
                    <StyledTable>
                        <tbody>
                            { beerDetails.first_brewed &&
                                <tr>
                                    <BeerAttribute>First Brewed</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.first_brewed }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.abv &&
                                <tr>
                                    <BeerAttribute>ABV</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.abv }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.ibu &&
                                <tr>
                                    <BeerAttribute>IBU</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.ibu }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.target_fg &&
                                <tr>
                                    <BeerAttribute>Target Final Gravity</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.target_fg }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.target_og &&
                                <tr>
                                    <BeerAttribute>Target Original Gravity</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.target_og }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.ebc &&
                                <tr>
                                    <BeerAttribute>Color (EBC)</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.ebc }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.srm &&
                                <tr>
                                    <BeerAttribute>Standard Reference Method (SRM)</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.srm }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.ph &&
                                <tr>
                                    <BeerAttribute>pH</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.ph }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.attenuation_level &&
                                <tr>
                                    <BeerAttribute>Attenuation Level</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.attenuation_level }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.volume && beerDetails.volume.value && beerDetails.volume.unit &&
                                <tr>
                                    <BeerAttribute>Volume</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.volume.value } { beerDetails.volume.unit }</BeerAttributeDetails>
                                </tr>
                            }
                            { beerDetails.boil_volume && beerDetails.boil_volume.value && beerDetails.boil_volume.unit &&
                                <tr>
                                    <BeerAttribute>Boil Volume</BeerAttribute>
                                    <BeerAttributeDetails>{ beerDetails.boil_volume.value } { beerDetails.boil_volume.unit }</BeerAttributeDetails>
                                </tr>
                            }
                        </tbody>
                    </StyledTable>
                    { beerDetails.method && 
                        <div>
                            <StyledH3>Method:</StyledH3>
                            <StyledUL>
                                <li>Mash Temp: { beerDetails.method.mash_temp[0].temp.value } { beerDetails.method.mash_temp[0].temp.unit } { beerDetails.method.mash_temp[0].duration && `for ${ beerDetails.method.mash_temp[0].duration } minutes` }</li>
                                <li>Fermentation: { beerDetails.method.fermentation.temp.value } { beerDetails.method.fermentation.temp.unit }</li>
                                { beerDetails.method.twist && <li>Twist: { beerDetails.method.twist }</li> }
                            </StyledUL>
                        </div>
                    }
                    { beerDetails.ingredients &&
                        <div>
                            <StyledH3>Ingredients:</StyledH3>
                            { beerDetails.ingredients.malt && beerDetails.ingredients.malt.length &&
                                <div>
                                    <StyledH4>Malt</StyledH4>
                                    <StyledTable>
                                        <tbody>
                                            { beerDetails.ingredients.malt.map((malt) => (
                                                <tr key={ malt.name }>
                                                    <BeerAttribute>{ malt.name }</BeerAttribute>
                                                    <BeerAttributeDetails>{ malt.amount.value } { malt.amount.unit }</BeerAttributeDetails>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StyledTable>
                                </div>
                            }
                            { beerDetails.ingredients.hops && beerDetails.ingredients.hops.length && 
                                <div>
                                    <StyledH4>Hops</StyledH4>
                                    <StyledTable>
                                        <thead>
                                            <tr>
                                                <NotLastTH>Name</NotLastTH>
                                                <NotLastTH>Amount</NotLastTH>
                                                <NotLastTH>Add</NotLastTH>
                                                <LastTH>Attribute</LastTH>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { beerDetails.ingredients.hops.map((hop, index) => (
                                                <tr key={ index }>
                                                    <BeerAttribute>{ hop.name }</BeerAttribute>
                                                    <BeerAttribute>{ hop.amount.value } { hop.amount.unit }</BeerAttribute>
                                                    <BeerAttribute>{ hop.add }</BeerAttribute>
                                                    <BeerAttribute>{ hop.attribute }</BeerAttribute>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StyledTable>
                                </div>
                            }
                            { beerDetails.ingredients.yeast && 
                                <div>
                                    <StyledH4>Yeast</StyledH4>
                                    <StyledUL>
                                        <li>{ beerDetails.ingredients.yeast }</li>
                                    </StyledUL>
                                </div>
                            }
                            { beerDetails.food_pairing && beerDetails.food_pairing.length &&
                                <div>
                                    <StyledH3>Food Pairing:</StyledH3>
                                    <StyledUL>
                                        { beerDetails.food_pairing.map((foodPairing) => (
                                            <li key={ foodPairing }>{ foodPairing }</li>
                                        ))}
                                    </StyledUL>
                                </div>
                            }
                            { beerDetails.contributed_by && 
                                <p><b>Contributed by:</b>  { beerDetails.contributed_by }</p>
                            }
                        </div>
                    }
                </div>
            </BeerDetailsContainer>
        }
    </Container>
)

export default BeerDetails

const Container = styled.div`
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`

const BeerDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${ props => props.theme.palette.secondary.main };
`

const BackLinkContainer = styled.div`
    text-align: right;
    padding-bottom: 15px;
`

const BackLink = styled(Link)`
    color: black;
`

const UpperSection = styled.div`
    display: flex;
`

const RightSide = styled.div`
    padding-left: 20px;
`

const StyledImage = styled.img`
    width: 100px;
`

const StyledH1 = styled.h1`
    margin-top: 0;
`

const StyledTable = styled.table`
    width: 100%;
    font-size: 14px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-spacing: unset;
`

const BeerAttribute = styled.td`
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 5px;
`

const BeerAttributeDetails = styled.td`
    border-bottom: 1px solid black;
    padding: 5px;
`

const NotLastTH = styled.th`
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

const LastTH = styled.th`
    border-bottom: 1px solid black;
`

const StyledH3 = styled.h3`
    margin-bottom: 5px;
`

const StyledH4 = styled.h4`
    margin-bottom: 10px;
    margin-top: 10px;
`

const StyledUL = styled.ul`
    font-size: 14px;
    margin-top: 5px;
`
