import React,{useEffect,useState} from 'react'
import ReactPlayer from "react-player/youtube";
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/Context' 

import { fetchDataFromApi } from "../utils/FetchApi";
import SuggestVideoCard from './SuggestVideoCard';

const VideoDetail = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const {setLoading} = useGlobalContext()

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
}, [id]);

const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
        setVideo(res);
        setLoading(false);
    });
};

const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        setRelatedVideos(res);
        setLoading(false);
    });
};

  return (
    <div class="p-1 sm:ml-16 ">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-2 py-16 gap-x-8 md:flex-row flex-col ">
          <div class="w-full md:w-3/5">
            <div class="video h-48 md:h-96  w-full">
              <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
            </div>
            <div class="content">
              <h1 class="sm:text-xl text-lg mb-1 font-medium text-white">{video?.title}</h1>
              <p>88k views .10 months ago</p>
              <div class="flex justify-between">
                <div class="channel flex gap-2 items-center">
                  <img src={video?.author?.avatar[0]?.url} class="w-10 h-10 rounded-full" alt=""/>
                  <h1 class="text-lg text-white font-medium">{video?.author?.title}</h1>
                </div>
                <div class="stats text-right flex gap-3">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                    </svg>
                    <p>11k</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                    </svg>
                    <p>22k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/5">
              <div class="container mx-auto">
                <div class="flex flex-wrap m-1">
                {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SuggestVideoCard
                                key={index}
                                video={item?.video}
                            />
                        );
                    })}
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoDetail