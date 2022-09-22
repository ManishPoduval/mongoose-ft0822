const mongoose = require('mongoose')
const MovieModel = require('./models/Movie.model')
const PeopleModel = require('./models/People.model')



mongoose.connect('mongodb://localhost:27017/video')
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log('Something went worng', err)
    })

// Create    
//  PeopleModel.create({name: 'Manish', age: "asjdaysdasd", location:'IND' })
//     .then((res) => {
//         console.log(res)
//     })
    // .catch((err) => {
    //     console.log('Something went worng', err)
    // })

/*
async function createData(){
  try {
    let response = await PeopleModel.create({name: 'Ansh'})
    console.log(response)
  }
  catch(err){
    console.log('')
  }
}    

createData()
*/
// Read

// MovieModel.findById('632c01f7bbdeba1ca0edab8f')
//     .then((res) => {
//         console.log(res)
//     })

// MovieModel.find({director: "Christopher Nolan"}).sort({rate: 1}).skip(10)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log('Something went worng', err)
//     })

//TODO 
// MovieModel.find({director: "Christopher Nolan",  genre: { $in: ['Drama'] }})
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log('Something went worng', err)
//     })

// Update
// MovieModel.updateOne({director: "CN"}, {rate: 10})

//Delete
// MovieModel.findByIdAndDelete('632c01f7bbdeba1ca0edabaa')
// MovieModel.deleteMany({year: "2005"})
