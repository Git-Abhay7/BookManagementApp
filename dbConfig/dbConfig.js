const mongoose = require('mongoose')
const url = process.env.DB_URL + process.env.DB_NAME
mongoose.connect(url).then(() => {
    console.log('Book Management App database connected.')
}).catch((error) => {
    console.log('Book Management App database not connected, error : ', error)
})