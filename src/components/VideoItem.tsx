import React from "react";
import "../styles/VideoItem.css";

function VideoItem() {
  return (
    <div className="main_video_container">
      <div className="test">
        <video controls className="codezone_main_video" />
      </div>
    </div>
  );
}

export default VideoItem;
