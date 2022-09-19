export const DEFAULT_ITEMS_PER_PAGE = 10

export const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50, 80]

export const SEARCH_TYPES = {
    default: 'Default',
    abv_gt: 'ABV: Greater Than',
    abv_lt: 'ABV: Less Than',
    ibu_gt: 'IBU: Greater Than',
    ibu_lt: 'IBU: Less Than',
    ebc_gt: 'EBC: Greater Than',
    ebc_lt: 'EBC: Less Than',
    beer_name: 'Beer Name Contains',
    yeast: 'Yeast Name Contains',
    brewed_before: 'First Brewed Before (MM/YYYY)',
    brewed_after: 'First Brewed After (MM/YYYY)',
    hops: 'Hops Name Contains',
    malt: 'Malt Name Contains',
    food: 'Food Pairing Contains'
}