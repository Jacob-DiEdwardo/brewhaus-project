import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BeerDetails from './BeerDetails'
import { withHoc, compose } from '../hoc'
import getBeerDetails from './helpers'

const withBeerDetails = withHoc(() => {
    const [isLoading, setIsLoading] = useState(false)
    const [beerDetails, setBeerDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const runAsync = async () => {
            try {
                if (typeof id === 'string') {
                    setIsLoading(true)
                    const beerDetails = await getBeerDetails(id)
                    setBeerDetails(beerDetails.data[0])
                    setIsLoading(false)
                }
            } catch (e) {
                console.log('Error fetching beer details')
            }
        }
        runAsync()
    }, [])

    return {
        isLoading,
        beerDetails
    }
})

export default compose(withBeerDetails)(BeerDetails)