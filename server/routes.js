const sendErrorResponse = require('./error/sendErrorResponse')
const punkApi = require('./punk/punkApi')

const configureRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Hello from your server!', timestamp: new Date().toISOString() })
    })

    app.post('/getBeers', async (req, res) => {
        try {
            const result = await punkApi(req.body)
            res.send(result.data)
        } catch (e) {
            console.log('getBeers error:', e)
            sendErrorResponse(req, res, 'An error occurred!', e)
        }
    })

    return app
}

module.exports = configureRoutes