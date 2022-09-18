import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { withHoc, compose } from '../hoc'
import getBeers from './helpers'
import Beers from './Beers'
import {
    DEFAULT_ITEMS_PER_PAGE,
    ITEMS_PER_PAGE_OPTIONS
} from './constants'

const withStyles = withHoc(() => {
    const useStyles = makeStyles({
        beersGrid: {
            width: '100%'
        },
        selectBeersPerPage: {
            paddingLeft: '6px',
            backgroundColor: 'white'
        }
    })
    const classes = useStyles()
    return {
        classes
    }
})

const withBeers = withHoc(() => {
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(1)
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false)
    const itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS

    const loadMoreBeers = async () => {
        setIsLoading(true)
        const result = await getBeers({page: currentPage, per_page: itemsPerPage})
        setShowLoadMoreButton(result.data.length >= itemsPerPage)
        const updatedBeers = beers.concat(result.data)
        setBeers(updatedBeers)
        setCurrentPage(currentPage => currentPage + 1)
        setIsLoading(false)
    }

    useEffect(() => {
        loadMoreBeers()
    }, [itemsPerPage])

    const updateItemsPerPage = (e: any) => {
        setItemsPerPage(e.target.value)
        setBeers([])
        setCurrentPage(1)
    }

    return {
        beers,
        isLoading,
        showLoadMoreButton,
        itemsPerPage,
        loadMoreBeers,
        itemsPerPageOptions,
        updateItemsPerPage,
    }
})

export default compose(
    withStyles,
    withBeers
)(Beers)