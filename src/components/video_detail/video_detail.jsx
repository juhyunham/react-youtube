import React from 'react';
import styles from './video_detail.module.css'

const videoDetail = ({ video , video : {snippet}}) => {
	return ( <section className={styles.detail}>
		<iframe type="text/html" width="100%" height="500" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullscreen></iframe>
		<h2>{snippet.title}</h2>
		<h3>{snippet.channelTitle}</h3>
		<p>{snippet.description}</p>
	</section>)
}



export default videoDetail;