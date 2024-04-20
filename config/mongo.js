const mongoose = require('mongoose')

module.exports = ()=>{
    const connect = ()=>{
        mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 250,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
          },).then((e)=>{
            console.log('Connect on mongo')
        }).catch((e)=>{
            console.log(e)
    })
    }
    connect()
}