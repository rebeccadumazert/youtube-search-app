import React from "react";

function VideoItem({ video, idVideo }) {
    return (
        <div onClick={() => idVideo(video.id)}>
            <img src={video.thumbnails.high.url} alt="" />
            <h2>{video.title}</h2>
            <p>{video.description}</p>
        </div>
    )
}

export default VideoItem;