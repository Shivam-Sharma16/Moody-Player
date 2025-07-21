import React from 'react'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'
import { useState } from 'react'

const App = () => {

      const [songs, setsongs] = useState([])
      
      

  return (
    <div >
<div className='w-full flex items-center justify-center'>
  
      <div className='top-container bg-green-700  flex flex-col gap-[1rem] '>
        <div className='flex items-center justify-center gap-[1rem] mt-[2rem]'>
          <i className=" text-5xl bg-white text-black rounded-2xl p-[1rem] mt-[2rem]
          ri-music-2-fill"></i>
          <h1 className='text-5xl mt-[2rem]'>Moody Player</h1>
        </div>
        <p className='text-3xl font-thin'>Let your emotion guide your playlist</p>
      </div>
</div>

<FacialExpression setsongs={setsongs} />
<hr />
<MoodSongs songs={songs}   />

<div>
  <h4 className='footer-text'>&copy; 2025 Moody Player. All rights reserved.</h4>
</div>

    </div>
  )
}

export default App
