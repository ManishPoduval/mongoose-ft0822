const mongoose = require('mongoose')

// create our schema
let PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        max: [100, 'Too Old'],
        min: 1,
    },
    address: {
        type: String,
        enum: ['USA', 'IND', 'GER'],
    }
})

// create our model
let PeopleModel = mongoose.model('people', PeopleSchema)

// export the model
module.exports = PeopleModel