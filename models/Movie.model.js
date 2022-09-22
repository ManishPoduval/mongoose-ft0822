const mongoose = require("mongoose")

const MoviesSchema = new mongoose.Schema({
    title: String, 
    year: String,
    director: String,
    duration: String,
    rate: String
})

let MovieModel = mongoose.model('movie', MoviesSchema )

module.exports = MovieModel