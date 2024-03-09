import React from 'react'
// import VideoPlayer from './VideoPlayer';
import Pika from "../assets/pika.png"

function Foot() {
  
  
  return (
    <div  
     className='h-[25vh] w-full bg-[#CDEA68] px-20 flex gap-4 rounded-bl-full'>
      {/* <div className='font-mono'>
      <video width="400" height="300" controls>
        <source src="https://example.com/your-video-file.mp4" type="video/mp4" />
      </video>
      <div>

        </div>
      </div> */}
      <div><img className='w-[15vw]' src={Pika} alt="" /></div>
      <div className=' '>
        <h1 className='font-sans text-3xl font-black'>Pikachu!</h1>
      </div>

    </div>
  )
}

export default Foot