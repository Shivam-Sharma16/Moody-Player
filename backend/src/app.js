const express = require('express')
const songRoutes=require('./routes/song.route')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors({
//   origin: 'https://moody-frontend.vercel.app', // use your real Vercel frontend URL here
  credentials: true  
}))
app.use('/',songRoutes)



module.exports =app