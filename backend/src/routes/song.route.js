const express=require('express')
const multer=require('multer')
const router=express.Router()
const songModel=require('../model/song.model')
const fileupload=require('../Services/storage.service')
const upload = multer({storage:multer.memoryStorage()})


router.post('/songs', upload.array("audio"), async (req, res) => {
  try {
    const { title, artist ,mood} = req.body;
    const files = req.files;

    const titles = Array.isArray(title) ? title : [title];
    const artists = Array.isArray(artist) ? artist : [artist];
        const moods = Array.isArray(mood) ? mood : [mood];


    const uploadedSongs = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const filedata = await fileupload(file); // upload to ImageKit
console.log(filedata);

      const songObject = {
        title: titles[i] || `Untitled ${i + 1}`,
        artist: artists[i] || "Unknown Artist",
        url: filedata.url,
                mood: moods[i] || "Unknown mood",

      };

      
      uploadedSongs.push(songObject);
      const newSong = await songModel.create({
        title: titles[i],
        artist: artists[i],
        audio : filedata.url,
                mood: moods[i],

      });

      uploadedSongs.push(newSong);
    }

    
    res.status(201).json({
      message: "Songs uploaded successfully",
      songs: uploadedSongs,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
})

// console.log(req.body);
// console.log(req.file);
// const filedata=await fileupload(req.file)
// console.log(filedata);
// await songModel.create({
//     title:req.body.title,
//     artist:req.body.artist,
//     audio:filedata.url,
//     mood:req.body.mood,
// })

// res.status(201).json({
//     message:'song recived',

// })

// });

router.get('/songs',async(req,res)=>{
    const {mood}=req.query

    const song= await songModel.find({
        mood:mood
    })

    res.status(200).json({
        message:"song fetched",
        song:song
    })
})









module.exports=router
