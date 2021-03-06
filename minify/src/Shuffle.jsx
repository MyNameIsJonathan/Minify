import React from 'react';
import PropTypes from 'prop-types';

const Shuffle = props => {
  const { shuffle_state, toggleShuffle } = props;

  if (shuffle_state) {
    return (
      <div className="shuffle-container d-flex align-items-center justify-content-center">
        <span
          id="shuffle"
          className="icon filter-green"
          onClick={toggleShuffle}
         />
      </div>
    );
  }
  return (
    <div className="shuffle-container d-flex align-items-center justify-content-center">
      <span id="shuffle" className="icon" onClick={toggleShuffle} />
    </div>
  );
};

Shuffle.propTypes = {
  shuffle_state: PropTypes.string.isRequired,
  toggleShuffle: PropTypes.func.isRequired,
};

export default Shuffle;
