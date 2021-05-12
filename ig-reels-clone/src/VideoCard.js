import React from 'react';
import './VideoCard.css';

function VideoCard() {
	return (
		<div className="videoCard">
			<video
				className="video_player"
				src="https://www.instagram.com/reel/CC_wTR3oidR/?igshid=1r5zcpv07h1gb"
				alt="IG Reels"
				loop
			/>
		</div>
	);
}

export default VideoCard;
