import axios from 'axios'
import { BeerProps } from '../Beers/types'

type GetBeerDetailsResult = {
    data: BeerProps[]
}

const getBeerDetails = async (id: string): Promise<GetBeerDetailsResult> => {
    try {
        const requestUrl = 'http://localhost:8080/getBeerById'
        const requestData = { id }
        const result = await axios.post(requestUrl, requestData)
        return result
    } catch (e) {
        console.log(e)
        return {
            data: []
        }
    }
}

export default getBeerDetails