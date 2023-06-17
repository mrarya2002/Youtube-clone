import React,{useEffect,useState} from "react";
import VideoCard from "./VideoCard";
import loader from '../images/load.gif'
import axios from "axios";
import { useGlobalContext } from "../context/Context";

const furl = "https://api.unsplash.com/search/photos?page=1&per_page=40&query=one+piece&client_id=K98Bz6zELrsMqcDf_p_RvfOdZ3IMS8qPfsnllwZObpY"

const Feed = () => {
  const { searchResults, loading } = useGlobalContext();
  const [images,setImage] = useState([])
  async function fetchData(url){
    const {data : {results}} =await axios.get(url)
    setImage(results)
  }
  useEffect(()=>{
    fetchData(furl)
  },[])
  return (
    <>
      <div class="p-1 sm:ml-16 mt-14">
        {/* popular channels */}
        {images.length>0 && (
          <div class="category flex gap-4 overflow-x-auto max-w-full text-white mx-2">
          {images.map((data, index) => {
            return (
              <div
                key={index}
                class="flex flex-col gap-3 text-sm w-16 hover:bg-gray-900"
              >
                <img
                  class="w-14 h-14 rounded-full self-center"
                  src={data.urls.small}
                  alt="user photo"
                />
                <span class="truncate text-gray-400 w-14">
                  {data.user.name}
                </span>
              </div>
            );
          })}
        </div>
        )}

        {/* category */}
        <div class="category flex gap-4 overflow-x-auto max-w-full mt-3 mx-2">
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            All
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Trending
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Music
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Movies
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Live
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Gaming
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            News
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Sports
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Learning
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Fashion & Beauty
          </a>
          <a class="my-2 flex h-8 cursor-pointer items-center justify-between rounded-2xl  px-[12px] py-0 text-sm text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Lifestyle
          </a>
        </div>

        {/* home videos feed */}
        <div class="p-4  mt-4">
          <div class="max-h-full ">
          {loading && ( 
            <div className="w-full h-full flex justify-center items-center">
              <img src={loader} alt="Loading...." /> 
            </div>
          ) }
            <div class="grid grid-cols-12 gap-4">
              {!loading &&
                searchResults.map((item) => {
                  if (item.type !== "video") return false;
                  return (
                    <VideoCard key={item?.video?.videoId} video={item?.video} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
