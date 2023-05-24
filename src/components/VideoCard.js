import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({key,video}) => {
  return (
    <>
    <div key={key} className="col-span-12 sm:col-span-6 md:col-span-3">
              <div class="w-full flex flex-col">
                <div class="relative h-40">
                  <Link to={`/video/${video?.videoId}`}>
                    <img
                      src={video?.thumbnails[0]?.url}
                      class="w-full h-full rounded-lg"
                    />
                  </Link>
                  <p
                    class="absolute right-2 top-2  text-white text-sm px-1 backdrop-blur-3xl"
                  >
                    {video?.lengthSeconds} sec
                  </p>
                </div>
                <div class="flex mt-2 gap-2 w-full">
                  <div className="w-10 h-10">
                  <Link to={`/channel/${video?.author?.channelId}`} className='w-full h-full'>
                    <img
                      src={video?.author?.avatar[0]?.url}
                      class="rounded-full w-full h-full"
                    />
                  </Link>
                  </div>
                  <div className="flex flex-col w-4/5">
                      <p class="text-gray-100 text-sm font-semibold ">{video?.title.slice(0,60)+"..."}</p>
                      <p class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">{video?.author?.title}</p>
                  </div>
                </div>
              </div>
            </div>
    </>  
  )
}

export default VideoCard
