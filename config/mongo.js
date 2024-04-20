const mongoose = require('mongoose')

module.exports = ()=>{
    const connect = ()=>{
        mongoose.connect(process.env.MONGO_URI).then((e)=>{
            console.log('Connect on mongo')
        }).catch((e)=>{
            console.log(e)
    })
    }
    connect()
}