import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {
        props.videos.map((video) => {
          return <VideoItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag} />
        })
      }
    </ul>
  )
}

export default VideoList;