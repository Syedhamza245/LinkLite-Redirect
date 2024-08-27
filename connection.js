const mongoose = require('mongoose')

async function connectToMongoDB(url) {
    mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("error is", err))
}

module.exports = {
    connectToMongoDB
}
