import React from 'react';
import styles from './video_detail.module.css'

const videoDetail = ({ video }) => {
	console.log(video)
	return  <h1>{video.snippet.title}</h1>
}



export default videoDetail;