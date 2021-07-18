import React, { useEffect, useState } from 'react';
import style from './app.module.css'
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)
    .then(video => setVideos(video))
  }

  useEffect(() => {
    youtube
    .mostPopular()
    .then(video => setVideos(video))
  }, [])

  return (
    <div className={style.app}>
      <Search 
        onSearch = {search}
      />
      <VideoList
        videos = {videos}
      />
    </div>
  );
}

export default App;
