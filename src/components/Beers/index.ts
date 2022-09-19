import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { withHoc, compose } from '../hoc'
import getBeers from './helpers'
import Beers from './Beers'
import {
    DEFAULT_ITEMS_PER_PAGE,
    ITEMS_PER_PAGE_OPTIONS,
    SEARCH_TYPES,
} from './constants'

const withStyles = withHoc(() => {
    const useStyles = makeStyles({
        beersGrid: {
            width: '100%'
        },
        beersSearchSelect: {
            paddingLeft: '6px',
            backgroundColor: 'white'
        },
        SearchFormControl: {
            flexDirection: 'row'
        }
    })
    const classes = useStyles()
    return {
        classes
    }
})

type GetBeersConfig = {
    page: number
    per_page: number
    [key: string]: string | number
}

const withBeers = withHoc(() => {
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(1)
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false)
    const [searchType, setSearchType] = useState('default')
    const [searchTerm, setSearchTerm] = useState('')
    const itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS
    const searchTypes = SEARCH_TYPES

    const loadBeers = async (resetCurrentPage: boolean = false) => {
        setIsLoading(true)
        const getBeersConfig: GetBeersConfig = {
            page: resetCurrentPage ? 1 : currentPage,
            per_page: itemsPerPage
        }
        if (searchType !== 'default' && searchTerm !== '') {
            getBeersConfig[searchType] = searchTerm
        }
        const result = await getBeers(getBeersConfig)
        setShowLoadMoreButton(result.data.length >= itemsPerPage)
        const updatedBeers = resetCurrentPage ? [].concat(result.data) : beers.concat(result.data)
        setBeers(updatedBeers)
        setCurrentPage(currentPage => resetCurrentPage ? 2 : currentPage + 1)
        setIsLoading(false)
    }

    useEffect(() => {
        loadBeers()
    }, [itemsPerPage])

    const updateItemsPerPage = (e: any) => {
        setItemsPerPage(e.target.value)
        setBeers([])
        setCurrentPage(1)
    }

    const updateSearchType = (e: any) => {
        setSearchType(e.target.value)
        setSearchTerm('')
    }

    const updateSearchTerm = (e: any) => {
        setSearchTerm(e.target.value)
    }

    const loadMoreBeers = () => {
        loadBeers()
    }

    const searchBeers = () => {
        loadBeers(true)
    }

    return {
        beers,
        isLoading,
        showLoadMoreButton,
        itemsPerPage,
        itemsPerPageOptions,
        updateItemsPerPage,
        searchTypes,
        searchType,
        updateSearchType,
        searchTerm,
        updateSearchTerm,
        searchBeers,
        loadMoreBeers,
    }
})

export default compose(
    withStyles,
    withBeers
)(Beers)