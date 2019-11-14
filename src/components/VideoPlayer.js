import React from "react";

function VideoPlayer({ idUrl }) {
    console.log(idUrl)
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${idUrl}`} />
        </div>
    )
}

export default VideoPlayer;