const sendErrorResponse = (req, res, message, e) => {
    let responseData = {
        message,
        status: 'error',
        request: req.body,
        timeStamp: new Date().toISOString()
    }
    if (e) {
        responseData.error = e
    }
    res.send(responseData)
}

module.exports = sendErrorResponse