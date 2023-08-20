const mongoose = require('mongoose')


const connectDB = (url) => {
    console.log('connecting to db')
    return mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
 



// .then(() => console.log('CONNECTED TO THE DB....'))
// . catch((err) => console.log(err))

module.exports = connectDB