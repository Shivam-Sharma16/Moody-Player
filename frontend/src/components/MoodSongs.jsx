import React, { useState } from 'react'
import './MoodSongs.css'

const MoodSongs = () => {

    const [songs, setsongs] = useState([
        {
            title:"song-title1",
            artist:"song_artist1"
        },
         {
            title:"song-title2",
            artist:"song_artist2"
        },
         {
            title:"song-title3",
            artist:"song_artist3"
        }
    ])
const song=songs.map((song,index)=>{
  return  <div className='track-single-row' key={index}>
       <div className='track-details'> 
       <span>{song.title}</span> 
        <span>{song.artist}</span>
        </div>
        <div className='track-buttons'>
            <i className="ri-pause-circle-fill"></i>
            <i className="ri-play-circle-fill"></i>

        </div>
    </div>
    
})

  return (


    <div className='tracks'>
      <h1>Recommended Tracks</h1>
{song}
    </div>
  )
}

export default MoodSongs
