import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { BeersProps } from './types'
import LoadingSpinner from '../LoadingSpinner'
import Beer from './components/Beer'

const Beers: React.FunctionComponent<BeersProps> = ({
    beers,
    isLoading,
    itemsPerPage,
    showLoadMoreButton,
    loadMoreBeers,
    itemsPerPageOptions,
    updateItemsPerPage,
    classes
}: BeersProps) => (
    <Grid className={ classes.beersGrid }>
        <ItemsPerPageContainer>
            <StyledLabel id="select-beers-per-page-label">Select Number of Beers per Page:</StyledLabel>
            <FormControl>
                <Select labelId="select-beers-per-page-label"
                        id="select-beers-per-page"
                        className={ classes.selectBeersPerPage }
                        value={ itemsPerPage }
                        onChange={ updateItemsPerPage }
                        label="Beers Per Page">
                    {itemsPerPageOptions.map((value: number, index: number) => (
                        <MenuItem key={ index } value={ value }>
                            { value }
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ItemsPerPageContainer>
        {beers.map((beer) => (
            <Beer key={ beer.id } { ...beer } />
        ))}
        {isLoading && <LoadingSpinner />}
        {showLoadMoreButton &&
            <LoadMoreContainer>
                <Button color="secondary" onClick={ loadMoreBeers }>Load {itemsPerPage} More Beers</Button>
            </LoadMoreContainer>
        }
    </Grid>
    
)

export default Beers

const ItemsPerPageContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const LoadMoreContainer = styled.div`
    text-align: center;
    padding-bottom: 20px;
`

const StyledLabel = styled.label`
    padding-right: 10px;
    color: ${ props => props.theme.palette.secondary.main }
`