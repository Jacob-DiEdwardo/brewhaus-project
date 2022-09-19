import axios from 'axios'

export interface GetBeersOptions {
    page: number
    per_page: number
    abv_gt?: number
    abv_lt?: number
    ibu_gt?: number
    ibu_lt?: number
    ebc_gt?: number
    ebc_lt?: number
    beer_name?: string
    yeast?: string
    brewed_before?: string
    brewed_after?: string
    hops?: string
    malt?: string
    food?: string
    ids?: string
}

const getBeers = async (options?: GetBeersOptions) => {
    try {
        const requestUrl = 'http://localhost:8080/getBeers'
        options = formatSearchOptions(options)
        const result = await axios.post(requestUrl, options)
        return result
    } catch (e) {
        console.log(e)
        return {
            data: [{}]
        }
    }
}

const formatSearchOptions = (options?: GetBeersOptions) => {
    if (!options) {
        return options
    } else {
        Object.keys(options).forEach((option: string) => {
            if (typeof option === 'string' && option.match(/brewed_[before|after]/)) {
                const formattedDate = new Date(options[option])
                const month = formattedDate.getMonth()
                const formattedMonth = month + 1
                const year = formattedDate.getFullYear()
                options[option] = `${formattedMonth < 10 ? ('0' + formattedMonth) : formattedMonth}/${year}`
            } else if (typeof options[option] === 'string') {
                options[option] = options[option].replace(/\s+/g, '_')
            }
        })
        return options
    }
}

export default getBeers
