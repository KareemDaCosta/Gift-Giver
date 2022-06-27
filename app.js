const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const giftExchange = require("./routes/gift-exchange.js")
const { NotFoundError } = require('./utils/errors.js')

app.use(bodyParser.json()) //allows us to send objects

app.use(morgan('tiny')) //used for logging

app.use('/gift-exchange', giftExchange)

app.get('/', (req, res) => {
    res.send({"ping": "pong"})
})

app.use((req, res, next) => {
    next(new NotFoundError());
})

app.use((error, req, res, next) => {
    const {status, message} = error;

    const errorObject = {
        "status": status || 500,
        "message": message || "Something went wrong in the application"
    }
    res.status(status).send({"error": errorObject})
})

module.exports = app;