// src/components/Player.js
import React from 'react';

import ReactPlayer from 'react-player';

const Player = ({ url }) => {
  return (
    <div>
      <h2>Music Player</h2>
      <ReactPlayer url={url} controls playing />
    </div>
  );
};

export default Player;
