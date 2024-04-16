const mongoose = require('mongoose')

const connectDB = (url) => {mongoose.connect(url,{
        useNewUrlParser: true,
        useCreeateIndex: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true,
    })};

module.exports = connectDB