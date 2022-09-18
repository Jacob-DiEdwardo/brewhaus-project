const sendErrorResponse = require('./error/sendErrorResponse')
const { 
    punkApiGetBeers,
    punkApiGetBeerById
} = require('./punk/punkApi')

const configureRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Hello from your server!', timestamp: new Date().toISOString() })
    })

    app.post('/getBeers', async (req, res) => {
        try {
            const result = await punkApiGetBeers(req.body)
            res.send(result.data)
        } catch (e) {
            console.log('getBeers error:', e)
            sendErrorResponse(req, res, 'getBeers error occurred!', e)
        }
    })

    app.post('/getBeerById', async (req, res) => {
        try {
            const result = await punkApiGetBeerById(req.body.id)
            res.send(result.data)
        } catch (e) {
            console.log('getBeers error:', e)
            sendErrorResponse(req, res, 'getBeerById error occurred!', e)
        }
    })

    return app
}

module.exports = configureRoutes