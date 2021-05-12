import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
	return (
		<div className="app">
			<div className="app_top">
				<img
					className="app_logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
				/>
				<h1>Reels</h1>
			</div>

			<div className="app_videos">
				<VideoCard />
			</div>
		</div>
	);
}
export default App;
