import React from 'react'

const Video = () => {
  return (
     <video
  className="w-full h-full object-cover rounded-full"
  muted
  autoPlay
  loop
  playsInline
  src="./video.mp4"
/>
      
  )
}

export default Video
