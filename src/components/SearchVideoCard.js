import React from 'react'
import { Link } from 'react-router-dom'

const SearchVideoCard = ({video}) => {
  
  return (
     <div class="text-white body-font overflow-hidden">
          <div class="container sm:pl-10 py-3 mx-auto">
            <div class="lg:w-4/5 flex flex-wrap">
              <Link className='relative' to={`/video/${video?.videoId}`}>
              <img
                alt="ecommerce"
                class="lg:w-96 w-full lg:h-56 h-64 object-cover object-center rounded"
                src={video?.thumbnails[0]?.url}
              />
              <p class="text-sm p-1 rounded-lg absolute top-1 right-1 backdrop-blur-3xl text-gray-100">{video?.lengthSeconds} sec</p>
              </Link>
              <div class="lg:w-1/5 flex-grow w-full lg:pl-10 mt-1 lg:mt-0">
                <h2 class="text-lg">
                {video?.title}
                </h2>
                <p class="text-sm text-gray-300 my-1">12 hours ago . 11k views</p>
                
                  <div class="flex items-start gap-4 mb-1">
                  <Link to={`/channel/${video?.author?.channelId}`}>
                    <img
                      class="h-6 w-6 rounded-full"
                      src={video?.author?.avatar[0]?.url}
                    />
                </Link>
                <p class="text-gray-200 text-md">
                {video?.author?.title}
                </p>
            </div>
                <p class="leading-relaxed hidden sm:block">
                {video?.descriptionSnippet?.slice(0,100)}
                </p>
              </div>
            </div>
          </div>
        </div> 
  )
}

export default SearchVideoCard
