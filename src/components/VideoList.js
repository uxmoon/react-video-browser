import React from "react";

const VideoList = (props) => {
  // props.videos: array of videos to render on screen
  return <div>{props.videos.length}</div>
}

export default VideoList;