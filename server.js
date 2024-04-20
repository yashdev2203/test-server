const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const initMongo = require('./config/mongo')
const USER = require('./models/user')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',async (req,res) =>{
   const users=  await USER.find()
   res.status(200).json({data:users})
})

// app.post('/',async(req,res)=>{
//     const creatUser = await USER.create(req.body)
//     console.log(creatUser)
// })


initMongo()


app.listen(port , ()=>{console.log(`Server is running on port:${port}`)})
