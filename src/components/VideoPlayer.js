import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ idUrl }) {
  console.log(idUrl);
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${idUrl}`} />
    </div>
  );
}
VideoPlayer.propTypes = {
  idUrl: PropTypes.string.isRequired,
};
export default VideoPlayer;
