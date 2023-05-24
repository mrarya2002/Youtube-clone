import React from "react";
import { Link } from "react-router-dom";

const SuggestVideoCard = ({key,video}) => {
  return (
    <>
    <div key={key} class="p-1">
    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left">
      <Link to={`/video/${video?.videoId}`} class="relative flex-shrink-0 md:w-48 md:h-32 w-full h-48 sm:mb-0 mb-3 block">
        <img alt="team" class="object-cover object-center rounded-lg overflow-hidden w-full h-full" src={video?.thumbnails[0]?.url}/>
        <p class="text-[10px] p-1 rounded-lg absolute top-1 right-1 backdrop-blur-3xl text-gray-100">110 sec</p>
      </Link>
      <div class="flex-grow sm:pl-4">
        <h2 class="font-medium text-md text-gray-200">{video?.title.length>60?video.title.slice(0,40)+"..":video.title}</h2>
        <h3 class="text-gray-500 my-1 md:my-2">{video?.author?.title}</h3>
        <p class="mb-4">3 hours ago . 112k views</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default SuggestVideoCard;
