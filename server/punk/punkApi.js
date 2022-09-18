const axios = require('axios')

const punkApi = async (data) => {
    try {
        const requestUrl = 'https://api.punkapi.com/v2/beers'
        const requestData = {
            params: data
        }
        const res = await axios.get(requestUrl, requestData)
        return res
    } catch (e) {
        console.log('punkAPI error occurred', e)
        return { message: 'error' }
    }
}

module.exports = punkApi