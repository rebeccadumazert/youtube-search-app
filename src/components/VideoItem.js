import React from 'react';
import P from 'prop-types';

function VideoItem({ video, idVideo }) {
  return (
    <div onClick={() => idVideo(video.id)}>
      <img src={video.thumbnails.high.url} alt="" />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
}
VideoItem.propTypes = {
  video: P.shape({
    id: P.string,
    title: P.string,
    description: P.string,
    thumbnails: P.shape({ high: P.shape({ url: P.string }) }),
  }),
  idVideo: P.func,
};
export default VideoItem;
