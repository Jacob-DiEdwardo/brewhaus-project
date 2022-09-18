const axios = require('axios')

const punkApiGetBeers = async (data) => {
    try {
        const requestUrl = 'https://api.punkapi.com/v2/beers'
        const requestData = {
            params: data
        }
        const res = await axios.get(requestUrl, requestData)
        return res
    } catch (e) {
        console.log('Punk API getBeers error occurred!', e)
        return { message: 'error' }
    }
}

const punkApiGetBeerById = async (id) => {
    if (typeof id === 'string') {
        try {
            const requestUrl = `https://api.punkapi.com/v2/beers/${id}`
            const res = await axios.get(requestUrl)
            return res
        } catch (e) {
            console.log('Punk API getBeerById error occurred!', e)
            return { message: 'error' }
        }
    }
}

module.exports = {
    punkApiGetBeers,
    punkApiGetBeerById
}