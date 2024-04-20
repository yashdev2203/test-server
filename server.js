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
    try {
       const users=  await USER.find()
       res.status(200).json({data:users})
    
   } catch (error) {
    res.status(500).json({data:error})
   }
})

app.post('/',async(req,res)=>{
    try {
        const creatUser = await USER.create(req.body)
    console.log(creatUser)
    res.status(200).json({data:creatUser})
    } catch (error) {
        res.status(500).json({data:error})
    }
})


initMongo()


app.listen(port , ()=>{console.log(`Server is running on port:${port}`)})
