const mongoose = require('mongoose')


const webSchema = new mongoose.Schema({
    button: String,
    image:String
}, { timestamps: true })

module.exports = mongoose.model("website", webSchema)