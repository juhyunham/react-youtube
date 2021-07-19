import React, { useEffect, useState } from 'react';
import style from './app.module.css'
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  const search = query => {
    youtube
    .search(query)
    .then(video => setVideos(video))

    setSelectedVideo(null)
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
      <section className={style.content}>
        { selectedVideo && <div className={style.detail}>
            <VideoDetail video={selectedVideo} />
        </div>}
        <div className={style.list}>
          <VideoList
            videos = {videos}
            onVideoClick={selectVideo}
            display = {selectedVideo ? `list` : `grid`}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
