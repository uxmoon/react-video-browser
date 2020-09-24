import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  // props.videos: array of videos to render on screen

  const renderList = videos.map((video) => {
    return <VideoItem video={video} />
  });

  return (
    <div className="ui relaxed divided list">{renderList}</div>
  )
}

export default VideoList;