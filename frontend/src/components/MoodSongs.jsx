import { useState } from 'react';
import './MoodSongs.css'
const MoodSongs = ({songs}) => {
  if (!Array.isArray(songs)) {
    console.error("Expected an array but got:", songs);
    return <div>No songs available</div>;
  } if (!Array.isArray(songs)) {
    console.error("Expected an array but got:", songs);
    return <div>No songs available</div>;
  }

  const [isPlaying, setisPlaying] = useState(null)

  const handlePlayPause=(index)=>{
    if(isPlaying===index){
      setisPlaying(null);
    }
    else{
      setisPlaying(index)
    }
  }
console.log(songs[0]?.mood);


const song=songs?.map((song,index)=>{
  return  <div className='track-single-row' key={index}>
       <div className='track-details'> 
       <span>{`${index+1}`}. {song?.title}</span> 
      
        </div>
        <div className='track-buttons'>
          {
            isPlaying === index && 
            <audio
            src={song.audio}
            style={{display:'none'}}
            autoPlay={isPlaying===index}>
                          </audio>
          }
          <button onClick={()=>handlePlayPause(index)}>
{isPlaying ===index ?             <i className="ri-pause-circle-fill"></i>
:              <i className="ri-play-circle-fill"></i>
}

          </button>

        </div>
    </div>
    
})


  return (
<>
      <h1 className='abovesongs'>Recommended Tracks For Mood : <span className='uppercase'>{songs[0]?.mood}</span>  </h1>

    <div className='tracks flex flex-col items-center '>
      
      
      
{song}

    </div>
    </>
  )
}

export default MoodSongs
