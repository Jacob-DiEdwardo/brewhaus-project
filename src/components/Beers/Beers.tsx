import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Select, MenuItem, FormControl } from '@material-ui/core'
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
    classes,
    searchTypes,
    searchType,
    updateSearchType,
    searchTerm,
    updateSearchTerm,
    searchBeers,
}: BeersProps) => (
    <Container>
        <Grid className={ classes.beersGrid }>
            <BeerSearchContainer>
                <FormControl className={ classes.SearchFormControl }>
                    <Select id="select-search-type"
                            className={ classes.beersSearchSelect }
                            value={ searchType }
                            onChange={ updateSearchType }
                            label="Search Type">
                        { Object.keys(searchTypes).map((key) => (
                            <MenuItem key={ key } value={ key }>
                                { searchTypes[key] }
                            </MenuItem>
                        )) }
                    </Select>
                    { searchType !== 'default' &&
                        <StyledInput type="text"
                                     value={ searchTerm }
                                     onChange={ updateSearchTerm } />
                    }
                    <Button color="secondary" onClick={ searchBeers }>Search</Button>
                </FormControl>
            </BeerSearchContainer>
            <ItemsPerPageContainer>
                <StyledLabel id="select-beers-per-page-label">Beers per Page:</StyledLabel>
                <FormControl>
                    <Select labelId="select-beers-per-page-label"
                            id="select-beers-per-page"
                            className={ classes.beersSearchSelect }
                            value={ itemsPerPage }
                            onChange={ updateItemsPerPage }
                            label="Beers Per Page">
                        { itemsPerPageOptions.map((value: number, index: number) => (
                            <MenuItem key={ index } value={ value }>
                                { value }
                            </MenuItem>
                        )) }
                    </Select>
                </FormControl>
            </ItemsPerPageContainer>
            { beers.length ? beers.map((beer) => (
                <Beer key={ beer.id } { ...beer } />
            )) : !isLoading ? <NoBeersFound>No Beers Found!</NoBeersFound> : null }
            {isLoading && <LoadingSpinner />}
            {showLoadMoreButton &&
                <LoadMoreContainer>
                    <Button color="secondary" onClick={ loadMoreBeers }>Load {itemsPerPage} More Beers</Button>
                </LoadMoreContainer>
            }
        </Grid>
    </Container>
)

export default Beers

const Container = styled.div`
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
`

const BeerSearchContainer = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: flex-start;
    align-iterms: center;
`

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
    color: ${ props => props.theme.palette.secondary.main };
`

const StyledInput = styled.input`
    margin-left: 20px;
`

const NoBeersFound = styled.h2`
    color: ${ props => props.theme.palette.secondary.main };
    text-align: center;
`
