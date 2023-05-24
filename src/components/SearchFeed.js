import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from "../utils/FetchApi";
import SearchVideoCard from './SearchVideoCard'
import { useGlobalContext } from '../context/Context';
import loader from '../images/load.gif'

const SearchFeed = () => {
    const [result, setResult] = useState();
    const { searchTerm } = useParams();
    const {loading, setLoading } = useGlobalContext();

    useEffect(() => {
        fetchSearchResults();
    }, [searchTerm]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${searchTerm}`).then((res) => {
            setResult(res?.contents);
            setLoading(false);
        });
    };
  
  return (
    <div class="p-1 sm:ml-16 mt-14 text-white">
      {loading && ( 
            <div className="w-full h-full flex justify-center items-center">
              <img src={loader} alt="Loading...." /> 
            </div>
          ) }
      <div class="flex flex-col">
      {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
      </div>
    </div>
  )
}

export default SearchFeed
