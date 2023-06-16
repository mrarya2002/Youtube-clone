import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'


function App() {
  return (
    <>
    <BrowserRouter basename='/youtube-clone'>
    <Header/>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
