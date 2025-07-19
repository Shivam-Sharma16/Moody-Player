const express=require('express')
const multer=require('multer')
const router=express.Router()
const fileupload=require('../Services/storage.service')
const upload = multer({storage:multer.memoryStorage()})


router.post('/songs',upload.single("audio"),async (req,res)=>{
   const data= req.body
   
   console.log(data);
   console.log(req.file);
   const filedata= await fileupload(req.file)
   console.log(filedata);
   
   res.json({
    message:'recived'
   })
   
})









module.exports=router