const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to database");
        
    })
    .catch(()=>{
        console.log("error occured in connecting db");
        
    })
}

module.exports=connectDB