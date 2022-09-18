import axios from 'axios'

export interface GetBeersOptions {
    page?: number
    per_page?: number
    abv_gt?: number
    abv_lt?: number
    ibu_gt?: number
    ibu_lt?: number
    ebc_gt?: number
    ebc_lt?: number
    beer_name?: string
    yeast?: string
    brewed_before?: Date
    brewed_after?: Date
    hops?: string
    malt?: string
    food?: string
    ids?: string
}

const getBeers = async (options?: GetBeersOptions) => {
    try {
        const requestUrl = 'http://localhost:8080/getBeers'
        const result = await axios.post(requestUrl, options)
        return result
    } catch (e) {
        console.log(e)
        return {
            data: []
        }
    }
}

export default getBeers
