import React from 'react';
import PropTypes from 'prop-types';

const PlayPause = props => {
  if (props.is_playing) {
    return (
      <div
        className="pause-container d-flex align-items-center justify-content-center"
        onClick={props.pause}
      >
        <span id="pause" className="icon"></span>
      </div>
    );
  }
  return (
    <div
      className="resume-container d-flex align-items-center justify-content-center"
      onClick={props.resume}
    >
      <span id="resume" className="icon"></span>
    </div>
  );
};

export default PlayPause;
