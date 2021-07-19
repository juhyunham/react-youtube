import React , { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(({video , video: { snippet }, onVideoClick, display}) => {
	const displayType = display === `list` ? styles.list : styles.grid

	return ( 
	<li className={`${styles.video} ${displayType}`} >
		<button type="button" onClick = {() => {onVideoClick(video)}}>
			<div className={styles.img_wrap}>
				<img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt={snippet.title} />
			</div>
			<div className={styles.info_wrap}>
				<strong className={styles.title}>{snippet.title}</strong>
				<p className={styles.channel}>{snippet.channelTitle}</p>
			</div>
		</button>
	</li>
)})

export default VideoItem;