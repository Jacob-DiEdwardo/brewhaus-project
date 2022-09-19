import { ChangeEvent, ReactNode, ChangeEventHandler } from 'react'

interface ValueUnit {
    value: number
    unit: string
}

interface Method {
    mash_temp: MashTemp[]
    fermentation: Fermentation,
    twist: string | null
}

interface MashTemp {
    temp: ValueUnit
    duration: number
}

interface Fermentation {
    temp: ValueUnit
}

interface Ingredients {
    malt: Malt[]
    hops: Hops[]
    yeast: string
}

interface Malt {
    name: string
    amount: ValueUnit
}

interface Hops {
    name: string
    amount: ValueUnit
    add: string
    attribute: string
}

export interface BeerProps {
    id?: number
    name?: string
    tagline?: string
    first_brewed?: string
    description?: string
    image_url?: string
    abv?: number
    ibu?: number
    target_fg?: number
    target_og?: number
    ebc?: number
    srm?: number
    ph?: number
    attenuation_level?: number
    volume?: ValueUnit
    boil_volume?: ValueUnit
    method?: Method
    ingredients?: Ingredients
    food_pairing?: string[]
    brewers_tips?: string
    contributed_by?: string
}

export interface BeersProps {
    beers: BeerProps[]
    setBeers: (val: BeerProps[]) => void
    isLoading: boolean
    setIsLoading: (val: boolean) => void
    currentPage: number
    setCurrentPage: (val: number) => void
    itemsPerPage: number
    setItemsPerPage: (val: number) => void
    showLoadMoreButton: boolean
    setShowLoadMoreButton: (val: boolean) => void
    itemsPerPageOptions: number[]
    updateItemsPerPage: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => void
    classes: {
        beersGrid: string
        beersSearchSelect: string,
        SearchFormControl: string
    }
    searchTypes: {
        [key: string]: string
    }
    searchType: string
    updateSearchType: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => void
    searchTerm: string
    updateSearchTerm: ChangeEventHandler<HTMLInputElement>
    searchBeers: () => void
    loadMoreBeers: () => void
}