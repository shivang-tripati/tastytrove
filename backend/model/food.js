const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: String,
    test: String,
})

module.exports = mongoose.model('food', FoodSchema)