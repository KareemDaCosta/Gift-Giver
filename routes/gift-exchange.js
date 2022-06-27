const express = require('express')
const router = express.Router()
const GiftExchangeModel = require("../models/gift-exchange")

router.post("/pairs", function (req, res) {
    const names = req.body.names;
    const pairs = GiftExchangeModel.pairs(names);

    res.send(pairs);
})

router.post('/traditional', function(req, res) {
    const names = req.body.names;
    const result = GiftExchangeModel.traditional(names);

    res.send(result)
})

module.exports = router;